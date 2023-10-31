import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import getcode from "./getcode.json";
import FcstTable from "./FcstTable";
import TailSelect from "../comm/TailSelect";

const UltraSrtFcst = ({dt,area,m,items}) => {
  const [items, setItems] = useState(); 
  const [myItem, setMyItem] = useState() ;

  // 카테고리-> option
  // console.log(getcode)
  
  const seldata = getcode
    .filter((code) => code['예보구분'] == '초단기예보')
    .map((code) => [code['항목값'], code['항목명']+'('+code['항목값']+')']
    )
  // console.log("ops", ops)
 
  // 파라미터로 전송되는 자료 추출
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  //이벤트 처리
  const handleSelect = (e) => {
    if (items === undefined) return; 
    let temp = items
                .filter((i) => i['category'] === e.target.value)
    let tempcd = getcode
                .filter((code) => 
                  code['예보구분'] == '초단기예보'  &&
                  code['항목값'] == e.target.value )[0]

    // let tempdata = temp.map((i) => ({'항목명': tempcd ['항목명'],
    //                                 '항목코드': i['category'],
    //                                 '예측시간': i['fcstTime'],
    //                                 '항목값':i['fcstValue'],
    //                                 '단위':tempcd ['단위'],
    //                     }))
    let tempdata = temp.map((i) => ([tempcd ['항목명'],
                                    i['category'],
                                    i['fcstTime'],
                                    i['fcstValue'],
                                    tempcd ['단위'],
                                   ]))
    // console.log("temp", temp) 
    // console.log("tempcd", tempcd) 
    // console.log("tempdata", tempdata)
    setMyItem(tempdata) ;
    
    // console.log("handleSelect", temp)
  }

  //컴포넌트 생성시  
  useEffect(() => {
    const apikey = '8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D';
    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    url = url + `serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0630`;
    url = url + `&nx=${x}&ny=${y}&dataType=json`;

    // console.log("url", url)
    fetch(url)
      .then(resp => resp.json())
      .then(data => setItems(data.response.body.items.item))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => { 
    console.log("myItem", myItem)

  }, [ myItem]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-10">
      <div className='font-bold text-xl'>
        초단기예보 : {area} ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
      </div>
      <div>
        <TailSelect seldata = {seldata} handleChange={handleSelect} />
      </div>
      <div className="w-full md:col-span-2"> 
        {myItem && <FcstTable trItem={myItem} />}
      </div>

    </div>
  )
}

export default UltraSrtFcst
