import Image from "next/image";
import Title from "./ui/Title";


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
    <div>
      <span className="text-4xl font-dancing font-bold">20%</span>
      <span className="font-dancing m-1">Off</span>
    </div>
    
    </div>
    </div>
  
  
  )}


const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 my-20 gap-7">
        <CampaingItem/>
        <CampaingItem/>

    </div>
  )
}

export default Campaigns