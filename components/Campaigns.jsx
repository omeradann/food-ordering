import Image from "next/image";
import Title from "./ui/Title";
import { FaShoppingCart } from "react-icons/fa";


const CampaingItem = () => {
  return (
  <div className="bg-primary flex-1 rounded-md py-5 px-5 flex items-center gap-x-4">
    <div className="relative w-44 h-44  after:border-[10px] after:border-secondary rounded-full overflow-hidden">
      <Image
      src="/images/o1.jpg"
      className="hover:scale-105 transition-all"
      alt=""
      layout="fill"
      objectFit="cover"
    
      
      />
    </div>
    <div className="text-white">
    <Title addClass="text-2xl">Tasty Thursdays</Title>
    <div className="font-dancing my-3">
      <span className="text-4xl font-bold">20%</span>
      <span className="m-1">Off</span>
    </div>
    <button className="text-white btn-primary flex items-center gap-x-2">Order Now <FaShoppingCart size={20}/></button>
  
    
    </div>
    </div>
  
  
  )}


const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 my-20 gap-7 flex-wrap">
        <CampaingItem/>
        <CampaingItem/>

    </div>
  )
}

export default Campaigns