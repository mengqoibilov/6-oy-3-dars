import styled from 'styled-components';


export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
`;


export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 20px;

  
`;

export const Logo = styled.img`
  width:80px
  height: 30px;
`;

export const Tagline = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1f3d1f;
`;


export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CopyRight = styled.p`
  font-size: 1.1rem;
  color: #666666;
  margin: 10px 0;
  margin-right:780px;
`;

export const LinkList = styled.div`
  display: flex;
  gap: 25px;
  margin-left:770px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #006400;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
