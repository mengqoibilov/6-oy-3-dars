import React from 'react';
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";

import { 
  Container,
  Title, 
  Subtitle,
  StepWrapper,
  Step,
  StepText,
  Highlight,
  CTAButton 
} from './style';

const Yetchinchi = () => {
  return (
    <Container>
      <Title>It's easy as 1, 2, 3</Title>
      <Subtitle>Clerksy can help use your unique business needs. Here's how:</Subtitle>
      
      <StepWrapper>
        <Step>
          <StepText>Fill out a form and tell us what you're looking for:</StepText>
          <Highlight>5 minutes</Highlight>
        </Step>

        <img src={rasm1} alt="arrow" />

        <Step>
          <StepText>Time it will take a Clerksy rep to follow up:</StepText>
          <Highlight>24 hours</Highlight>
        </Step>

        <img src={rasm2} alt="arrow" />

     

        <img src={rasm3} alt="final step" className="final-step-image" />
      </StepWrapper>

      <CTAButton>Book Free Discovery Call</CTAButton>
    </Container>
  );
};

export default Yetchinchi;


