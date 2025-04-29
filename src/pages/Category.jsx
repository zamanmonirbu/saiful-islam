import CategorySection from "../components/Category/CategorySection";
import RecommendedSection from "../components/Category/RecommendedSection";
import TopSellerSection from "../components/Category/TopSellerSection";
import Pagination from "../components/Category/Pagination";
import HeroSection from "../components/Category/HeroSection";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

// Main App Component
export default function Category() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <RecommendedSection />
      <TopSellerSection />
      <Pagination />
      <Footer />
    </div>
  );
}
