import styled from "@emotion/styled";


 export default function ButtonLarge({ children }:  { children: React.ReactNode }) {

    const Button = styled.button `
        width:271px;
        height:76px;
        background: linear-gradient(90deg, #885DF1, #6610F2);
        border-radius:50px;
        text-align:center;
        color:#FFFFFF;
        font-size:16px;
        outline:none;
        cursor:pointer;
        border:none;

        &:hover {
        background-color: #444;
      }
    `
    return (
         
    <Button>
      {children}
    </Button>
  );
 }
  
