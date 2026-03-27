/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/**
 */
import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'
import { ObjectId } from 'mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_schema = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(3).max(250).trim().strict(),
  columnOrderIds: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now()),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy : Joi.boolean().default(false)
})
const validateSchema = async (data) => {
  return await BOARD_COLLECTION_schema.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
    try {
      const validatedValue = await validateSchema(data)
      const createdBoard = await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(validatedValue)
      return createdBoard
    } catch (error) {throw new Error(error)}
}
const findOneById = async (id) => {
    try {
      const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: new ObjectId(id) })
      return result 
    } catch (error) { throw new Error(error)}
}
const getDetail = async (id) => {
    try {
      const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: new ObjectId(id) })
      return result
    } catch (error) { throw new Error(error)}
}
export const boardModel = {
    BOARD_COLLECTION_NAME,
    BOARD_COLLECTION_schema,
    createNew,
    findOneById,
    getDetail
}