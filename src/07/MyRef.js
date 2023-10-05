import Hh1 from '../comm/Hh1';
import { useState, useEffect, useRef } from 'react';

const MyRef = () => {
    const title='useRef Hook : 변수제어' ;
    //let cnt1 = 0 ;
    const [cnt1, setCnt1] = useState() ;

    //Ref변수
    const cnt2 = useRef(0);
    const txt1 = useRef() ;

    const handleClick = () => {
        //cnt1 = cnt1 + 1 ;
        setCnt1(cnt1 + 1) ;
        console.log("handleClick" , cnt1)
    }

    const handleClickRef = () => {
        cnt2.current = cnt2.current + 1 ;
        console.log("handleClickRef", cnt2.current)
    }

    const handleChange = () => {
        console.log("handleChange", txt1.current.value)
        setCnt1(parseInt(txt1.current.value));
    }

    //컴포넌트 생성시 1번 호출
    useEffect(()=>{
        setCnt1(100) ;

        txt1.current.focus();
    }, []);

    //컴포넌트 업데이트시 생성 : cnt1 state변수가 업데이트될때
    useEffect(() => {
        console.log("useEffect", cnt1)
    }, [cnt1]);

    return (
        <main className='container'>
            <article>
                <Hh1 title='useRef Hook : Form 제어' /> 
                <form>
                    <input 
                    ref={txt1} 
                    type='number' 
                    id='txt1' 
                    name='txt1' 
                    placeholder='숫자입력' 
                    onChange={handleChange} />
                </form>
            </article>

            <article>
                <Hh1 title={title} /> 
                <div className='grid'>
                    <div>state변수 : {cnt1}</div>
                    <div>Ref변수 : {cnt2.current}</div>
                </div>
                <footer>
                    <div className='grid'>
                        <button onClick={handleClick}>state 변수 증가</button>
                        <button onClick={handleClickRef}>Ref 변수 증가</button>
                    </div>
                </footer>               
            </article>
            
            
        </main>
    )
}

export default MyRef
