import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FlashSale from "./components/FlashSale";
import Categories from "./components/Categories";
import JustForYou from "./components/JustForYou";
import ProductGrid from "./components/ProductGrid";
import AppDownloadBanner from "./components/AppDownloadBanner";
import PaymentMethods from "./components/PaymentMethods";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail"; 
import LoginForm from "./components/LoginForm"; 
import SignUpForm from "./components/SignUpForm"; 

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Router>
      <div className="font-sans">
        {/* Header sab pages pe common, state pass karo */}
        <Header setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />

     {/* 🔹 Login / SignUp Modal */}
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <FlashSale />
                <JustForYou />
                <ProductGrid />
                {/* <PaymentMethods /> 👈 App banner ke niche */}
              </>
            }
          />

          {/* Product detail page */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        {/* Footer sab pages pe common */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
