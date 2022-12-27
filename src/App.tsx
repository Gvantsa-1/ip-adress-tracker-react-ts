import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgImage from "./assets/pattern-bg.png";
import { IPmap } from "./components/IPmap";
import { IPaddress } from "./components/IPaddress";
import { IPtracker } from "./components/IPtracker";
import Axios from "axios";

function App() {
  const [value, setValue] = useState<string>("");
  const [ip, setIP] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isp, setIsp] = useState<string>("");
  const [postal, setPostal] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value);
  const getData = async () => {
    const res = await Axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_3YkRMFfoOqgVIDDfeW2V8TxuxQViN&ipAddress=${value}`
    );
    setIP(res.data.ip);
    setCountry(res.data.location.country);
    setCity(res.data.location.city);
    setIsp(res.data.isp);
    setPostal(res.data.location.postalCode);
    setTimezone(res.data.location.timezone);
    console.log(res.data);
  };
  const handleIp = () => {
    alert("hi");
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <BGimage>
        <Title>IP Address Tracker</Title>
        <IPtracker handleIp={handleIp} inputChange={inputChange} />
        <IPaddress
          ip={ip}
          country={country}
          isp={isp}
          city={city}
          postal={postal}
          timezone={timezone}
        />
      </BGimage>
      <IPmap />
    </Container>
  );
}
const Container = styled.div`
  min-height: 828px;
  flex-direction: column;
`;
const BGimage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 300px;
  text-align: center;
  padding: 25px 0 0 0;
  filter: brightness(1.2);
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 29px;
  @media only screen and (min-width: 675px) {
    font-size: 32px;
  }
`;
export default App;
