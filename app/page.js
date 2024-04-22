import Anywhere from "@/components/layout/landingPage/anywhere/Anywhere";
import FAQ from "@/components/layout/landingPage/faq/FAQ";
import Footer from "@/components/layout/landingPage/footer/Footer";
import Header from "@/components/layout/landingPage/header/Header";
import NavBar from "@/components/layout/landingPage/navbar/NavBar";
import Features from "@/components/layout/landingPage/overlapFeatures/Features";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Anywhere />
      <FAQ />
      <Footer />
      {/* <Features /> */}
    </>
  );
};

export default Home;
