const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const mysql = require('mysql')

const app = express()
app.use(cors())

let writers = []

const writersConst = [
	{
		id: 1,
		name: 'Vasya',
		image: 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-4.png',
		article: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ',
	},
	{
		id: 2,
		name: 'Vasya222',
		image: 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-4.png',
		article: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ',
	},
]

// MySQL=============================================
const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'foo',
	password: 'foo',
	database: 'israelhayom',
})

// Get all writers==============================================
// app.get('', (req, res) => {
// 	pool.getConnection((err, connection) => {
// 		if (err) throw err
// 		console.log(`connected as id ${connection.threadId}`)

// 		connection.query('SELECT * from writers', (err, rows) => {
// 			connection.release()

// 			if (!err) {
// 				res.send(rows)
// 				writers = rows
// 			} else {
// 				console.log(err)
// 			}
// 		})
// 	})
// })

const createWriter = input => {
	const id = Date.now()
	return {
		id,
		...input,
	}
}

const getAllWritersPromise = () => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)

			pool.query('SELECT * from writers', (err, rows) => {
				if (!err) {
					resolve(rows)
				} else {
					console.log(err)
					return reject(err)
				}
			})
		})
	})
}

const getAllOneWriterPromise = id => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)

			pool.query('SELECT * from writers WHERE id = ?', [id], (err, rows) => {
				if (!err) {
					resolve(rows)
				} else {
					console.log(err)
				}
			})
		})
	})
}

const root = {
	getAllWriters: () => {
		return getAllWritersPromise()
			.then(function (rows) {
				let rowsJSON = JSON.stringify(rows, null, 4)
				console.log(`rowsJSON=== ${rowsJSON}`)
				return rows
			})
			.catch(err =>
				setImmediate(() => {
					throw err
				}),
			)
	},

	getWriter: ({ id }) => {
		return getAllOneWriterPromise(id)
			.then(function (rows) {
				let rowsJSON = JSON.stringify(rows, null, 4)
				console.log(`rowsJSON=== ${rowsJSON}`)
				return rows[0]
			})
			.catch(err =>
				setImmediate(() => {
					throw err
				}),
			)

		// return writers.find(writer => writer.id == id);
	},
	createWriter: ({ input }) => {
		const writer = createWriter(input)
		writers.push(writer)
		return writer
	},
}

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
		schema,
		rootValue: root,
	}),
)

app.listen(5000, () => console.log('server started on port 5000'))

// query {
// 	getAllWriters {
// 		id, name, image, article
// 	}
// }

// query {
// getWriter(id:2) {
// 		id, name
// 	}

// }
