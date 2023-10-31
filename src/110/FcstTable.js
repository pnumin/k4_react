const FcstTable = ({ trItem }) => {
  console.log("FcstTable", trItem)
  
  const sky = {'1':'☀️(맑음)', '3':'☁️(구름많음)', '4': '🌥️(흐림)'} ;
  const pty = ['없음', '비', '비/눈', '눈','소나기','빗방울','빗방울눈날림', '눈날림'];
  const trs = trItem.map((item, idx) => 
    <tr key={'tr'+idx}>
      <td>{item[0]}</td>
      <td>{item[2]}</td>
      <td>
        {item[1] ==='SKY'? sky[item[3]] 
          :item[1] ==='PTY'? pty[parseInt(item[3])] 
          :item[3] + item[4] } 
      </td>
    </tr>
  )
  return (
    <table>
      <thead>
        <tr>
          <th>항목명</th>
          <th>예측시간</th>
          <th>항목값</th>
        </tr>
      </thead>
      <tbody>
        {trs}
      </tbody>
    </table>
  )
}

export default FcstTable

