import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p className="footer-text">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
          <input className="input-element" type="email" placeholder="Enter Your Email Address" />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
        
        <div className="footer-section">
          <h3>About Us</h3>
          <ul className="lists">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="lists">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Pots & Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul className="lists">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return & Refund Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p className="footer-text">Address: F-262, First Floor, Gurgaon...</p>
          <p className="footer-text">Call: +919958287272</p>
          <p className="footer-text">Email: care@chaperoneplants.com</p>
        </div>
        </div>

        <div className="footer-social">
          <h3>Follow us on</h3>
          <div className="social-icons">
            <AiOutlineInstagram />
            <BiLogoFacebookCircle />
            <BsFillThreadsFill />
            <FaYoutube />
            <IoLogoLinkedin  />
          </div>
        </div>
    
      <hr className="hr-line" />
      <div className="footer-bottom">
        <p>© 2024 Chaperone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;