import express, { json, static as static_ } from 'express'
import Routes from './routes'
import { resolve } from 'path'
const app = express()

app.use(json())

app.use('/files', static_(resolve(__dirname, '..', 'uploads')))

app.use(Routes)

app.listen(3000, () => console.log('Server is listening!'))