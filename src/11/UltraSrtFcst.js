import { useParams } from "react-router-dom" ;
import { useEffect, useState } from "react";

const UltraSrtFcst = () => {
  const [items, setItems] = useState() ;

  // 파라미터로 전송되는 자료 추출
  const dt = useParams().dt ;
  const area = useParams().area ;
  const x = useParams().x ;
  const y = useParams().y ;

  //컴포넌트 생성시  
  useEffect(()=>{
    const apikey = '8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D';
    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    url = url + `serviceKey=${apikey}` ;
    url = url + `&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0630`;
    url = url + `&nx=${x}&ny=${y}&dataType=json` ;

    // console.log("url", url)
    fetch(url)
    .then(resp => resp.json())
    .then(data => setItems(data.response.body.items.item))
    .catch(err => console.log(err))
  }, []) ;

  useEffect(() => {
    console.log(items)
  }, [items]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-10">      
      <div className='font-bold text-xl'>
        초단기예보 : {area} ({dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)})
        </div>
        <div>
          <select id='sel' name='sel'>
            <option value=''>항목선택</option>
          </select>
        </div>
      
  
    </div>
  )
}

export default UltraSrtFcst
