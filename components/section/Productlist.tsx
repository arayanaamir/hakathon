import Image from "next/image"


const Productlist = () => {
  return (
    <div className="mt-24">
        <h1 className="flex justify-center text-lg font-bold text-blue-500" >Product List</h1>
        <h1 className="flex justify-center mt-4 text-4xl font-bold">Check What We Have</h1>
        <div className="flex py-6 justify-evenly">
        <div><Image src={"/p1.png"} alt="product 1"height={400} width={380} />
        <h3 className="mt-3 text-lg font-bold text-center">Bushed Lagan Tshirt</h3>
        <p className="mt-1 text-lg font-bold text-center">$195</p></div>
        <div><Image src={"/p2.png"} alt="product 1"height={400} width={380} />
        <h3 className="mt-3 text-lg font-bold text-center">Cameryn Sash Tie Dress</h3>
        <p className="mt-1 text-lg font-bold text-center">$545</p></div>
        <div><Image src={"/p3.png"} alt="product 1"height={400} width={380} />
        <h3 className="mt-3 text-lg font-bold text-center">Flex Sweetshirt</h3>
        <p className="mt-1 text-lg font-bold text-center">$175</p></div>
        </div> 
    </div>
  )
}

export default Productlist