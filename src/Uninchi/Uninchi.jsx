import React from "react";
import {
  Container,
  FooterSection,
  Title,
  Subtitle,
  Form,
  Input,
  SubmitButton,
  PrivacyText,
} from "./style";

const Uninchi = () => {
  return (
    <Container>
      <FooterSection>
        <div>
          <Title>Stay up to date!</Title>
          <Subtitle>Sign up for the latest Clerksy news.</Subtitle>
        </div>
        <Form>
          <Input type="email" placeholder="Enter your email" />
          <SubmitButton>Sign Up</SubmitButton>
        </Form>
        <PrivacyText>
          By submitting your email you agree to receive updates about Clerksy. You can <br /> unsubscribe at any time. View our full{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </PrivacyText>
      </FooterSection>
    </Container>
  );
};
export default Uninchi;
