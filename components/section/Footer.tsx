import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer>
      <div className='mt-20 footer'>
        <div className='logo'>
          <Image src={"/logo.webp"} width={180} height={30} alt='logo' />
          <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='icon-container'>
            <div><Image src={"/twitter.png"} alt='twitter logo' height={20} width={20}/></div>
            <div><Image src={"/facebook.png"} alt='facebook logo' height={20} width={20}/></div>
            <div><Image src={"/linkedin.png"} alt='linkedin logo' height={20} width={20}/></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Design by. <span>Mr Aamir</span></p>
        <p>Code by. <span>Mr Aamir</span></p>
      </div>
    </footer>
  )
}

export default Footer