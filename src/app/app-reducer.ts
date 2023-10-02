export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-STATUS': {
      return {
        ...state, status: action.status
      }
    }
    case 'SET-ERROR': {
      return {
        ...state, error: action.error
      }
    }
    default:
      return state
  }
}

type ActionsType = setStatusType | setErrorType


export type setStatusType = ReturnType<typeof setStatusAC>
export type setErrorType = ReturnType<typeof setErrorAC>

export const setStatusAC = (status: RequestStatusType) => {
  return {
    type: 'SET-STATUS',
    status
  } as const
}

export const setErrorAC = (error: string | null) => {
  return {
    type: 'SET-ERROR',
    error
  } as const
}
