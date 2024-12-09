import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #124c3a;
  
`;


export const Logo = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-left:40px;
`;


export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.div`
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


export const GetStartedButton = styled.button`
  background-color: #56c28e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;


export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px 90px;
  background-color: #124c3a;
  color: #fff;
`;

export const HeroText = styled.div`
  max-width: 50%;
  h1 {
    font-size: 48px;
  }
  p{
    font-size: 18px;
    line-height: 1.6;
    margin-top:30px;
  }
`;

export const HeroImage = styled.div`
  width: 560px;
  height:430px;
  background-size: cover;
  background-position: center;
`;



