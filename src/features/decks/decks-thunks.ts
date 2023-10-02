import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setErrorAC, setStatusAC } from '../../app/app-reducer'
import { AppDispatch } from '../../app/store'
import { AxiosError, isAxiosError } from 'axios'
import { handleError } from '../../common/utils/handle-error'

export const fetchDecksTC = () => async (dispatch: AppDispatch) => {
  dispatch(setStatusAC('loading'))

  try {
    let result = await decksAPI.fetchDecks()
    dispatch(setDecksAC(result.data.items))
    dispatch(setStatusAC('succeeded'))
  } catch (e) {
    dispatch(setStatusAC('failed'))
  }
}


export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    let result = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(result.data))
  } catch (e) {
    handleError(e, dispatch)
  }
}


