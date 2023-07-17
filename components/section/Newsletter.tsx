import React from "react";

const Newsletter = () => {
  return  (
    <section className='newsletter mt-14'>
      <div className="ml-72 newsletter-background">
        Newsletter
      </div>
      <h1 className="text-2xl font-bold ml-96 align-center">Subscribe Our Newsletter</h1>
      <p className="mt-8 font-semibold text-1xl ml-96">Get the latest information and promo offers directly</p>
      <form className="mt-8 ml-96">
        <input
  type="email"
  placeholder="Input email address"
  className="px-8 py-2 text-gray-900 placeholder-gray-500 border border-black rounded border-bold"
/>
<button className="px-3 py-2 ml-3 text-white bg-black" type='submit'>Get Started</button>
      </form>
      
    </section>
  )
}

export default Newsletter