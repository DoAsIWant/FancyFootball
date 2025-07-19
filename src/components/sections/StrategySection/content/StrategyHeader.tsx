import styled from "@emotion/styled"

const Header = styled.h1 `
    padding-bottom: 15px;
    line-height: 100%;
    font-size: 41px;
    letter-spacing: 0;
`

const Caption = styled.p `
 font-size: 16px;
 padding-top:13px;
 line-height:167%;
`

export default function StrategyHeader(){
    return (
        <>
        <Header>How to play fantasy football?</Header>
        <Caption>The basics of the game</Caption>
        </>
    )
}