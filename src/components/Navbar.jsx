import React from "react";
import rasm1 from "./img/rasm1.svg"; 
import rasm2 from "./img/rasm2.svg";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  HeroSection,
  HeroText,
  HeroImage,
  GetStartedButton,
} from "./style";

const Navbar = () => {
  return (
    <>
  
      <NavbarContainer>
        <Logo><img src={rasm2} alt="" /></Logo>
        <NavLinks>
          <NavLink>Log In</NavLink>
          <NavLink>844-332-6440</NavLink>
          <GetStartedButton>Get Started</GetStartedButton>
        </NavLinks>
      </NavbarContainer>


      <HeroSection>
        <HeroText>
          <h1>Running the show <br /> has never been so easy.</h1>
          <p>
            Ready to put the human back in HR? Clerksy helps you <br /> set the stage
            with an inclusive and compliant workplace.
          </p>
        </HeroText>
        <HeroImage style={{ backgroundImage: `url(${rasm1})` }} />
      </HeroSection>
    </>
  );
};
export default Navbar;
