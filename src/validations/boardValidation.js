/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res,next) => {
  const correcCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(250).trim().strict()
  })

  try {
    await correcCondition.validateAsync(req.body ,{ abortEarly: false })
    //validation thành công di ti tiếp controller
    next()
  } catch (error) {
    const errorMessage = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    next(errorMessage)
  }  
  
}

export const boardValidation = { 
  createNew
}