"use client";

import styled from "@emotion/styled";
import StrategyContent from "./content/StrategyContent";
import AnalyticsContent from "./analytics/AnalyticsContent";
import LeagueContent from "./league/LeagueContent";
import { useIsMobile } from "@/hooks/useWindowSize";
import LeaguesCardsContainer from "./league/LeagueCardsContainer";
import { MobileSectionBlock } from "@/ui/mobile/MobileSectionBlock";

export default function StategySection() {
  const Wrapper = styled.section`
    padding: 97px 65px 25px 104px;
    max-width: 1220px;
    border-radius: 20px;
    background-color: #d804fa0a;
    margin-top: 44px;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
      text-align: left;
      padding: 45px 10px;
      max-width: 360px;
    }
  `;

  const isModile = useIsMobile();

  return (
    <Wrapper id={"strategy"}>
      <StrategyContent />
      {isModile ? (
        <MobileSectionBlock isHeader>
          <LeaguesCardsContainer></LeaguesCardsContainer>
        </MobileSectionBlock>
      ) : <LeagueContent/>}
      <AnalyticsContent />

       {isModile ? (
        <MobileSectionBlock isHeader>
          <LeaguesCardsContainer></LeaguesCardsContainer>
        </MobileSectionBlock>
      ) : null}

    </Wrapper>
  );
}
