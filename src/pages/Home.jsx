import Categories from "../components/Home/Categories";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";
import TopServies from "../components/Home/TopServices"
import HowItWorks from "../components/Home/HowItWorks";
import PaymentSecurity from "../components/Home/PaymentSecurity";
import ProvidersInfo from "../components/Home/ProvidersInfo";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";


const Home = () => {
    return <div >
    <Navbar />
    <HeroSection />
    <Banner />
    <Categories />
    <TopServies />
    <HowItWorks />
    <PaymentSecurity />
    <ProvidersInfo />
    <Testimonials />
    <Footer />
    
    </div>;
  };
  
  export default Home;
  