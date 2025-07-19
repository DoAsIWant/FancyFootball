'use client'

import styled from "@emotion/styled"
import DescriptionHeader from "./content/DescriptionHeader"
import DescriptionContent from "./content/DescriptionContent"
import AdvantagesContainer from "./advantages/AdvantagesContainer"
import VideoContainer from "./video/VideoContainer"
import { useIsMobile } from "@/hooks/useWindowSize"

export default function DescriptionSection(){
   const ismodile = useIsMobile()
   const Wrapper = styled.section`
    padding: 97px 65px 25px 104px;
    max-width:1220px;
    border-radius:20px;
    background-color:#D804FA0A;
    margin-top:44px;
    width:100%;
    text-align:center;

     @media (max-width: 768px) {
      text-align:left;
      padding:45px 20px;
      max-width:360px;
      margin-top:1px;
    }   
   `
    return(
        <Wrapper id={"description"}>
            {!ismodile ? <DescriptionHeader></DescriptionHeader>: null}
            <DescriptionContent/>
            <AdvantagesContainer></AdvantagesContainer>
            <VideoContainer></VideoContainer>
        </Wrapper>
    )
}