import { useIsMobile } from "@/hooks/useWindowSize";
import styled from "@emotion/styled";
import Image from "next/image";

export default function AnalyticsContent() {
  const AnalyticsBlock = styled.div`
    text-align: center;
    margin-top: 60px;
    padding:0 0 60px;
  `;
  const BlockHeader = styled.h4`
    font-size: 20px;
    line-height: 129%;
    padding: 10px 0 40px;
    letter-spacing: 0;
    max-width: 585px;
    margin: 0 auto;
  `;
  const BlockImage = styled.div`
    width: 100%;
    height:100%;
    min-height:444px;
  `;

  const isMobile = useIsMobile();

  return (
    <AnalyticsBlock>
      {!isMobile ? (
        <BlockHeader>
          If you like sports, pay attention to fantasy cricket - this is another
          way to test your analytical skills.
        </BlockHeader>
      ) : null}

      <BlockImage>
        <Image
          alt=""
          src={"/images/analytical.png"}
          width={1000}
          height={600}
          style={
            {
                width:"100%",
                height:"100%",
                objectFit: 'cover', 
                minHeight: "438px",
                minWidth: '325px',
            }
          }
        />
      </BlockImage>
    </AnalyticsBlock>
  );
}
