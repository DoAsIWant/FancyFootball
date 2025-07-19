"use client";

import { useIsMobile } from "@/hooks/useWindowSize";
import ButtonSmall from "@/ui/buttons/ButtonSmall";
import styled from "@emotion/styled";
import Image from "next/image";

export default function FootballSections() {
  const isMobile = useIsMobile();

  const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 56px;
    padding: 50px 0 0;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  `;
  const SectionText = styled.p`
    line-height: 167%;
    font-size: 15px;
    letter-spacing: 0;
    max-width: 385px;
    padding: 0 0 73px;
  `;
  const SectionHeader = styled.h1`
    padding: 0 0 15px;
    line-height: 100%;
    font-size: 41px;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  `;

  const SectionDescription = styled.div`
    //height: 100vh;
  `;
  return (
    <SectionContainer>
      <SectionDescription>
        <SectionHeader>
          {" "}
          {!isMobile
            ? "What is fantasy football?"
            : "Welcome to Fantasy Arena - the best place for fantasy sports"}
        </SectionHeader>

        {!isMobile ? (
          <SectionText>
            FutbolXpert is your guide to the world of fantasy football! Build
            your own team of real football players, follow their performances
            and earn points. Your strategy determines your success!
          </SectionText>
        ) : null}

        {!isMobile ? <ButtonSmall>Sign up in WhatsApp</ButtonSmall> : null}
      </SectionDescription>

      <Image
        width={723}
        height={500}
        alt="ff"
        src="/images/football-header.png"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </SectionContainer>
  );
}
