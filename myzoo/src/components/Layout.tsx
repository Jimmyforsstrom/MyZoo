import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";


interface IStyledLi {
  color: string;
}

interface IstyledH1 {
    color : string; }

export const StyledHeader1 = styled.h1`
   color: ${(props: IstyledH1) => props.color || 'cadetblue'};
    `;

export const StyledLayoutDiv = styled.div`
  text-align: center;
  border-top: 0.5 solid black;
  width: 90%;
  background-color: dimgrey;
  color: bisque;
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledImg = styled.img`
  border-radius: 8px;
  max-width: 450px;
  max-height: 450px;
  padding-bottom: 1rem;
  border: 1 solid cadetblue;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 45%;
  padding-right: 1rem;
  background-color: cadetblue;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;
const StyledLi = styled.li`
  color: ${(props: IStyledLi) => props.color};
  padding: 0.5rem;
`;

export const Layout = () => {
  return (
    <>
      {" "}
      <StyledLayoutDiv>
        <StyledHeader>
          <StyledHeader1 color='red'>Central Park Zoo</StyledHeader1>
            <StyledUl>
              <StyledLi color="blue">
                <Link to="/">hem</Link>
              </StyledLi>
              <StyledLi color="red">
                <Link to="/Animals">animals</Link>
              </StyledLi>
            </StyledUl>
           </StyledHeader>
            <Outlet />{" "} 
      </StyledLayoutDiv>
    </>
  );
};

