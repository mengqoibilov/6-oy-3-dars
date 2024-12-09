import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const HeaderSection = styled.div`
  position: relative;
  background-color: #234e3b;
  color: white;
  text-align: center;
  padding: 120px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;

`;

export const RightImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 0 20px;
`;

export const Button = styled.button`
  background-color: #ff8577;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;

