import React from "react";
import styled from "styled-components";

export const IPaddress = () => {
  return (
    <Container>
      <IpAddress>
        <h3>IP Address</h3>
        <h2>cv</h2>
      </IpAddress>
      <Location>
        <h3>Location</h3>
        <h2>cvc</h2>
      </Location>
      <Timezone>
        <h3>Timezone</h3>
        <h2>cxc</h2>
      </Timezone>
      <Isp>
        <h3>ISP</h3>
        <h2>vcxxv</h2>
      </Isp>
    </Container>
  );
};
const Container = styled.div`
  width: 327px;
  height: 294px;
  border-radius: 15px;
  background-color: #ffffff;
  margin: 24px auto;
  padding: 26px 24px;
  h3 {
    margin-bottom: 7px;
    font-weight: 700;
    font-size: 10px;
    color: #2c2c2c;
    line-height: 11.85px;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    opacity: 0.5px;
    letter-spacing: 1.75px;

    @media only screen and (min-width: 675px) {
      font-size: 12px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2c2c2c;
    font-family: "Rubik", sans-serif;

    @media only screen and (min-width: 675px) {
      font-size: 26px;
      line-height: 30px;
    }
  }
  @media only screen and (min-width: 675px) {
    width: 448px;
    margin: 48px auto;
  }
  @media only screen and (min-width: 975px) {
    width: 1110px;
    height: 161px;
    display: flex;
    align-items: row;
    flex-direction: start;
    text-align: start;
    padding-top: 37px;
  }
`;
const IpAddress = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 975px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #000000;
  }
`;
const Location = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 975px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #000000;
  }
`;
const Timezone = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 975px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #000000;
  }
`;
const Isp = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 975px) {
    width: 213px;
  }
`;
