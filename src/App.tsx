import React, {useState} from 'react';
import './App.css';
import {Keyboard} from './keyboard/keyboard';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, setValueFromLocalStorageAC} from "./bll/counter-reducer";

function App() {



    const arr = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'C', '=', '/']
    const numbers = '0123456789'
    const signs = '+-*/'
    // let [value, setValue] = useState<string>('')
    // let [sign, setSign] = useState<string>('')
    let [a, setA] = useState<string>('')
    let [b, setB] = useState<string>('')

    // console.log('a=', a)
    // console.log('b=', b)

    const click = (symbol: string) => {

        if ('+-*/'.includes(symbol)) {
            // sign = symbol
            // setSign(sign)
        }

        // setValue(value + symbol)

        // sign ? setB(b + symbol) : setA(a + symbol)

        if (symbol === 'C') {
            // setA('')
            // setB('')
            // setValue('')
        }

        if (symbol === '=') {


            let n1=+a
            let n2=+b.slice(1,b.length)

            // console.log(sign)

            // switch (sign) {
            //     case '+':
            //         return setValue((n1 + n2).toString())
            //     case '-':
            //         return setValue((n1 - n2).toString())
            //     case '*':
            //         return setValue((n1 * n2).toString())
            //     case '/':
            //         return setValue((n1 / n2).toString())
            // }
        }
    }
    console.log('APP')
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    dispatch(setValueFromLocalStorageAC(value))

    const incHandler = () => {
        dispatch(incValueAC())
    }
    return (
        <div className="App">

            <h2>{value}</h2>
            <button onClick={incHandler}>inc</button>
            <div className="body">
                <span className={'input'}>{value}</span>

                <Keyboard arr={arr} click={click}/>
            </div>
        </div>
    )
}

export default App;