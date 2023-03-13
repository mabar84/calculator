import React, {useEffect} from 'react';
import './App.css';
import {Keyboard} from './keyboard/keyboard';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {setAAC, setBAC, setNullAC, setResultAC, setSignAC} from "./bll/calc-reducer";


function App() {
    useEffect(() => {
        sessionStorage.clear()
    }, [])
    const result = useSelector<AppStateType, number>(state => state.calc.result)
    const a = useSelector<AppStateType, string>(state => state.calc.a)
    const b = useSelector<AppStateType, string>(state => state.calc.b)
    const sign = useSelector<AppStateType, string>(state => state.calc.sign)
    const dispatch = useDispatch()

    const arr = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'C', '=', '/']

    const click = (symbol: string) => {
        if ('+-*/'.includes(symbol)) {
            if (b) {
                dispatch(setResultAC())
            } else {
                dispatch(setSignAC(symbol))
            }
            dispatch(setSignAC(symbol))
        }
        if ('0123456789'.includes(symbol)) {
            sign ? dispatch(setBAC(symbol)) : dispatch(setAAC(symbol))
        }
        if (symbol === '=') {
            dispatch(setResultAC())
        }
        if (symbol === 'C') {
            dispatch(setNullAC())
        }
    }
    let input = a ? a + sign + b : 0
    return (
        <div className="App">
            <div className="case">
                <span className={'input'}>
{input}
                </span>
                <Keyboard arr={arr} click={click}/>
            </div>
        </div>
    )
}

export default App;