import Image from "next/image";


const CampaingItem = () => {
  return (
  <div className="bg-primary flex-1 rounded-md py-5 px-5">
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
    <div className="flex justify-between container mx-auto py-20 my-20 gap-7">
        <CampaingItem/>
        <CampaingItem/>

    </div>
  )
}

export default Campaigns