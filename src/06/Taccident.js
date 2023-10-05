import dataTaccident from "./dataTaccident.json" ;
import TaccidentNav from "./TaccidentNav";
import Hh1 from "../comm/Hh1" ;
import { useEffect, useState } from "react";

const Taccident = () => {
    //오브젝트 값 가져오기
    //const tdata = dataTaccident['data'] ;
    const tdata = dataTaccident.data ;
    console.log(tdata);

    //대분류
    //배열 순회 
    let c1 = tdata.map((k) => k.사고유형_대분류 ); 
    c1 = [...new Set(c1)] ;

    // console.log("c1=", c1) ;

    //대분류 선택 
    const [sel1 , setSel1] = useState() ;

    //중분류
    const [c2, setC2] = useState();

    //중분류 선택
    const [sel2 , setSel2] = useState() ;

    //선택항목 태그
    const [divTag, setDivTag] = useState();

    useEffect(() => {
        if (!sel1) return;

        let temp = tdata.filter((item) => item.사고유형_대분류 === sel1 )
        temp = temp.map((item) => item.사고유형_중분류) ;
   
        // let temp = tdata
        // .filter((item) => item.사고유형_대분류 === sel1 )
        // .map((item) => item.사고유형_중분류) ;
        // console.log("temp" , temp)

        //중분류 생성
        setC2(temp);
        setSel2();
        setDivTag();
    }, [sel1]);

    //중분류 선택
    useEffect(() => {
        if (!sel2)  return ;

        console.log("sel2",sel1, sel2)
        let temp = tdata.filter((item)=> 
            item.사고유형_대분류 === sel1 &&
            item.사고유형_중분류 === sel2)

        //결과가 object
        temp = temp[0] ;
        
        //object 전체 순회
        // temp = Object.keys(temp).map((item, idx) =>
        //     //  [item , temp[item]]   
        //     <div key={`d${idx}`}>{item} : {temp[item]}</div>
        // );

        let k = Object.keys(temp).filter((item)=> 
            (item !=='사고유형_대분류' && item !=='사고유형_중분류')
        )

        temp = k.map((item, idx) => 
            <div key={`d${idx}`}>{item} : {temp[item]}</div>
        )
        setDivTag(temp);
        console.log(temp)
    }, [sel2]) ;

    return (
        <main className="container">
            <article>
                <Hh1 title ='유형별 교통사고' />
                <TaccidentNav title='교통사고 대분류' c={c1}  sel={sel1} setSel={setSel1} />
                {c2 && <TaccidentNav title='교통사고 중분류' c={c2} sel={sel2} setSel={setSel2} />}
                <div className="grid">
                    {divTag}
                </div>
            </article>
        </main>
    )
}

export default Taccident ;
