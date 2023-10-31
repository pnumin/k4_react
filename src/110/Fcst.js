import { BrowserRouter, Routes, Route } from "react-router-dom"
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";  
import FcstFetch from "./FcstFetch";

const Fcst = () => {
  return (
    <BrowserRouter>
      <main className="container mx-auto">
        <FcstNav />
        <Routes>
          <Route path="/" element={<FcstMain />} />
          {/* http://localhost:3000/ultra/20231026/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C/98/76 */}
          <Route path="/fetch/:dt/:area/:x/:y/:m" element={<FcstFetch />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default Fcst  