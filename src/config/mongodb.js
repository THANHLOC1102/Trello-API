//loccao1102_db_user
//U2cmi6ZWke6GNW4z
import { env } from './environment.js'
import { MongoClient , ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

// Connect to MongoDB and get the database instance
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  // kết nối đến MongoDB
  await mongoClientInstance.connect()
  // kết nối thành công, gán instance của database vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}
export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error('Database not connected. Please call CONNECT_DB first.')
  }
  return trelloDatabaseInstance
}
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}