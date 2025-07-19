'use client'

import styled from "@emotion/styled"

export default function DownloadFrorm (){

  const FormBlocK = styled.div`
  text-align:center;
  background-color:#1B1B20;
  backdrop-filter: blur(10px);           
  -webkit-backdrop-filter: blur(10%); 
  margin-top:30px;
  padding:30px 10px;
  width:100%;
  min-height:252px;
  max-width:400px;

  `
  const FormHeader = styled.h1`
  font-size:28px;
  line-height:42px;
  padding:0 0 35px;
  letter-spacing:0;
  color:#885DF1;
  `

  const FormInput = styled.input`
  width:300px;
  height:45px;
  padding:0 10px;
  `

  const FormButton = styled.button `
  background: linear-gradient(#885DF1,#6610F2);
  color:#121212;
  border:none;
  outline:none;
  margin-top:35px;
  width:240px;
  height:42px;
  font-size:16px;

  `

  return (
  
  <FormBlocK>
    <FormHeader>
     DOWNLOAD NOW
    </FormHeader>
    <FormInput placeholder="Enter Your phone number"></FormInput>
    <FormButton>Get App Link</FormButton>
  </FormBlocK>
  
)
}