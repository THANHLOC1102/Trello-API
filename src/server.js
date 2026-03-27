/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB , CLOSE_DB} from './config/mongodb.js'
import { env } from './config/environment.js'
import { API_V1 } from './routes/v1/index.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'
const START_SERVER = () => {
  const app = express()

  // xử lý dữ liệu JSON trong body của request
  app.use(express.json())
  // Routes
  app.use('/v1', API_V1)

  // Middleware xử lý lỗi
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3.Hello ${env.AUTHOR}, I am running at http://${ env.APP_HOST }:${ env.APP_PORT}/`)
  })

  exitHook(() => {
    console.log('4.Disconnecting from MongoDB.')
    CLOSE_DB()
  })
}

(async () => {
  try {
    console.log('1.Connecting to MongoDB...')
    await CONNECT_DB()
    console.log('2.Connected to MongoDB')
    START_SERVER()
  }
  catch (err) {
    console.error(err)
    process.exit(0)
  }

})()
