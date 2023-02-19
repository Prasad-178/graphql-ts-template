import bodyParser from 'body-parser'
import express, { Express } from 'express'

const app: Express = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true, limit: '50mb', parameterLimit: 50000}))
app.use(express.json())

export default app