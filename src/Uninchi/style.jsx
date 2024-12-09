import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f7f2ed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

export const FooterSection = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #234e3b;
  margin-bottom:20px;
  margin-left: 50px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #444;
  margin-left: 50px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  max-width: 35%;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  margin-left:630px;

`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #006e2e;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export const PrivacyText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-left:620px;
`;
