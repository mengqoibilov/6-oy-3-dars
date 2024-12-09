import React from 'react';
import rasm1 from './icons/rasm1.svg';
import rasm2 from './icons/rasm2.svg';
import rasm3 from './icons/rasm3.svg';
import {
  Container,
  Subtitle,
  CardContainer,
  Card,
  Icon,
  List,
  ListItem,
} from './style';

const Oltinchi = () => {
  return (
    <Container>
      <h1>Consider everyone's best interest</h1>
      <Subtitle>HR is for everyone. Clerksy can help you.</Subtitle>
      <CardContainer>
        <Card>
          <Icon src={rasm1} alt="Protect Your Company" />
          <h2>Protect Your <br /> Company</h2>
          <List>
            <ListItem>Compliance Audits & Training</ListItem>
            <ListItem>Employee Data Storage</ListItem>
            <ListItem>Policy Drafting</ListItem>
          </List>
        </Card>

        <Card>
          <Icon src={rasm2} alt="Set Your Employees Up For Success" />
          <h2>Set Your Employees <br /> Up For Success</h2>
          <List>
            <ListItem>Learning & Development</ListItem>
            <ListItem>Employee Relations</ListItem>
            <ListItem>Benefit Management</ListItem>
            <ListItem>Employee Performance</ListItem>
          </List>
        </Card>

        <Card>
          <Icon src={rasm3} alt="Know Your Industry’s Legal Landscape" />
          <h2>Know Your Industry’s Legal Landscape</h2>
          <List>
            <ListItem>Work Place Investigations</ListItem>
            <ListItem>Employee Mediations</ListItem>
            <ListItem>Performance Tracking</ListItem>
          </List>
        </Card>
      </CardContainer>
    </Container>
  );
};
export default Oltinchi;
