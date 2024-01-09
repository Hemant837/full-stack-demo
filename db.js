const sql = require("mssql/msnodesqlv8");

const config = {
  server: "HEMANT\\SQLEXPRESS",
  database: "full_stack_demo",
  driver: "{ODBC Driver 17 for SQL Server}",
  options: {
    trustedConnection: true,
  },
};

const connectToDatabase = async () => {
  try {
    await sql.connect(config);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

const executeQuery = (connection, query) => {
  return new Promise((resolve, reject) => {
    const request = new sql.Request(connection);
    request.query(query, (err, result) => {
      if (err) {
        console.error("Query error:", err);
        reject(err);
      } else {
        console.log(result.recordset);
        resolve(result);
      }
    });
  });
};

module.exports = {
  connectToDatabase,
  executeQuery,
  sql,
};
