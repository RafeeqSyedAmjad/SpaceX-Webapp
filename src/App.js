import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Header } from "./components";
import {Error,Launchpad,SingleLaunchpad} from "./pages"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Launchpad />}></Route>
        <Route path = "*" element = {<Error />}></Route>
        <Route path="/:id" element={<SingleLaunchpad />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
