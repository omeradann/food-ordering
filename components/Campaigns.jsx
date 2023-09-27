import Image from "next/image";


const CampaingItem = () => {
  return (
  <div className="bg-white">
    <div className="relative w-40 h-40 after:content-[''] after:absolute after:w-full after:h-full after:border-[5px] after:border-secondary after:rounded-full">
      <Image
      src="/images/o1.jpg"
      alt=""
      layout="fill"
      />
    </div>
    </div>
  
  
  )}


const Campaigns = () => {
  return (
    <div className="flex container mx-auto py-20 my-20 ">
        <CampaingItem/>
        <CampaingItem/>

    </div>
  )
}

export default Campaigns