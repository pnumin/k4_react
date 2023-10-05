import Hh1 from '../comm/Hh1' ;
import style from './Box.module.css' ;
import { useRef, useState, useEffect } from 'react';

const Box = () => {
    //날짜선택 
    const dt = useRef() ;

    //선택된 날짜
    const [cdt, setCdt] = useState() ;

    //컴포넌트 생성시 포커스 
    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); 

        let y = `${yesterday.getFullYear()}` ;
        let m = yesterday.getMonth()+1 < 10 ? `0${yesterday.getMonth()+1}`
                                            :`${yesterday.getMonth()+1}`;
                                            
        let d = yesterday.getDate() < 10 ? `0${yesterday.getDate()}`
                                            :`${yesterday.getDate()}`;
        console.log(y+m+d) ;

        //어제 날짜로 기본 값 설정
        dt.current.value = `${y}-${m}-${d}` ;
        setCdt(y+m+d) ;
    }, []);

    useEffect(() =>{
        console.log(cdt)
    } , [cdt]);

    //날짜가 변경되었을때 
    const handleChange = () => {
        let temp = dt.current.value.replaceAll('-','') ; 

        setCdt(temp) ; 
    }

    return (
        <main className="container"> 
            <Hh1 title='박스오피스' /> 
            <article>
                <header>
                    <div className={style.dt}>선택날짜 : {cdt}</div>
                    <form>
                        <input ref={dt} type='date' id='dt' name='dt' 
                                onChange={handleChange}/>
                    </form>
                </header>
            </article>
        </main>
    )

}

export default Box;
