import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

type MobileSectionBlockProps = {
  children: React.ReactNode;
  isHeader?: boolean; // якщо не обов’язковий
};

export function MobileSectionBlock({ children, isHeader }: MobileSectionBlockProps) {

  const SectionBlock = styled.div`
    text-align: left;
    width: 100%;
  `;

  const SectionHeader = styled.h2`
    font-size: 16px;
    line-height: 130%;
    padding: 20px 0 54px 0;
    width:100%;
    min-width:290px;
    max-width:400px;
  `;

  const SectionParagraph = styled.p`
    font-size: 14px;
    padding: 0 0 60px;
  `;

  const MobileSectionHeader = styled.h1`
   padding: 0 5px 20px 0;
   line-height: 38px;
   font-size:28px;
   font-family: ${({ theme }) => theme.fonts.mobileHeader};
   font-weight: ${({ theme }) => theme.fontWeights.medium};
  `
  return (
    
    <SectionBlock>
      {isHeader ? <MobileSectionHeader> Fantasy Sports Basics: Strategies for Beginners </MobileSectionHeader>: null}
      {children}
      <SectionHeader>
        Пассивный заработок еще никогда не был таким простым и прибыльным
      </SectionHeader>
      <SectionParagraph>
        Вам не нужно даже знать, что такое трейдинг и криптовалюта. Вашим
        депозитом будет управлять один из лучших трейдеров мира
      </SectionParagraph>
    </SectionBlock>
  );
}
