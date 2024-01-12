import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SIgnIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers"
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Category from "./pages/Category"

function App() {
  return (
   <div>

        <Router>
           <Header></Header>
            <Routes>
              <Route path='/' element={<Home/>}/>

              <Route path="/profile" element = {<PrivateRoute/>}>
                <Route path='/profile' element={<Profile/>}/>
              </Route>
              
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/sign-up' element={<SignUp/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
              <Route path='/offers' element={<Offers/>}/>
              <Route path='/category/:categoryName' element={<Category/>}/>
              <Route path='/create-listing' element={<PrivateRoute/>}>
                 <Route path='/create-listing' element={<CreateListing/>}/>
              </Route>

              <Route path='/edit-listing' element={<PrivateRoute/>}>
                 <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
              </Route>
             
            </Routes>
        </Router>

              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
             />
   </div>
  );
}

export default App;
