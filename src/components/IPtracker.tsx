import React from "react";
import styled from "styled-components";
import trackerLogo from "../assets/icon-arrow.svg";

export const IPtracker = () => {
  return (
    <InputBox>
      <Input placeholder="Search for any IP address or domain" />
      <Button>
        <BtnLogo />
      </Button>
    </InputBox>
  );
};
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  background-color: #ffffff;
  color: #2c2c2c;
  font-size: 18px;
  width: 269px;
  height: 58px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  padding: 18px 24px;
  &::placeholder {
    visibility: hidden;
  }
  @media only screen and (min-width: 675px) {
    width: 390px;
  }
  @media only screen and (min-width: 975px) {
    &::placeholder {
      visibility: visible;
    }
    width: 555px;
  }
`;
const Button = styled.button`
  width: 58px;
  height: 58px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
  }
`;
const BtnLogo = styled.div`
  background-image: url(${trackerLogo});
  width: 10px;
  height: 15px;
  background-repeat: no-repeat;
  cursor: pointer;
`;
