import Hero from "../../components/section/Hero";
import Newsletter from "../../components/section/Newsletter";
import Productlist from "../../components/section/Productlist";
import Promotion from "../../components/section/Promotion";
import FeaturesBanner from "../../components/section/FeaturesBanner";
import Footer from "../../components/section/Footer";



export default function Home() {
  return (
    <>
     <Hero />
     <Promotion />
     <Productlist />
    <FeaturesBanner />
    <Newsletter />
    <Footer />
      
    </>
  );
}