import React from "react";
import styled from "styled-components"; 

const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 70% 10%;
    border-radius: 6px;
    width: 350x;
    height: 150px;
    margin: 10px;
    bottom: 0;
    background-color: #A7C3A7;
`;

const GridItems = styled.div`
    display: block;
    margin: auto;
    padding-left: 5px;
`;

const StyledImg = styled.img`
    max-width: 60px;
`;

const Tekst = styled.p`
    font-size: 13px;
    padding-right: 5px;
    margin-top: -10px;
`;

const Pil = styled.div`
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(135deg);
    margin-right: 20px;
`;

function Knapp({ bilde, ariaTekst, tittel, undertekst }) {
    return (
        <Grid>
            <GridItems>
                <StyledImg src={ bilde } aria-label={ariaTekst}/>
            </GridItems>
            <GridItems>
                <h2>{ tittel }</h2>
                <Tekst>{ undertekst }</Tekst>
            </GridItems>
            <GridItems>
                <Pil />
            </GridItems>
        </Grid>
    )
}

export default Knapp;