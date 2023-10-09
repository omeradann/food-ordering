import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className='mt-10 bg-primary rounded-3xl'>
        <div className="w-full bg-[#f1f2f3] h-[210px] rounded-bl-[46px] rounded-tl-2xl  rounded-tr-2xl grid place-content-center">
            <div className="relative w-40 h-40">
        <Image
        className="hover:scale-110 transition-all"
        src="/images/f1.png"
        alt=""
        layout="fill"
        />
        </div>
        
        </div>
        <div className="p-6  text-white">
            <h4 className="text-xl font-semibold">Delicious Pizza</h4>
            <p className="mt-2 text-[15px]">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
            <div className="flex justify-between mt-4">
            <span className="mt-2">$20</span>
            <button className="btn-primary !rounded-full !w-10 !h-10 !p-0 grid place-content-center"><FaShoppingCart size={20}/></button>
            </div>
            
        </div>
    </div>
  )
}

export default MenuItem