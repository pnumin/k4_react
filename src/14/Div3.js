import ButtonBlue from "../comm/ButtonBlue" ;
import { DivAtom } from "./DivAtom";
import { useRecoilState } from "recoil";
const Div3 = () => {
  const [n, setN] = useRecoilState(DivAtom);

  const handleUp = () => {
    setN(n+1);
  }
  const handleDown = () => {
    setN(n-1);
  }

  return (
    <div className="bg-orange-300 text-orange-50 m-2 p-10 rounded-2xl">
      <h1 className="text-orange-50">Div3</h1>
     
      <div className="grid grid-cols-2 gap-4">
        <div><ButtonBlue caption ="증가" handleClick = {handleUp} /></div> 
        <div><ButtonBlue caption ="감소" handleClick = {handleDown} /></div>
      </div>
    </div>
  )
}

export default Div3
