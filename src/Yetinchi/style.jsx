import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f5ed;
  text-align: center;
  padding: 50px 20px;
`;

export const Title = styled.h1`
  color: #1f3824;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  color: #5b7065;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Step = styled.div`
  text-align: center;
  max-width: 200px;
`;

export const StepText = styled.p`
  font-size: 25px;
  color: #5b7065;
  margin-bottom: 8px;
`;

export const Highlight = styled.span`
  font-size: 35px;
  font-weight: 700;
  color: #1f3824;
`;

export const CTAButton = styled.button`
  margin-top: 40px;
  background-color: #2c6e49;
  color: #fff;
  border: none;
  border-radius: 35px;
  padding: 10px 20px;
  font-size: 19px;
  cursor: pointer;
  margin-bottom:40px;

  &:hover {
    background-color: red;
  }
`;

export const FinalStepImage = styled.img`
  margin-top: 10px; 
`;

