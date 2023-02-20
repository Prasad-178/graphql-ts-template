import express, { Express } from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import links from './config/links'

const app: Express = express()

app.use(compression());

app.use(express.json({
    limit: '50mb'
}));

app.use(cors({
    origin:[links.apolloStudio, links.localhost, links.localhost],
    methods:['POST','GET','HEAD','PUT','DELETE'],
    credentials: true
}))

app.use(cookieParser());

export default app