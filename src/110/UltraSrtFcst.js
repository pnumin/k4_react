import { useEffect, useState} from "react";
import getcode from "./getcode.json";
import FcstTable from "./FcstTable";
import TailSelect from "../comm/TailSelect";

const UltraSrtFcst = ({dt, area, m, items}) => { 
  const [myItem, setMyItem] = useState() ;

  // 카테고리-> option
  // console.log(getcode)
  
  const seldata = getcode
    .filter((code) => m == '1' ? code['예보구분'] == '초단기예보' :  code['예보구분'] == '단기예보')
    .map((code) => [code['항목값'], code['항목명']+'('+code['항목값']+')']
    )
  // console.log("ops", ops)
 
  //이벤트 처리
  const handleSelect = (e) => {
    if (items === undefined) return; 
    let temp = items
                .filter((i) => i['category'] === e.target.value)
    let tempcd = getcode
                .filter((code) => 
                  m == '1' ? 
                  code['예보구분'] == '초단기예보'  && code['항목값'] == e.target.value
                  :code['예보구분'] == '단기예보'  && code['항목값'] == e.target.value
                   )[0]

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
    console.log("myItem", myItem)

  }, [ myItem]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-10">
      <div className='font-bold text-xl'>
        {m =='1' ? '초단기예보' : '단기예보'} : {area} ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
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
