import Image from "next/image";


const CampaingItem = () => {
  return (
  <div className="bg-primary">
    <div className="relative w-44 h-44 after:content-[''] after:absolute after:w-full after:h-full after:border-[5px] after:border-secondary after:rounded-full rounded-full overflow-hidden">
      <Image
      src="/images/o1.jpg"
      alt=""
      layout="fill"
      objectFit="cover"
      />
    </div>
    </div>
  
  
  )}


const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 my-20 border-box">
        <CampaingItem/>
        <CampaingItem/>

    </div>
  )
}

export default Campaigns