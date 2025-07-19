'use client'

import styled from "@emotion/styled"
import SuccessContent from "./SuccessContent"

export default function SuccessSection(){

    const SuccessWrapper = styled.section`
    width:100%;
    margin-top:100px;
    text-align:center;
    `
    const SuccesHeader = styled.h1 `
     font-size:40px;
    `

    return(
        <SuccessWrapper>
            <SuccesHeader>Key success factors</SuccesHeader>
            <SuccessContent/>
        </SuccessWrapper>
    )
}