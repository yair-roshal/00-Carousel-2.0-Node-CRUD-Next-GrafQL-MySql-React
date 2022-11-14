const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const mysql = require('mysql')
const app = express()

// const port = 3306
const port = 5500


app.use(cors())

// MySQL=============================================
const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'foo',
	password: 'foo',
	database: 'israelhayom',
})

const getAllWritersPromise = () => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)

			connection.query('SELECT * from writers', (err, rows) => {
				connection.release()

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

const createWriterPromise = input => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)
			connection.on('error', function (err) {
				console.log('[mysql error]', err)
			})

			const writer = [input.id, input.name, input.image, input.article]
			const sql = 'INSERT INTO writers(id, name, image,article) VALUES(?, ?,?, ?)'

			connection.query(sql, writer, (err, rows) => {
				connection.release()

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

const updateWriterPromise = input => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)
			console.log(`input ${JSON.stringify(input, null, 4)}`)
			connection.on('error', function (err) {
				console.log('[mysql error]', err)
			})

			const sql = `UPDATE writers SET name=?,image=?,article=? WHERE id=?`
			const data = [input.name, input.image, input.article, input.id]

			connection.query(sql, data, (err, rows) => {
				connection.release()

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

const getOneWriterPromise = id => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)

			connection.query('SELECT * from writers WHERE id = ?', [id], (err, rows) => {
				connection.release()

				if (!err) {
					resolve(rows)
				} else {
					console.log(err)
				}
			})
		})
	})
}

const deleteWriterPromise = id => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) throw err
			console.log(`connected as id ${connection.threadId}`)

			connection.query('DELETE FROM writers WHERE id = ?', [id], (err, rows) => {
				connection.release()

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
		return getOneWriterPromise(id)
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
		return createWriterPromise(input)
			.then(function (input) {
				let rowsJSON = JSON.stringify(input, null, 4)
				console.log(`rowsJSON=== ${rowsJSON}`)
			})
			.catch(err =>
				setImmediate(() => {
					throw err
				}),
			)
	},

	updateWriter: ({ input }) => {
		return updateWriterPromise(input)
			.then(function (input) {
				console.log(`input ${JSON.stringify(input, null, 4)}`)
			})
			.catch(err =>
				setImmediate(() => {
					throw err
				}),
			)
	},

	deleteWriter: ({ id }) => {
		return deleteWriterPromise(id)
			.then(function (id) {
				console.log(`deleteWriterID=== ${JSON.stringify(id, null, 4)}`)
			})
			.catch(err =>
				setImmediate(() => {
					throw err
				}),
			)
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

app.listen(port, () => console.log(`server started on port ${port}`))

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

// mutation   {
// 	createWriter(input: {id:33, name:"222", image:"2222",article:"222"}) {
// 		id, name, image,article
// 	}
// }

// mutation   {
// 	deleteWriter(id:33) {
// 		id, name, image,article
// 	}
// }

// mutation   {
// 	updateWriter(input: {id:33, name:"222", image:"2222",article:"222"}) {
//    id, name, image,article
// }
// }
