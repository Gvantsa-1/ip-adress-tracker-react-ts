import React from "react";
import styled from "styled-components";
import bgImage from "./assets/pattern-bg.png";
import { IPmap } from "./components/IPmap";
import { IPaddress } from "./components/IPaddress";
import { IPtracker } from "./components/IPtracker";
function App() {
  return (
    <Container>
      <BGimage>
        <Title>IP Address Tracker</Title>
        <IPtracker />
        <IPaddress />
      </BGimage>
      <IPmap />
    </Container>
  );
}
const Container = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 828px;
  flex-direction: column;
`;
const BGimage = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 25px 0 0 0;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 29px;
`;
export default App;
