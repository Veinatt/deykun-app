// src/App.tsx

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HomePage from "./pages/HomePage/HomePage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";
import { RequestModal } from "./components/ui/Modal";
import "./styles/globals.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <RequestModal />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
