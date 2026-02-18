import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Places from "./pages/PlacesPage";
import GalleryPage from "./pages/GalleryPage"; 

function App() {

  return (
    <>
 <Header/>
    <Routes>
      <Route path="/places" element={<Places />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */} 
      {/* triabva da si prenasocha kum novia component                           ----->  */}
      <Route path="/gallery" element={<GalleryPage />} />
      {/*                               Da si dobavia / start stranica za login/register */}
    </Routes>
  <Footer />
    </>
  );
}



export default App;


