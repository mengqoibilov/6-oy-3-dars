import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: #fff;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #253f2e;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #5b7065;
  margin-bottom: 32px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 70px;
`;

export const Card = styled.div`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 24px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const Icon = styled.img`
  width: 180px;
  height: 110px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #253f2e;
`;

export const List = styled.ul`
  list-style: none;
  margin-top:20px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  color: #5b7065;
  margin-bottom: 8px;
  position: relative;
  padding-left: 12px;

  &:before {
    content: '•';
    color: #253f2e;
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
