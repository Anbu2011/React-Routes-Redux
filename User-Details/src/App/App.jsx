import { BrowserRouter, Routes, Route} from "react-router-dom";
import AllUserDisplay from '../Components/AllUserDisplay/AllUserDisplay.jsx'
import UserInformationDisplay from '../Components/UserInformationDisplay/UserInformationDisplay.jsx'
import ErrorRoute from "../Components/ErrorRoute/ErrorRoute.jsx";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllUserDisplay />}  />
          <Route path="/user/:userId" element={<UserInformationDisplay />} />
          <Route path="*" element={<ErrorRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
