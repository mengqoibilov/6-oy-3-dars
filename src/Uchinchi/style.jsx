import styled from "styled-components";


export const SectionContainer = styled.div`
  background-color: #0f3d21; 
  padding: 50px 0;
  text-align: center;
`;


export const Title = styled.h1`
  color: #ffffff; /* White text */
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
`;


export const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  align-items: flex-start;
  flex-wrap: wrap;
`;


export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  gap:20px;
`;


export const Icon = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  gap:50px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  text-align: center;
  margin-top:70px;
`;


export const Img = styled.img`
  gap:20px;
`;
