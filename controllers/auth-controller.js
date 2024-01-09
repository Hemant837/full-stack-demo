const { connectToDatabase, executeQuery, sql } = require("../db");
const jwt = require("jsonwebtoken");

const secretKey = "user@123456";
const PerformAuthentication = require("../models/auth-models");

// login user
exports.userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const authResult = await PerformAuthentication.loginUser(
      userEmail,
      userPassword
    );

    if (authResult.error) {
      return res.status(401).json({ error: authResult.error });
    }

    const { userId, userEmail: authUserEmail } = authResult.user;

    const token = jwt.sign(
      {
        userId,
        userEmail: authUserEmail,
      },
      secretKey
    );

    res.json({
      userId,
      token,
      message: "Authentication successful",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (sql) {
      sql.close();
    }
  }
};

// Signup user

exports.userSignup = async (req, res) => {
  try {
    // const connection = await connectToDatabase();
    const { userId, fullName, userEmail, userPassword } = req.body;

    const signupResult = await PerformAuthentication.signupUser(
      userId,
      fullName,
      userEmail,
      userPassword
    );

    if (signupResult.error) {
      // Handle the case where the email is already in use
      return res.status(400).json({ error: signupResult.error });
    }

    const tokenPayload = {
      userId,
      fullName,
      userEmail,
    };

    const token = jwt.sign(tokenPayload, secretKey);

    res.json({ userId, token, message: "User registered successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (sql) {
      sql.close();
    }
  }
};

// for getting profile data
exports.userProfileData = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const userId = req.params.userId;

    // Query the database to get the user's profile data
    const profileResult = await executeQuery(
      connection,
      `
        SELECT fullName, userEmail
        FROM user_data
        WHERE userId = '${userId}'
      `
    );

    // Check if the user was found
    if (profileResult.recordset.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send the user's profile data in the response
    const profileData = {
      fullName: profileResult.recordset[0].fullName,
      userEmail: profileResult.recordset[0].userEmail,
    };

    res.json(profileData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the SQL connection when done
    sql.close();
  }
};
