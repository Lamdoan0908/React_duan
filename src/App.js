import HomePage from "./pages/client/homepage";
import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Login from "./pages/client/login";
import Register from "./pages/client/resigter";
import Future from "./pages/client/future";
import New from "./pages/client/new";
import About from "./pages/client/about";
import ContactSection from "./pages/client/contact";
import Cart from "./pages/client/cart";
import OderSuccess from "./pages/client/oderSuccess";
import Payment from "./pages/client/Payment";
import Profile from "./pages/client/profile";
import Product from "./pages/client/product";
import Search from "./pages/client/search";
const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/future" element={<Future />} />

        <Route path="/new" element={<New />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/oderSuccess" element={<OderSuccess />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
