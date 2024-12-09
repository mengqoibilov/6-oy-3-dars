import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f8f4;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #1d392a;
  text-align: center;
  margin-bottom: 10px;

  br {
    display: block;
  }
`;

export const Paragraph = styled.p`
  color: #4a4a4a;
  font-size: 0.95rem;
  text-align: center;
  margin: 10px 0 20px;

  br {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom:70px;
`;

export const Dimensions = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #0073e6;
`;
