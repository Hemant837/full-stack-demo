const { connectToDatabase, executeQuery, sql } = require("../db");

module.exports = class PerformAuthentication {
  static async loginUser(userEmail, userPassword) {
    const connection = await connectToDatabase();

    // Check if the user exists in the database
    const userResult = await executeQuery(
      connection,
      `
        SELECT * FROM user_data
        WHERE userEmail = '${userEmail}'
      `
    );

    if (userResult.recordset.length === 0) {
      // User not found
      return {
        error: "User not found. Please create an account before login.",
      };
    }

    const userId = userResult.recordset[0].userId; // Extract userId

    // Check if the password is correct
    const passwordResult = await executeQuery(
      connection,
      `
        SELECT * FROM user_data
        WHERE userEmail = '${userEmail}' AND userPassword = '${userPassword}'
      `
    );

    if (passwordResult.recordset.length === 0) {
      // Invalid credentials
      return { error: "Invalid credentials. Please check your credentials." };
    }

    // Return user data including userId
    return { user: { userId, ...userResult.recordset[0] } };
  }

  static async signupUser(userId, fullName, userEmail, userPassword) {
    const connection = await connectToDatabase();
    const existingUserResult = await executeQuery(
      connection,
      `
        SELECT * FROM user_data
        WHERE userId = '${userId}'
      `
    );

    if (existingUserResult.recordset.length > 0) {
      // User with the provided email already exists
      return { error: "Email already in use. Please use a different email." };
    }

    // Insert the new user into the database
    const insertResult = await executeQuery(
      connection,
      `
        INSERT INTO user_data (userId, fullName, userEmail, userPassword)
        VALUES ('${userId}', '${fullName}', '${userEmail}', '${userPassword}')
      `
    );
    return { user: insertResult };
  }
};
