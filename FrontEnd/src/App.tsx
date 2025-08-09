//  use for routing 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { MyCards } from "./components/myCards";
export default function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
        {/*  browser router is used for routing , what is does is it will render the component based on the path */}
          <Routes>
            {/*  route is used to render the component based on the path */}
            <Route path="/" element={<Home />} />
            <Route path="/myBooks" element={<MyCards/>}></Route>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}