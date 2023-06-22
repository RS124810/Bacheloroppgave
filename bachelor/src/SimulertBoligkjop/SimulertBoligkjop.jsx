import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { StartKnapp } from "../LandingSide";
import Hus from "../Hjelpefiler/Bilder/Hus.png";
import { SimulatorBeskrivelse } from "../Hjelpefiler/Tekster";

export const Bakgrunn = styled.body`
    margin: 20px;
`;

export const Tilbake = styled(Link)`
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(-45deg);
`;

export const Overskift = styled.h1`
    text-align: center;
`;

const Bilde = styled.img`
  display: block;
  margin-left: 35%;
  margin-right: auto;
`;

const Beskrivelse = styled.div`
    padding: 15px;
    background-color: #F5F7FA;
    margin 15px;
    margin-top: 20px;
    box-shadow: -20px 15px #D6DDE9;
    white-space: pre-wrap;
`;

const KnappTekst = styled(Link)`
    text-decoration: none;
`;

function SimulertBoligkjop() {
    return (
        <Bakgrunn> 
            <Tilbake to="/"/>
            <Overskift>
                { SimulatorBeskrivelse.tittel }
            </Overskift>
            <Bilde src={Hus} />
            <Beskrivelse>
                { SimulatorBeskrivelse.tekst }
            </Beskrivelse>
            <KnappTekst to="/">
                <StartKnapp>
                    Start simulator
                </StartKnapp>
            </KnappTekst>
        </Bakgrunn>
    )
}

export default SimulertBoligkjop;