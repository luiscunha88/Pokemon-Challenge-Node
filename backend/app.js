

import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: accessLogStream })) // log requests
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send({ status: 'OK' })
});

const server = app.listen(8081, () => {
	console.log(`API Server listening at http://localhost:8081`)
});
