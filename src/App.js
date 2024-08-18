import CvForm from "./components/forms/cvform";
import Home from "./paths/home/home";
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cvform' element={<CvForm />}></Route>




    </Routes>
  );
}

export default App;
