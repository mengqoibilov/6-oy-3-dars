import React from 'react';
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";
import {
  Container,
  Section,
  Imageswrapper,
  ImageWrapper,
  TextWrapper,
  Title,
  Description,
  PartnersWrapper,
  PartnersLogo
} from './style';

const Ikkinchi = () => {
  return (
    <Container>
      <Section>
        <ImageWrapper>
          <img src={rasm1} alt="Character 1" />
        </ImageWrapper>
        <TextWrapper>
          <Title>Put the human <br /> back in HR.</Title>
          <Description>
            Your employees are the real stars. Show the <br /> love and help them perform!
          </Description>
        </TextWrapper>
      </Section>
      <Section reverse>
        <TextWrapper>
          <Title>You don’t have to <br /> play all the parts.</Title>
          <Description>
            Sales, accounting, HR—Oh My! You can’t do <br />it all - let Clerksy help.
          </Description>
        </TextWrapper>
        <Imageswrapper>
          <img src={rasm2} alt="Character 2" />
        </Imageswrapper>
      </Section>
      <PartnersWrapper>
        <p>We partner with the best</p>
        <PartnersLogo>
          <img src={rasm3} alt="Stripe" />
          <img src={rasm4} alt="Google" />
          <img src={rasm5} alt="Notion" />
          <img src={rasm6} alt="Gusto" />
          <img src={rasm7} alt="Aircall" />
        </PartnersLogo>
      </PartnersWrapper>
    </Container>
  );
};
export default Ikkinchi;
