"use client";
import { theme } from "../themes/theme";
import React from "react";
import { styled } from "styled-components";
import { Button } from "../shared/styledComponent";

const Navbar = () => {
  const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    background-color: ${theme.background};
  `;

  const NavbarLogo = styled.div`
    font-size: ${theme.textStyles.h5.fontSize};
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  `;

  const NavbarLinks = styled.ul`
    display: flex;
    gap: 1em;
    flex-direction: row;

    li {
      list-style: none;
      padding: 0.9rem;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white;
      padding: 0.5rem 0.5rem;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${theme.callToAction};
      }
    }
  `;

  const StyledSvg = ({ color }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 12.4502C6.55228 12.4502 7 12.8979 7 13.4502V26.0002H25V13.4502C25 12.8979 25.4477 12.4502 26 12.4502C26.5523 12.4502 27 12.8979 27 13.4502V26.0002C27 26.5306 26.7893 27.0393 26.4142 27.4144C26.0391 27.7895 25.5304 28.0002 25 28.0002H7C6.46957 28.0002 5.96086 27.7895 5.58579 27.4144C5.21071 27.0393 5 26.5306 5 26.0002V13.4502C5 12.8979 5.44772 12.4502 6 12.4502Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 5C3 4.44772 3.44772 4 4 4H28C28.5523 4 29 4.44772 29 5C29 5.55228 28.5523 6 28 6H4C3.44772 6 3 5.55228 3 5Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 7C4.55228 7 5 7.44772 5 8V10C5 10.7956 5.31607 11.5587 5.87868 12.1213C6.44129 12.6839 7.20435 13 8 13C8.79565 13 9.55871 12.6839 10.1213 12.1213C10.6839 11.5587 11 10.7956 11 10V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V10C13 11.3261 12.4732 12.5979 11.5355 13.5355C10.5979 14.4732 9.32608 15 8 15C6.67392 15 5.40215 14.4732 4.46447 13.5355C3.52678 12.5979 3 11.3261 3 10V8C3 7.44772 3.44772 7 4 7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 7C12.5523 7 13 7.44772 13 8V10C13 10.7956 13.3161 11.5587 13.8787 12.1213C14.4413 12.6839 15.2044 13 16 13C16.7956 13 17.5587 12.6839 18.1213 12.1213C18.6839 11.5587 19 10.7956 19 10V8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8V10C21 11.3261 20.4732 12.5979 19.5355 13.5355C18.5979 14.4732 17.3261 15 16 15C14.6739 15 13.4021 14.4732 12.4645 13.5355C11.5268 12.5979 11 11.3261 11 10V8C11 7.44772 11.4477 7 12 7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 7C20.5523 7 21 7.44772 21 8V10C21 10.7956 21.3161 11.5587 21.8787 12.1213C22.4413 12.6839 23.2044 13 24 13C24.7956 13 25.5587 12.6839 26.1213 12.1213C26.6839 11.5587 27 10.7956 27 10V8C27 7.44772 27.4477 7 28 7C28.5523 7 29 7.44772 29 8V10C29 11.3261 28.4732 12.5979 27.5355 13.5355C26.5979 14.4732 25.3261 15 24 15C22.6739 15 21.4021 14.4732 20.4645 13.5355C19.5268 12.5979 19 11.3261 19 10V8C19 7.44772 19.4477 7 20 7Z"
        fill={color}
      />
    </svg>
  );
  const StyledUserSvg = () => (
    <svg
      width="20"
      height="15"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5ZM7 12C7 7.02944 11.0294 3 16 3C20.9706 3 25 7.02944 25 12C25 16.9706 20.9706 21 16 21C11.0294 21 7 16.9706 7 12Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9999 20.999C13.7177 20.999 11.4758 21.5998 9.4994 22.741C7.52303 23.8822 5.8819 25.5235 4.74099 27.5001C4.4649 27.9784 3.85332 28.1423 3.375 27.8662C2.89668 27.5901 2.73275 26.9785 3.00885 26.5002C4.32528 24.2196 6.21889 22.3257 8.49932 21.009C10.7798 19.6922 13.3666 18.999 15.9999 18.999C18.6332 18.999 21.2201 19.6922 23.5005 21.009C25.781 22.3257 27.6746 24.2196 28.991 26.5002C29.2671 26.9785 29.1032 27.5901 28.6248 27.8662C28.1465 28.1423 27.535 27.9784 27.2589 27.5001C26.1179 25.5235 24.4768 23.8822 22.5004 22.741C20.5241 21.5998 18.2821 20.999 15.9999 20.999Z"
        fill="white"
      />
    </svg>
  );

  return (
    <NavbarContainer>
      <NavbarLogo>
        <StyledSvg color={theme.callToAction} />
        NFL Marketplace
      </NavbarLogo>
      <NavbarLinks>
        <li>
          <a>Marketplace</a>
        </li>
        <li>
          <a>Rankings</a>
        </li>
        <li>
          <a>Connect a wallet</a>
        </li>
        <Button>
          <StyledUserSvg />
          Sign up
        </Button>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
