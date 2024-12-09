import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
`;

export const TextWrapper = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  margin-left:90px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  margin-left:90px;
`;

export const Button = styled.button`
  background-color: #2c6e49;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 35px;
  font-size: 18px;
  cursor: pointer;
   margin-left:90px;

  &:hover {
    background-color: red;
  }
`;

export const EBookImage = styled.img`
  width: 450px;
  height: auto;
  margin-right: 90px;
`;
