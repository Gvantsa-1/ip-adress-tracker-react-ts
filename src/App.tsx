import React from "react";
import styled from "styled-components";
import bgImage from "./assets/pattern-bg.png";
import { IPmap } from "./components/IPmap";
import { IPaddress } from "./components/IPaddress";
import { IPtracker } from "./components/IPtracker";
function App() {
  const handleIp = () => {};
  return (
    <Container>
      <BGimage>
        <Title>IP Address Tracker</Title>
        <IPtracker handleIp={handleIp} />
        <IPaddress />
      </BGimage>{" "}
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
