
'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

type WrapperProps = {
  children: ReactNode;
};

const Container = styled.main`
  max-width: 1270px;       
  padding-top:20px;
  margin:0 auto;        
  min-height: 100vh;
  display: flex;           
  flex-direction: column;  
  align-items: center; 
  width:100%; 
  padding: 45px 20px;
`;

export default function ContentWrapper({ children }: WrapperProps) {
  return <Container>{children}</Container>
}