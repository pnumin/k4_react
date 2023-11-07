import Div2 from "./Div2"
import { DivAtom, DivAtom3 } from "./DivAtom"; 
import { useRecoilValue } from "recoil";

const Div1 = () => {
  const n = useRecoilValue(DivAtom) ;
  const n3 = useRecoilValue(DivAtom3) ;
  return (
    <div className="bg-orange-700 text-orange-50 m-2 p-10 rounded-md">
        <h1 className="text-orange-50">Div1</h1>
        <h2 className="text-orange-50 m-2">
          n={n} , n2={n3}
        </h2>
        <Div2 />
    </div>
  )
}

export default Div1
