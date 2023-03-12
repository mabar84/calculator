import {useEffect} from "react";

export const Keyboard = (props) => {
    const click=(e)=>{
        props.click(e.currentTarget.textContent)
    }
    const buttons=props.arr.map((el)=>
            //<button disabled={!'123456789'.includes(el)} onClick={onClick} className={'button'} key={el} id={el}>{el}</button>)
            <button onClick={click} className={'button'} key={el} id={el}>{el}</button>)

    return <div className={'keyboard'} >
        {buttons}
    </div>


}