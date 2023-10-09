import MenuWrapper from "@/components/product/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Deneme from "../../components/Deneme"

const Home = () => {


  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      {/* <Deneme/> */}
      
    </div>
)
}

export default Home