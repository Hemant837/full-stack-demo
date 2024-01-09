const { connectToDatabase, executeQuery, sql } = require("../db");

// for deleting the product by product id
exports.deleteProduct = async (req, res) => {
  try {
    const connection = await connectToDatabase();

    const productId = req.params.id;

    // Check if the product exists before attempting to delete
    const checkProductResult = await executeQuery(
      connection,
      `
          SELECT * FROM Products WHERE id = ${productId}
        `
    );
    if (checkProductResult.recordset.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // deleting the product
    await executeQuery(
      connection,
      `DELETE FROM Products WHERE id = ${productId}
        `
    );

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    sql.close();
  }
};

// for updating the product
exports.updateProduct = async (req, res) => {
  try {
    const connection = await connectToDatabase();

    const productId = req.params.id;
    const { pName, pDescription, price, imgUrl } = req.body;

    // Check if the product exists before attempting to delete
    const checkProductResult = await executeQuery(
      connection,
      `
        SELECT * FROM Products WHERE id = ${productId}
      `
    );

    if (checkProductResult.recordset.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product
    await executeQuery(
      connection,
      `
        UPDATE Products
        SET pName = '${pName}', pDescription = '${pDescription}', price = ${price}, imgUrl = '${imgUrl}'
        WHERE id = ${productId}
      `
    );

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    sql.close();
  }
};

// for adding product
exports.addProduct = async (req, res) => {
  try {
    const connection = await connectToDatabase();

    const { id, pName, pDescription, price, imgUrl } = req.body;

    const insertResult = await executeQuery(
      connection,
      `
        INSERT INTO Products (id, pName, pDescription, price, imgUrl)
        VALUES ('${id}', '${pName}', '${pDescription}', ${price}, '${imgUrl}')
      `
    );

    console.log("Product added:", insertResult);

    res.json({ product: req.body, message: "Product added successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    sql.close();
  }
};

// for fetching all the products
exports.getAllProducts = async (req, res) => {
  try {
    const connection = await connectToDatabase();

    // Example query execution
    const result = await executeQuery(connection, "SELECT * FROM Products");
    // Process the result as needed

    // console.log(result.recordset);

    // Send the result as JSON in the response
    res.json(result.recordset);
  } catch (err) {
    console.error("Error:", err);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the connection when done with it
    sql.close();
  }
};
