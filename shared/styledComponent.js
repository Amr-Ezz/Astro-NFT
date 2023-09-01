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
export const ButtonSecondary = styled.button`
  background-color: transparent;
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
  box-shadow: 2px 2px 4px ${(props) => props.theme.callToAction};
  transition: all 0.9s ease;
  svg path {
    fill: ${(props) => props.theme.callToAction};
    transition: all 0.3s ease;
  }

  &:hover {
    background-color ${(props) => props.theme.callToAction};
    
    cursor: pointer;
    color: ${(props) => props.theme.callToAction};
    svg path {
      fill: white;
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
export const TrendingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  background-color: ${(props) => props.theme.background};
  padding: 4rem;
`;
export const TrendingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  > img.big {
    grid-column: 1 / span 3;
    grid-row: 1;
  }
 
  > img:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }
  > img:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

   > div.imagesNo {
    background-color: ${(props) => props.theme.callToAction};
    border-radius: 20px;
    max-width: fit-content;
    grid-column: 3;
    grid-row: 2;
   
    p {
      font-size: 1.9rem;
      font-weight: 600;
      color: white;
    }
  }
    > div.textBox {

      grid-column: 1 / span 3;
      grid-row: 3;
      div.artistSection {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: nowrap;
        align-items: flex-start;
        img {
          width: 20px;
          border-radius: 100%;
          margin: 0;
        }
        p {
          color: white;
          margin: 0;
        }
      }
    }
  }
`;
export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
`;
export const TopCreators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  color: white;
  padding: 4rem;
  background-color: ${(props) => props.theme.background};
`;
export const CreatorsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  padding-top: 2rem;
`;
export const CreatorsCard = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 180px;
    padding: 1rem;
  }
  p {
    color: #858584;
    font-weight: 300;
    span {
      color: white;
    }
  }
  div {
    position: absolute;
    width: 40px;
    left: 10px;
    top: 5px;

    border-radius: 100%;
    color: white;
    background-color: ${(props) => props.theme.background};
    p {
      color: white;
      padding-left: 15px;
    }
  }
`;
export const CategoriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.background};
  padding: 4rem;
`;
export const CategoriesCards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;
export const CategoriesCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: 20px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  img {
    width: 100%;
    height: auto;
    filter: blur(10px);
  }
  p {
    color: white;
    font-weight: Bold;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundSecondary};
    z-index: 2;
    border-radius: 20px;
  }
  .icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const DiscoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 4rem;
  background-color: ${(props) => props.theme.background};
`;
export const DiscoverHeading = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  .button {
    justify-self: flex-end;
  }
`;
