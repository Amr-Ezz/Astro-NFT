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
export const BodyText = styled.body`
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
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 60px;
  color: white;
  border-radius: 20px;
`;
