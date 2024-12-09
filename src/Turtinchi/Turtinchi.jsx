import React from "react";
import rasm1 from "./img/rasm1.svg";
import {
  Container,
  Title,
  Paragraph,
  ImageWrapper,
  Image,
} from "./style";

const Turtinchi = () => {
  return (
    <Container>
      <Title>
        Employees come in all shapes and <br /> sizes Find the right fit.
      </Title>

      <Paragraph>
        Focus on casting and screening. Let Clerksy handle contracts, resolve
        any on set-conflicts <br />
        and make sure you are compliant with work and safety boards.
      </Paragraph>

      <ImageWrapper>
        <Image src={rasm1} alt="Illustration" />
      </ImageWrapper>
    </Container>
  );
};

export default Turtinchi;
