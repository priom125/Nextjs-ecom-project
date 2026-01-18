import BrandStory from "@/components/BrandStory";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Hero />
     <Categories />
      <FeaturedProducts />   {/* Section 3 */}
      <BrandStory />         {/* Section 4 */}
      <Testimonials />       {/* Section 5 */}
      <InstagramFeed />      {/* Section 6 */}
      <Newsletter />  
    </div>
  );
}
