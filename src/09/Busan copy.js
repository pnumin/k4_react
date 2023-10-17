import pusandata from "./pusandata.json";
import ButtonBlue from "../comm/ButtonBlue";
import GalleryCard from "../comm/GalleryCard";
import { useEffect, useRef, useState } from "react";
const Busan = () => {
    // 상태
    const [item, setItem] = useState();
    const [tags, setTags] = useState();

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

    const getData = (seq) => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D`
        url = url + `&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${seq}`;

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItem(data.getFestivalKr.item[0]))
        .catch((err) => console.log(err))
    }

    const handleOk = (e,msg) => {
        e.preventDefault();
        console.log(msg, sel.current.value)
        getData(sel.current.value);
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

    useEffect(()=>{
        if (item === undefined) return ;

       setTags(
            <GalleryCard 
            key = {item.UC_SEQ}
            imgsrc={item.MAIN_IMG_THUMB} 
            title={item.TITLE} 
            content={item.ITEMCNTNTS.length < 100 ? item.ITEMCNTNTS : item.ITEMCNTNTS.substring(0, 100) + '...'}  
            // content={item.ITEMCNTNTS}  
            sptag={item.PLACE.indexOf < 0 ?[item.PLACE] :item.PLACE.split(',')}  />
       );  
    }, [item]);

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
            {item && tags}
        </main>
    )
}

export default Busan
