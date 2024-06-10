// Importing module
const mysql = require('mysql2') // importing the mysql2 module, since it is the latest

const connection = mysql.createConnection({ // creating the connection with required properties
	host: "localhost",
	user: "root",
	password: "root",
	database: "world",
    port:3307
})

// Connecting to database
connection.connect(function (err) {
	if (err) {
		console.log("Error in the connection")
		console.log(err)
	}
	else {
		console.log(`Database Connected`)
		connection.query(`SHOW TABLES`,  // SQL query
			function (err, result) { // the SQL query result is stored in the result and it is passed as a paramenter to the function
				if (err)
					console.log(`Error executing the query - ${err}`)
				else
					console.log("Result: ", result) // printing the result
			})
	}
})
