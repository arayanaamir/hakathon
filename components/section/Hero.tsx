import Image from "next/image"
import { Button } from "../ui/button"
import { ShoppingCartIcon } from "lucide-react"

const Hero = () => {
  return (
    
    <div className="flex flex-col py-6 lg:flex-row gap-y-4">
      <div className=" mt-14">
      <Button className="font-bold text-blue-500 bg-blue-100 "> Sale 70%</Button>
        <h1 className='mt-6 text-6xl font-extrabold Scroll-m-20 '>
        An Industrial  Take on
        <br></br> Streetwear
        </h1>
        <h2 className="mt-10 text-2xl scroll-m-10 ">
        Anyone can beat you but no one can<br></br> beat your outfit as long as you wear<br></br> Dine outfits.
        </h2>
        <Button className="py-6 mt-10 rounded-none ">
          <ShoppingCartIcon/> Stat Shopping</Button>
          <div className="flex mt-10 space-x-5">
            <Image src={"/Bazaar.webp"} alt="Bazaar" height={120} width={120}/>
            <Image src={"/Bustle.webp"} alt="Bustle" height={120} width={120}/>
            <Image src={"/Instyle.webp"} alt="Instyle" height={120} width={120}/>
            <Image src={"/Versaces.webp"} alt="Versaces" height={120} width={120}/>
          </div>
        </div>
        <div className="relative mt-4 bg-red-100 rounded-full ">
    <Image src={"/header.webp"} alt="event1" height={320} width={550} />
        </div>
    </div>
      )
}

export default Hero