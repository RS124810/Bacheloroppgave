import React from "react";
import styled from "styled-components";
import { Bakgrunn, Tilbake, Overskift } from "../SimulertBoligkjop/SimulertBoligkjop";
import { Stopp, Tekst as Header, Linje } from "./BybaneStopp";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 70% 10%; 
`;

const Tekst = styled.p`
  margin-left: 50px;
`;

const RadgiverTime = styled.div`
  background-color: #EBEFF5;
  padding: 10px;
  margin-left: 17px;
  width: 75%;
`;

const AvtalMoteKnapp = styled.button`
  font-weight: bold;
  height: 40px;
  width: 125px;
  margin-left: 20%;
  background-color: white;
  border: solid 2px black;
  border-radius: 20px;
`;

const VeienTilDinForsteBolig = () => {
    const [open, setOpen] = React.useState({});

    const handleClick = (id) => {
      setOpen((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    return (
      <Bakgrunn>
        <Tilbake to="/" />
        <Overskift>Veien til din første bolig</Overskift>
        
        <Grid onClick={() => handleClick("1")}>
          <div>
            <Stopp style={{background: open[1] ? '#DD1D1F' : ''}}>1</Stopp>
            <Header>Få finansieringsbevis</Header>
          </div>
        </Grid>
        <Linje style={{height: open[1] ? '63px' : ''}}/>
          {open["1"] && <Tekst id="1">Test 1</Tekst>}

        <Grid onClick={() => handleClick("2")}>
          <div>
            <Stopp style={{background: open[2] ? '#DD1D1F' : ''}}>2</Stopp>
            <Header>Bli klar for visning</Header>
          </div>
        </Grid>
        <Linje style={{height: open[2] ? '63px' : ''}}/>
          {open["2"] && <Tekst id="2">Test 2</Tekst>}
        <Grid onClick={() => handleClick("3")}>
          <div>
            <Stopp style={{background: open[3] ? '#DD1D1F' : ''}}>3</Stopp>
            <Header>Budrunde</Header>
          </div>
        </Grid>
        <Linje style={{height: open[3] ? '63px' : ''}}/>
          {open["3"] && <Tekst id="3">Test 3</Tekst>}

        <Grid onClick={() => handleClick("4")}>
          <div>
            <Stopp style={{background: open[4] ? '#DD1D1F' : ''}}>4</Stopp>
            <Header>Flytt inn</Header>
          </div>
        </Grid>
        <Linje style={{height: open[4] ? '63px' : ''}}/>
          {open["4"] && <Tekst id="4">Test 4</Tekst>}

        <Grid onClick={() => handleClick("5")}>
          <div>
            <Stopp style={{background: open[5] ? '#DD1D1F' : ''}}>5</Stopp>
            <Header>Hva skjer nå?</Header>
          </div>
        </Grid>
        <Linje style={{height: open[5] ? '63px' : '0'}}/>
          {open["5"] && (<div><Tekst id="5">Test 5</Tekst>
                              <RadgiverTime>
                                <h3>Gratis møte med rådgiver</h3>
                                <p>Møte oss i banken eller på telefonen</p>
                                <AvtalMoteKnapp>Avtal møte</AvtalMoteKnapp>
                              </RadgiverTime>
                         </div>)}

      </Bakgrunn>
    );
  };

export default VeienTilDinForsteBolig
