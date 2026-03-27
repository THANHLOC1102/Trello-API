/* eslint-disable indent */

import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoute.js'
const Router = express.Router()
Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'API is running!'})
})

Router.use('/boards', boardRoutes)
export const API_V1 = Router