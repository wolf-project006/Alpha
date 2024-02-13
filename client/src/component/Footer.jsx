import React from 'react'
import { Button } from './Button'
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subcription-heading">
            Subscribe to our newspaper for updates.
        </p>
        <p className="footer-subscription-text"> 
          You can unsubscribe any time.
        </p>
        <div className="input-area">
          <form>
            <input type="email" name="email" placeholder='Your Email'/>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Footer
