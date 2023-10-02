import { isAxiosError } from 'axios'
import { setErrorAC } from '../../app/app-reducer'
import { Dispatch } from 'redux'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage = ''
  if(isAxiosError<ServerError>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message
      : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(setErrorAC(errorMessage))
}


type ServerError = {
  errorMessages: Array<{
    message: string,
    field: string
  }>
}