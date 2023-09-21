import style from './Lotto.module.css';

// const LottoNums = (probs) => {
const LottoNums = ({ ns }) => {
    // console.log("LottoNums", probs.ns)
    console.log("LottoNums", ns)


    // 1 ~ 9 : lottonum1
    // 10 ~ 19 : lottonum2
    // 20 ~ 29 : lottonum3
    // 30 ~ 39 : lottonum4
    // 40 ~ 45 :lottonum5 
    // const nsTag = ns.map((item, idx) => {
    //     let temp ; 
    //     // if문 
    //     // if (item < 10) temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>
    //     // else if (item < 20) temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>
    //     // else if (item < 30) temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>
    //     // else if (item < 40) temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>
    //     // else temp = <div key={'ns'+idx} className={style.lottonum5}>{item}</div>

    //     //switch case
    //     let n = Math.floor(item / 10) ;
    //     // switch (n) {
    //     //     case 0: 
    //     //         temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>;
    //     //         break;
    //     //     case 1: 
    //     //         temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>;
    //     //         break;
    //     //     case 2: 
    //     //         temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>;
    //     //         break;
    //     //     case 3: 
    //     //         temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>;
    //     //         break;
    //     //     case 4: 
    //     //         break;
    //     // }

    //     // let ncss = style[`lottonum${n+1}`];
    //     // console.log(ncss)
    //     temp = <div key={'ns'+idx} className={style[`lottonum${n+1}`]}>{item}</div>;
    //     console.log(n)
    //     return  temp;
    // 
    //}    
    //) ;

    let n ;
    let nsTag = ns.map((item, idx) => {
        n = Math.floor(item / 10); 
        return (
            idx === (ns.length - 1)  
            ? <div key='nsplus' className={style.plus}> + </div>
            : <div key={'ns' + idx} className={style[`lottonum${n + 1}`]}>
                {item}
              </div>
        )
    });

    //배열 at(-1)으로 마지막 요소 가져오기 
    n = Math.floor(ns.at(-1) / 10); 
    nsTag.push(
        <div key={'ns' + (ns.length - 1)} className={style[`lottonum${n + 1}`]}>
                {ns.at(-1)}
        </div>
    );


    return (
        <div className={style.lottobox}>
            {nsTag}
        </div>
    )
}

export default LottoNums;
