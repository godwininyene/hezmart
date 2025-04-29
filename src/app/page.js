import HeroCarousel from "./_components/HeroCarousel";
import Aside from "./_components/Aside";
import BrandCarousel from "./_components/BrandCarousel";
import Week from "./_components/Week";
import SalesHeader from "./_components/SalesHeader";
import FoodSales from "./_components/FoodSales";
export default function Home() {
  return (
    <div className="max-w-[1440px] w-screen lg:px-20 lg:py-6 relative">
      <div className="lg:grid lg:grid-cols-12 lg:grid-rows-12">
        <Aside />
        <HeroCarousel />
      </div>
      <BrandCarousel />
      <Week />
      <SalesHeader />
      <FoodSales />
    </div>
  );
}
