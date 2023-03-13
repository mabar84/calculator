const initialState = {
    result: 0,
    a: '',
    b: '',
    sign: ''
}

type InitialStateType = typeof initialState

export const calcReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-SIGN":
            return {...state, sign: action.sign}
        case "SET-A":
            return {...state, a: state.a + action.a}
        case "SET-B":
            return {...state, b: state.b + action.b}
        case "SET-NULL":
            return {...state, a: '',b:'',sign:'',result:0}
        case "SET-RESULT":
            let result = 0
            switch (state.sign) {
                case '+':
                    result = +state.a + +state.b
                    break
                case '-':
                    result = +state.a - +state.b
                    break
                case '*':
                    result = +state.a * +state.b
                    break
                case '/':
                    result = +state.a / +state.b
                    break
                default:
                    break
            }
            return {...state, result: result, a: result.toString(), b: '', sign: ''}
        default:
            return state
    }
}

export const setSignAC = (sign: string) => ({type: 'SET-SIGN', sign} as const)
export const setAAC = (a: string) => ({type: 'SET-A', a} as const)
export const setBAC = (b: string) => ({type: 'SET-B', b} as const)
export const setNullAC = () => ({type: 'SET-NULL'} as const)
export const setResultAC = () => ({type: 'SET-RESULT'} as const)

// export type SetResultFromLocalStorageACType = ReturnType<typeof setResultFromLocalStorageAC>
export type SetSignACType = ReturnType<typeof setSignAC>
export type SetAACType = ReturnType<typeof setAAC>
export type SetBACType = ReturnType<typeof setBAC>
export type SetNullCType = ReturnType<typeof setNullAC>
export type SetResultACType = ReturnType<typeof setResultAC>

type ActionType = SetAACType | SetBACType | SetSignACType |SetNullCType| SetResultACType