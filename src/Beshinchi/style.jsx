import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #ffffff;
`;

export const TextWrapper = styled.div`
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1d392a;
  font-weight: bold;
  margin-left: 140px;
  margin-bottom:15px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #4a4a4a;
  line-height: 1.5;
  margin-left:140px;
`;

export const ImageWrapper = styled.div`
  max-width: 100%;
  margin-right:150px;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom:50px;
`;
