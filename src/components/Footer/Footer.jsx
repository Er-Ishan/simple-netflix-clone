import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png';
import twitter from '../../assets/twitter_icon.png';
import instagram from '../../assets/instagram_icon.png';
import facebook from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
      <ul >
        <li className='newFooterList'>Audio Description</li>
        <li className='newFooterList'>Help Center</li>
        <li className='newFooterList'>Gift Cards</li>
        <li className='newFooterList'>Media Center</li>
        <li className='newFooterList'>Investor Relation</li>
        <li className='newFooterList'>Speed Test</li>
        <li className='newFooterList'>Cookies Preference</li>
        <li className='newFooterList'>Gift Cards</li>
        <li className='newFooterList'>Legal Notice</li>
        <li className='newFooterList'>Terms of uses</li>
        <li className='newFooterList'>Corporation Information</li>
        <li className='newFooterList'>Media Center</li>
      </ul>
      <p className='copyright'>	&#169; 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer;
