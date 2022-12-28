import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

export const IPaddress = (props: any) => {
  const { country, city, isp, ip, postal, timezone } = props;

  return (
    <Container>
      <IpAddress>
        <h3>IP Address</h3>
        <h2>{ip}</h2>
      </IpAddress>
      <Location>
        <h3>Location</h3>
        <h2>
          {country}, {city} {postal}
        </h2>
      </Location>
      <Timezone>
        <h3>Timezone</h3>
        <h2>{timezone}</h2>
      </Timezone>
      <Isp>
        <h3>ISP</h3>
        <h2>{isp}</h2>
      </Isp>
    </Container>
  );
};

const Container = styled.div`
  width: 327px;
  height: 304px;
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
    height: 15px;

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
    height: 25px;

    @media only screen and (min-width: 675px) {
      font-size: 26px;
      line-height: 30px;
    }
  }

  @media only screen and (min-width: 675px) {
    width: 613px;
    margin: 48px auto;
    height: 330px;
  }
  @media only screen and (min-width: 1175px) {
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
  @media only screen and (min-width: 1175px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #00000063;
  }
`;
const Location = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 1175px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #00000063;
  }
`;
const Timezone = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 1175px) {
    width: 213px;
    margin-right: 64px;
    border-right: 1px solid #00000063;
  }
`;
const Isp = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 1175px) {
    width: 213px;
  }
`;
