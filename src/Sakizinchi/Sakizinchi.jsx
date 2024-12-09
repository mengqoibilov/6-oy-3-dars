import React from 'react';
import rasm2 from "./img/rasm2.svg";

import { 
  Container,
  Content,
  TextWrapper,
  Title,
  Description,
  Button,
  EBookImage
} from './style';

const Sakizinchi = () => {
  return (
    <Container>
      <Content>
        <TextWrapper>
          <Title>Not just another <br /> HR resource.</Title>
          <Description>Simple. Entertaining. Informative.</Description>
          <Button>Download E-book</Button>
        </TextWrapper>
        <EBookImage src={rasm2} alt="E-book" />
      </Content>
    </Container>
  );
};

export default Sakizinchi;
