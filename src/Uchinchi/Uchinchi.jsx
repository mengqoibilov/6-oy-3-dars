import React from "react";
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import {
  SectionContainer,
  Title,
  Grid,
  GridItem,
  Icon,
  Description,
  Img,
} from "./style";



const Uchinchi = () => {
  return (
    <SectionContainer>
      <Title>HR Production of the Highest Quality</Title>
      <Grid>
        <GridItem>
          <Icon>
            <Img src= {rasm1} alt="Educates & Informs" />
          </Icon>
          <Description>
            Educates & Informs <br /> Employee Expectations
          </Description>
        </GridItem>

        <GridItem>
          <Icon>
            <Img src={rasm2} alt="Protects Your Business" />
          </Icon>
          <Description>
            Protects Your Business <br /> Just in Case
          </Description>
        </GridItem>

        <GridItem>
          <Icon>
            <Img src={rasm4} alt="Manages & Stores Documents" />
          </Icon>
          <Description>
            Manages & Stores <br /> Important Documents
          </Description>
        </GridItem>

        <GridItem>
          <Icon>
            <Img src={rasm3} alt="Create a Healthy Environment" />
          </Icon>
          <Description>
            Create a Healthy <br /> Work Environment
          </Description>
        </GridItem>
      </Grid>
    </SectionContainer>
  );
};

export default Uchinchi;
