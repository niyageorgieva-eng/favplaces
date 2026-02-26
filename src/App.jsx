import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Places from "./pages/PlacesPage";
import GalleryPage from "./pages/GalleryPage"; 
import StartPage from "./pages/StartPage"; 
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
 <Header/>
    <Routes>
      <Route element={<ProtectedRoute />}> // adding Protefcted Route
        <Route path="/places" element={<Places />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */} 
        {/* triabva da si prenasocha kum novia component                           ----->  */}
        <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      {/*                               Da si dobavia / start stranica za login/register */}
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  <Footer />
    </>
  );
}



export default App;


