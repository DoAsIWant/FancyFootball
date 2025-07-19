import styled from "@emotion/styled";


 export default function ButtonSmall({ children }:  { children: React.ReactNode }) {

    const Button = styled.button`
      width: 212px;
      height: 50px;
      background: linear-gradient(90deg, #885df1, #6610f2);
      border-radius: 15px;
      text-align: center;
      color: #ffffff;
      font-size: 15px;
      outline: none;
      cursor: pointer;
      border: none;

      &:hover {
        background-color: #444;
      }
    `;
    return (
         
    <Button>
      {children}
    </Button>
  );
 }
  
