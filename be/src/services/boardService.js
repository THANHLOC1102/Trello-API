/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)
    //console.log(createdBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    //console.log(getNewBoard)
    // tra ket qua ve , trong service luon phai co return
    return getNewBoard
  } catch (error) {throw error}
}
const getDetail = async (boardId) => {
  try {
    console.log(boardId)
    const board = await boardModel.getDetail(boardId)
    if (!board) throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found')
    // tra ket qua ve , trong service luon phai co return
    return board
  } catch (error) {throw error}
}
export const boardservice = {
  createNew,
  getDetail
}