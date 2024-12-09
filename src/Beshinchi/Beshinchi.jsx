import React from "react";
import rasm1 from "./img/rasm1.svg";
import {
  Container,
  TextWrapper,
  Title,
  Description,
  ImageWrapper,
  Image,
} from "./style";


const Beshinchi = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>How the scenes <br /> fit together</Title>
        <Description>
          Employee Training & Development, Diversity <br /> & Inclusion Programs, and Conflict Resolution.
        </Description>
      </TextWrapper>
      <ImageWrapper>
        <Image src={rasm1} alt="How the scenes fit together illustration" />
      </ImageWrapper>
    </Container>
  );
};

export default Beshinchi;
