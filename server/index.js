const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const writers = [
	{
		id: 1,
		name: 'Vasya',
		image: 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-4.png',
		article: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ',
	},
];

const app = express();
app.use(cors());

const createWriter = input => {
	const id = Date.now();
	return {
		id,
		...input,
	};
};
const root = {
	getAllWriters: () => {
		return writers;
	},
	getWriter: ({ id }) => {
		return writers.find(writer => writer.id == id);
	},
	createWriter: ({ input }) => {
		const writer = createWriter(input);
		writers.push(writer);
		return writer;
	},
};

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
		schema,
		rootValue: root,
	}),
);

app.listen(5000, () => console.log('server started on port 5000'));
