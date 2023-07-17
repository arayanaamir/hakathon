"use client"

import Image from "next/image"
import { Button } from "../ui/button"



const Promotion = () => {
  return (
    <section>
      <div className="mt-24 ">
          
        <h2 className="flex justify-center text-lg font-bold text-blue-500">PROMOTION</h2>
        
        <h1 className="flex justify-center mt-6 text-4xl font-bold">Our Promotion Events</h1>
            <div className="flex">
              <div className="flex-row mt-8">
              <div className="flex ml-1 border w-1/1 row border-spacing-1 bg-slate-300">
              <div className="mt-4 ml-6 "><h3 className="text-4xl font-bold">GET UP TO 60%</h3><br></br>
              <p className="text-2xl">For the summer season</p>
              </div>
              <Image src={"/event1.webp"} alt="Event1" height={200} width={260} className="ml-1"/>
              </div>
                <div className="flex mt-2 ml-1 border w-1/1 bg-slate-800 align-center">
                  <div className="justify-center mt-10 ml-12"><h3 className="text-4xl font-extrabold text-center text-white">GET 30% OFF</h3>
                  <p className="mt-10 text-center text-white">USE PROMO CODE</p>
                  <Button className="mt-2 mb-6 text-2xl font-bold lg-rounded bg-slate-700">DINEWEEKENDSALE</Button>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 ml-4 ">
                <div className="bg-orange-100 border">
                  <h2 className="mt-4 ml-2 font-semibold text-1xl">Flex Sweeshirt</h2>
                  <p className="ml-8 font-extrabold">$75.00</p>
                  <Image src={"/event2.webp"} alt="Event2" height={340} width={280}/>
                </div>
                <div className="ml-4 border bg-slate-300">
                  <h2 className="mt-4 ml-2 font-semibold text-center text-1xl">Flex Push Button Bomber</h2>
                  <p className="ml-8 font-extrabold">$190.00</p>
                  <Image src={"/event3.webp"} alt="Event3" height={340} width={280}/>
                </div>
              </div>
            </div>  
      </div>
    </section>
  )
}

export default Promotion