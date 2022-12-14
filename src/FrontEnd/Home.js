import React, { useEffect } from "react";
import Cookies from "universal-cookie";

import Aos from "aos";
import "aos/dist/aos.css";

import GlobalStats from "../FrontEnd/GlobalStats";
import LimCryptos from "./Home/LimCryptos";
import LimExchanges from "./Home/LimExchanges";
import LimNews from "./Home/LimNews";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import VoiceAss from "../voice-assistant/VoiceAss";
import BasicQue from "../Components/BasicQue";
import Middle from "../Components/Middle";
import CustomerReview from "../Components/CustomerReview";
import ScrollToTop from "../Components/ScrollToTop";

import { toast } from "react-toastify";

const Home = () => {
  const cookies = new Cookies();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (!cookies.get("isLogin")) {
      return toast.warning("Please Login...!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  }, []);

  return (
    <div className="font-nunito scrollbar-hide overflow-x-hidden">
      <NavBar />
      <Header />
      <GlobalStats />
      <LimCryptos />
      <div data-aos="flip-up">
        <Middle />
      </div>

      <LimExchanges />
      <LimNews />
      <BasicQue />
      <CustomerReview />

      <ScrollToTop />
      <VoiceAss />

      <Footer />
    </div>
  );
};

export default Home;
