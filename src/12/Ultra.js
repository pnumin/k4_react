import TailH1 from "../comm/TailH1" ;
import TailSelect from "../comm/TailSelect" ;
import getcode from "./getcode.json" ;

const Ultra = ({dt, area, m, titem}) => { 
  const gubun = m === '1' ? '초단기예보' : '단기예보' ;

  //화면titl 정보
  let ultraTite = area ;
  ultraTite = ultraTite +  gubun  ;
  ultraTite = ultraTite + ' ('
                        + dt.substring(0,4) 
                        + '-' + dt.substring(4,6) 
                        + '-' + dt.substring(6,8) ;
  ultraTite = ultraTite + ')' ;

  //select op
  const opItem = getcode.filter((item) => item["예보구분"] === gubun)
                        .map((item) => [item["항목값"], item["항목명"]+'('+item["항목값"]+')'])
  return (
    <section className="p-5">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-10">
        <div>
          <TailH1 title= {ultraTite} />  
        </div>
        <div>
          <TailSelect id={'sel'}  opItem={opItem} />
        </div>
       </div>
    </section>
  )
}

export default Ultra