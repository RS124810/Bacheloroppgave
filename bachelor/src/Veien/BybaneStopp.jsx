import React from "react";
import styled from "styled-components";

const Bybanen = styled.div`
    margin: auto;
`;

export const Stopp = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 20px;
    font-weight: bold;
    border-radius: 30px;
    border: 3px solid #DD1D1F;
    margin-bottom: 10px;
    height: 30px;
    width: 30px;
`;

export const Linje = styled.div`
    border-left: 3px solid #DD1D1F;
    height: 10px;
    position: absolute;
    margin-top: -10px;
    margin-left: 16px;
`;

export const Tekst = styled.p`
    font-size: 17px;
    font-weight: bold;
    position: absolute;
    margin-left: 45px;
    margin-top: -38px;
`;

function BybaneStopp() {
return (
    <Bybanen>
        <Stopp>1</Stopp>
        <Linje />
        <Tekst>Få finansieringsbevis</Tekst>
        <Stopp>2</Stopp>
        <Linje />
        <Tekst>Bli klar for visning</Tekst>
        <Stopp>3</Stopp>
        <Linje />
        <Tekst>Budrunde</Tekst>
        <Stopp>4</Stopp>
        <Linje />
        <Tekst>Flytt inn</Tekst>
        <Stopp>5</Stopp>
        <Tekst>Hva skjer nå?</Tekst>
    </Bybanen>
    )
}

export default BybaneStopp