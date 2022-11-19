
export const Keyboard = (props) => {

    const onClick=(e)=>{
        props.click(e.currentTarget.textContent)
    }

    const buttons=props.arr.map((a)=>

            //<button disabled={!'123456789'.includes(a)} onClick={onClick} className={'button'} key={a} id={a}>{a}</button>)
            <button onClick={onClick} className={'button'} key={a} id={a}>{a}</button>)

    return <div className={'keyboard'} >
        {buttons}
    </div>


}