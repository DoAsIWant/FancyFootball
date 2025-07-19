"use client";

import ContentWrapper from "./СontentWrapper";
import { useIsMobile } from "@/hooks/useWindowSize";
import DescriptionSection from "@/components/sections/DesctiptionSection";
import FootballSections from "@/components/sections/FootballSection/FootballSection";
import StrategySection from "@/components/sections/StrategySection";
import SuccessSection from "@/components/sections/SuccessSection/SuccessSection";
import DownloadFrorm from "@/ui/forms/DownloadForm";
import { MobileSectionBlock } from "@/ui/mobile/MobileSectionBlock";
import styled from "@emotion/styled";
import Image from "next/image";

export default function AppWrapper() {
  const isMobile = useIsMobile();

  const ModileSectionWrapper = styled.div`
      padding:45px 20px;
      max-width:360px;
      margin-top:1px;
  `
  return (
    <ContentWrapper>
      <FootballSections></FootballSections>
      {isMobile ? <DownloadFrorm /> : null}

      {isMobile ? (
        <ModileSectionWrapper>
          <MobileSectionBlock isHeader>
            <Image
              src="/images/fantasy-ball.png"
              alt="ff"
              width={252}
              height={252}
            />{" "}
          </MobileSectionBlock>
        </ModileSectionWrapper>
      ) : null}

      <DescriptionSection></DescriptionSection>
      <StrategySection />
      {!isMobile ? <SuccessSection /> : null}
    </ContentWrapper>
  );
}
