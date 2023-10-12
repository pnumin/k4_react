import pusandata from "./pusandata.json";
import ButtonBlue from "../comm/ButtonBlue";
import { useEffect, useRef, useState } from "react";
const Busan = () => {
    //select box
    const sel = useRef() ;

    console.log(pusandata);
    const code = pusandata.map((item) =>
        //[item['콘텐츠ID'], item.콘텐츠명.replace('(한,영, 중간,중번,일)', '')]
        //[item['콘텐츠ID'], item.콘텐츠명.split('(')[0]]
        [item['콘텐츠ID'], item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
    );
    console.log(code)
    const opTag = code.map((item)=>
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    ) ;

    const handleOk = (e,msg) => {
        e.preventDefault();
        console.log(msg)
    }

    const handleCancel = (e,msg) => {
        e.preventDefault();
        console.log(msg)
    }

    const handleChange = () => {
        console.log(sel.current.value)
    }

    useEffect(()=>{
        sel.current.focus();
    }, []);

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header>
                <form>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <select ref={sel} id='sel' name='sel' onChange={handleChange}>
                            <option value=''>축제명을 선택하세요.</option>
                            {opTag}
                        </select>
                    </div>
                    <div>
                        <ButtonBlue caption='축제확인' handleClick={(e) => handleOk(e,'ok')} />
                    </div>
                    <div>
                        <ButtonBlue caption='축제확인' handleClick={(e) => handleCancel(e,'cancel')} />
                    </div>
                </div>
                </form>
            </article>
        </main>
    )
}

export default Busan
