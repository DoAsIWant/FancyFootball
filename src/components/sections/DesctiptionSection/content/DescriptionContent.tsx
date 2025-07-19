import styled from "@emotion/styled";
import FormationContent from "./FormationContent";
import ScoringContent from "./ScoringContent";
import { MobileSectionBlock } from "@/ui/mobile/MobileSectionBlock";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useWindowSize";

const InformationContainer = styled.div`
  margin: 83px 0 137px;
  //padding: 0 65px 0 65px;
`;

export default function DescriptionContent() {
  const isMobile = useIsMobile()

  return isMobile ? (
    <MobileSectionBlock isHeader>
      <Image src="/images/fantasy-ball.png" alt="ff" width={252} height={252} />
    </MobileSectionBlock>
  ) : (
    <InformationContainer>
      <FormationContent />
      <ScoringContent />
    </InformationContainer>
  );
}
