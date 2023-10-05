import { useState, useEffect } from "react";
import style from './Box.module.css' ;

const Box = () => {
    const [boxlist, setBoxlist] = useState();
    const [listTag, setListTag] = useState();
    const [detailTag, setDetailTag] = useState() ;

    const handleClick = (item) => {
        console.log(item)
        setDetailTag(
            <div className={style.numDiv}>
                <span>[{item.movieCd}]</span>
                <span>개봉일 : {item.openDt} {item.rankOldAndNew}</span>
                <span>{item.movieNm}</span>
            </div>
        );
    }

    //컴포넌트 생성시 한번 실행
    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918';
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err));
    }, []);

    //state 변수가 변경될때 마다 실행
    useEffect(() => {
        console.log(boxlist) ;
        if (boxlist) {
            setListTag(boxlist.map((item, idx) => 
                <tr key={'mv'+idx} onClick={() => handleClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        item.rankInten == 0 
                        ? "-" 
                        : item.rankInten > 0 
                            ? "▲"+ Math.abs(item.rankInten) : "▼"+Math.abs(item.rankInten)
                        }</td>
                </tr> 
            ));
        }
    }, [boxlist]) ;
 
    return (
        <main className="container">
            <article>
                <header><h1>일일박스 오피스</h1></header>
                <table>
                    <thead>
                        <tr>
                        <th scope="col">순위</th>
                        <th scope="col">영화명</th>
                        <th scope="col">매출액</th>
                        <th scope="col">증감</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>
                <footer>
                    {detailTag}               
                </footer>
            </article>
            
        </main>
    );
}

export default Box;