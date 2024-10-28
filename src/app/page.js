import AttractionSlider from "@/components/AttractionSlider";
import Cuisine from "@/components/Cuisine";
import CurateSlider from "@/components/CurateSlider";
import FindPlace from "@/components/FindPlace";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <AttractionSlider />
      <Cuisine />
      <CurateSlider />
      <FindPlace />
      <Footer />
    </>
  );
}
