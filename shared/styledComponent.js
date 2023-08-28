"use client";
import styled from "styled-components";

export const gradientDiv = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.gradientPrimary},
    ${(props) => props.theme.gradientSecondary}
  );
`;
export const H1 = styled.h1`
  font-size: ${(props) => props.theme.textStyles.h1.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h1.fontWeight};
  color: ${(props) => props.theme.textStyles.h1.color};
  font-family: ${(props) => props.theme.textStyles.h1.fontFamily};
`;
export const H2 = styled.h2`
  font-size: ${(props) => props.theme.textStyles.h2.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h2.fontWeight};
  color: ${(props) => props.theme.textStyles.h2.color};
  font-family: ${(props) => props.theme.textStyles.h2.fontFamily};
`;
export const H3 = styled.h3`
  font-size: ${(props) => props.theme.textStyles.h3.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h3.fontWeight};
  color: ${(props) => props.theme.textStyles.h3.color};
  font-family: ${(props) => props.theme.textStyles.h3.fontFamily};
`;
export const H4 = styled.h4`
  font-size: ${(props) => props.theme.textStyles.h4.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h4.fontWeight};
  color: ${(props) => props.theme.textStyles.h4.color};
  font-family: ${(props) => props.theme.textStyles.h4.fontFamily};
`;
export const H5 = styled.h5`
  font-size: ${(props) => props.theme.textStyles.h5.fontSize};
  font-weight: ${(props) => props.theme.textStyles.h5.fontWeight};
  color: ${(props) => props.theme.textStyles.h5.color};
  font-family: ${(props) => props.theme.textStyles.h5.fontFamily};
`;
export const BodyText = styled.p`
  font-size: ${(props) => props.theme.textStyles.body.fontSize};
  font-weight: ${(props) => props.theme.textStyles.body.fontWeight};
  color: ${(props) => props.theme.textStyles.body.color};
  font-family: ${(props) => props.theme.textStyles.body.fontFamily};
`;
export const caption = styled.caption`
  font-size: ${(props) => props.theme.textStyles.caption.fontSize};
  font-weight: ${(props) => props.theme.textStyles.caption.fontWeight};
  color: ${(props) => props.theme.textStyles.caption.color};
  font-family: ${(props) => props.theme.textStyles.caption.fontFamily};
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.callToAction};
  font-size: ${(props) => props.theme.textStyles.body.fontSize};
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 60px;
  color: white;
  border-radius: 20px;
  transition: all 0.9s ease;
  svg path {
    fill: white;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.callToAction};
    cursor: pointer;
    svg path {
      fill: ${(props) => props.theme.callToAction};
    }
  }
`;
export const HeroSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
`;

export const Captiondiv = styled.div`
  display: flex;
  padding: 70px 70px;
  flex-direction: column;
  gap: 15px;
  color: white;
`;

export const Carddiv = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 0.5rem;
  img {
    object-fit: contain;
  }
  div {
    background-color: ${(props) => props.theme.backgroundSecondary};
    width: 65.3%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
      padding: 0.5rem;
      font-weight: bold;
    }
    span {
      padding: 0.3rem;
    }
  }
`;

export const ReachDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const SubReachDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  p {
    font-weight: normal;
    padding-top: 0.5rem;
  }
`;

export const StyledSvg = styled.svg`
  path {
    fill: white;
    transition: fill 0.3s ease;
  }
  &:hover path {
    fill: ${(props) => props.theme.callToAction};
  }
`;
