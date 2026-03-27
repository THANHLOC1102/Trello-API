/* eslint-disable no-console */
/* eslint-disable indent */
import { StatusCodes } from 'http-status-codes'
import { boardservice} from '~/services/boardService'
// import ApiError from '~/utils/ApiError'
const createNew = async (req, res, next) => {
    try{
      const createdBoard = await boardservice.createNew(req.body) 
      //co ket qua tra ve tu service thi se tra ve cho client
      res.status(StatusCodes.CREATED).json({ createdBoard })
    } catch (error) {next(error)}
} 
const getDetail = async (req, res, next) => {
    try{
      const boardId = req.params.id
      const board = await boardservice.getDetail(boardId) 


      res.status(StatusCodes.OK).json({ board })
    } catch (error) {next(error)}
} 
export const boardController = {
  createNew,
  getDetail,
}