import MyComN from "./MyComN"; 
const MyCom = () => {
    let n = undefined ;
    // let n = 10;
    // let comTag ;

    // if (n === undefined) {
    //     comTag = <div>값이 없습니다.</div> 
    // }
    // else {
    //     comTag = <MyComN n={n} n1={n*2} />
    // }

    return (
        <main className="container">
            <article>
                <header>MyCom</header>
                {
                    // 삼항연산 처리
                    // n === undefined 
                    // ? <div>값이 없습니다.</div> 
                    // : <MyComN n={n} n1={n*2} />

                    //변수로 처리
                    // comTag

                    //falsy연산
                    n && <MyComN n={n} n1={n*2} />
                }
            </article>
        </main>           
        
    );
}

export default MyCom ;