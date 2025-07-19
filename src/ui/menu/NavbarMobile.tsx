'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

 const NavbarContainer = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 9999;
    background-color: #000;
    padding: 10px 20px;
    top:0;
    left:0;
  `;

  const NavbarBlock = styled.div`
    display: flex;
    max-width: 1298px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  `;

  const LinksBlock = styled.ul<{ open: boolean }>`
    display: flex;
    gap: 130px;
    list-style: none;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      width:100%;
      top: 60px;
      left:0;
      background: rgba(0, 0, 0, 0.95);
      padding: 20px;
      border-radius: 8px;
      gap: 20px;
      z-index: 1000;
      display: ${props => (props.open ? 'flex' : 'none')};
    }
  `;

  const Item = styled.li`
    font-size: 13px;
  `;

  const ItemLink = styled.a`
    text-decoration: none;
    font-family: ${theme.fonts.body};
    font-size: 13px;
    color: #ffffff;
    transition: color 0.3s ease;
    &:hover {
      color: #ddd;
    }
  `;

  const Burger = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 26px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `;

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarBlock>
        <Image alt="logo" src="/images/logo.png" width={59} height={59} />

        <Burger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </Burger>

        <LinksBlock open={menuOpen}>
          <Item>
            <ItemLink href="#">Home</ItemLink>
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