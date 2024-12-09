import React from "react";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";

import { 
Container,
 HeaderSection,
 Title, 
 Subtitle,
Button, 
LeftImage,
RightImage 
        } from "./style";

const Tuqizinchi = () => {
  return (
    <Container>
      <HeaderSection>
        <LeftImage src={rasm2} alt="Left Decoration" />
        <div>
          <Title>Get Started With Clerksy</Title>
          <Subtitle>Make sure your business puts people first.</Subtitle>
          <Button>Book a Free Discovery Call</Button>
        </div>
        <RightImage src={rasm3} alt="Right Decoration" />
      </HeaderSection>
    </Container>
  );
};

export default Tuqizinchi;
