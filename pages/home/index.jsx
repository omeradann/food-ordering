import MenuWrapper from "@/components/product/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Deneme from "../../components/Deneme"
import About from "@/components/About";

const Home = () => {


  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
      {/* <Deneme/> */}
      
    </div>
)
}

export default Home