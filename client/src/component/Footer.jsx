import React from "react";
import { Button } from "./Button";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subcription-heading">
          Join our artistic community
        </p>
        <p className="footer-subscription-text">
          By subscribing, you'll receive exclusive updates, invitations to both
          virtual and in-person art events, and specially curated content
          delivered directly to your inbox.
        </p>
        <div className="input-area">
          <form>
            <input type="email" name="email" placeholder="Your Email" />
            <Button buttonStyle="btn--outline">Subscribe Now</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
