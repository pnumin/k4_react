import Div1 from "./Div1";
import { useState, useEffect } from "react";
const DivMain = () => {
  const [n, setN] = useState(0);
  const [n2, setN2] = useState();

  useEffect(() => {
    setN2(n * 2);
  }, [n]);

  return (
    <main className="container">
      <div className="bg-orange-900 text-orange-50 m-10 p-10 rounded-md">
        <h1 className="text-orange-50">DivMain</h1>
        <h2 className="text-orange-50 m-2">
          n={n} , n2={n2}
        </h2>
        <Div1 n={n} setN={setN} />
      </div>
    </main>
  )
}
export default DivMain;
