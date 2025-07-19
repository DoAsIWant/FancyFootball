import styled from "@emotion/styled";
import BalancedContent from "./BalancedContent";
import TransferContent from "./TransferContent";
import StrategyHeader from "./StrategyHeader";
import { MobileSectionBlock } from "@/ui/mobile/MobileSectionBlock";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useWindowSize";

export default function StrategyContent() {
  const isMobile = useIsMobile()

  const StrategyContainer = styled.div`
    margin: 83px 0 137px;
    //padding: 0 65px 0 65px;
  `;
  return isMobile ? (
    <>
      <MobileSectionBlock isHeader>
        <Image
          src="/images/strategic-label.png"
          alt="ff"
          width={252}
          height={252}
        />
      </MobileSectionBlock>

      <MobileSectionBlock>
        <Image
          src="/images/strategic-label.png"
          alt="ff"
          width={252}
          height={252}
        />
      </MobileSectionBlock>
    </>
  ) : (
    <StrategyContainer>
      <StrategyHeader />
      <BalancedContent />
      <TransferContent />
    </StrategyContainer>
  );
}
