import { useParams } from "react-router-dom" ;
import { useState, useEffect} from "react";

import UltraSrtFcst from "./UltraSrtFcst" ;

const FcstFetch = () => {
  // 파라미터로 전송되는 자료 추출
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const m = useParams().m ;

  const [items, setItems] = useState(); 

  const getUltra = () => {
    const apikey = '8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D';
    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    url = url + `serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0630`;
    url = url + `&nx=${x}&ny=${y}&dataType=json`;

    console.log("getUltraurl", url)
    fetch(url)
      .then(resp => resp.json())
      .then(data => setItems(data.response.body.items.item))
      .catch(err => console.log(err))
  }

  const getVilage = () => {
    const apikey = '8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D';
    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
    url = url + `serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0500`;
    url = url + `&nx=${x}&ny=${y}&dataType=json`;

    console.log("getVilage url", url)
    fetch(url)
      .then(resp => resp.json())
      .then(data => setItems(data.response.body.items.item))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (m === '1') getUltra();
    else getVilage();

  }, [] ) ;

  useEffect(() => {
    console.log(items) 

  }, [items] ) ;

  return (
    <div>
      <UltraSrtFcst dt={dt} area={area} m={m} items={items} />
    </div>
  )
}

export default FcstFetch
