import React from 'react'; 
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
 
import { 
  FooterWrapper, 
  FooterTop, 
  FooterBottom, 
  Logo, 
  Tagline, 
  CopyRight, 
  LinkList, 
  SocialIcons 
} from './style';



const Footer = () => {
  return (
    <FooterWrapper>
    
      <FooterTop>
        <Logo src={rasm1} alt="Clerksy Logo" />
        <Tagline>A people company.</Tagline>
        <SocialIcons>
          <img src={rasm2} alt="Facebook" />
          <img src={rasm3} alt="Twitter" />
          <img src={rasm4} alt="LinkedIn" />
          <img src={rasm5} alt="Instagram" />
        </SocialIcons>
      </FooterTop>

     
      <FooterBottom>
        <CopyRight>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</CopyRight>
        <LinkList>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/gdpr">GDPR</a>
          <a href="/careers">Careers</a>
          <a href="/press-kit">Press Kit</a>
        </LinkList>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
