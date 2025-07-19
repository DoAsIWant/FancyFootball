"use client";

import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";

  const NavbarContainer = styled.nav`
    width: 100%;
    //margin: 0 auto;
    position: fixed;
    height: 80px;
    z-index: 9999999;
    background: rgba(0, 0, 0, 0.95);
    top: 0;
    left: 0;
     padding:5px 0 10px;
  `;

  const NavbarBlock = styled.div`
    display: flex;
    align-items:center;
    padding:10px 0 10px;
    max-width: 1298px;
    gap: 300px;
    margin: 0 auto;
  `;
  const LinksBlock = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 130px;
  `;

  const Item = styled.li`
    list-style: none;
    font-size: 13px;
  `;

  const ItemLink = styled.a`
    text-decoration: none;
    font-family: ${theme.fonts.body};
    font-size: 13px;
    line-height: 100%;
    color: #ffffff;
  `;

export default function NavbarDesktop() {

  return (
    <NavbarContainer>
      <NavbarBlock>
        <Image alt="" src={"/images/logo.png"} width={59} height={59}></Image>

        <LinksBlock>
          <Item>
            <ItemLink href="/" className="">
              {" "}
              Home{" "}
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#description">How to play</ItemLink>
          </Item>
          <Item>
            <ItemLink href="#strategy">Basic Strategies</ItemLink>
          </Item>
        </LinksBlock>
      </NavbarBlock>
    </NavbarContainer>
  );
}
