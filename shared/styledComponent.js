"use client";
import styled from "styled-components";
import { MessageIcon } from "./icons/icons";

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
  gap: 20px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 60px;
  width: 200px;
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
    width: fit-content;
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
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  .button {
    position: absolute;
    right: 0;
    bottom: 20px;
  }
`;
export const DiscoverCards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  padding: 1rem;
`;
export const DiscoverCard = styled.div`
  color: white;
  font-weight: 600;
  flex-direction: column;
  border-radius: 20px;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .discoverDes {
    padding: 1rem;
  }
  .DiscoverSub {
    img {
      height: fit-content;
      margin-top: 10px;
    }
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: flex-start;
  }
  .DiscoverStats {
    p {
      color: #858584;
      span {
        color: white;
      }
    }
  }
`;
export const MushroomBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  img {
    background-size: cover;
    height: 640px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.gradientPrimary},
      transparent
    );
  }
  .subSection {
    z-index: 3;
    position: absolute;
    left: 10rem;
    display: flex;
    gap: 100px;
    align-items: center;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding-top: 20rem;
  img {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }
`;
export const ArtistButton = styled.button`
  display: flex;
  flex-direcrion: column;
  align-items: center;
  justify-content: space-around;
  border-style: none;
  background-color: ${(props) => props.theme.background};
  width: 150px;
  border-radius: 20px;
  p {
    font-weight: 600;
    font-size: normal;
    color: white;
  }
`;
export const ButtonTeriarty = styled.button`
  width: 200px;
  height: 50px;
  font-weight: 500;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  border-style: none;
  background-color: white;
`;
export const SecondColumn = styled.div`
  align-self: flex-end;
  margin-left: 10rem;
  width: 300px;
  height: fit-content;
  display: column;
  padding: 1rem;

  border-radius: 20px;
  color: white;
  background-color: rgba(59, 59, 59, 0.5);
`;
export const GetStarted = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  background-color: ${(props) => props.theme.background};
`;
export const GetStartedCards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  padding: 1rem;
`;
export const GetStartedCard = styled.div`
  color: white;
  font-weight: 600;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .Info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    p {
      padding-left: 2rem;
      line-height: 1.5em;
      font-style: none;
      font-weight: 200;
    }
  }
`;
export const SubscribeSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  position: relative;
  padding-bottom: 4rem;
`;
export const SubscribeCard = styled.div`
  height: 70%;
  width: 80%;
  padding: 1rem;
  margin-left: 8rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-content: center;
  color: white;
  .imageSection {
    background-size: contain;
  }
  .columnDiv {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-content: center;
  }
`;
export const FormContainer = styled.div`
  background-color: white;

  border-radius: 40px;
  form {
    display: flex;
    border-radius: 40px;

    flex-direction: row;
    justify-content: space-between;
  }
`;
export const EmailInput = styled.input`
  padding: 10px;
  border-style: none;
  border-radius: 40px;
`;
export const SubscribeButton = styled.button`
  background-color: ${(props) => props.theme.callToAction};
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-style: none;
  gap: 10px;
  width: 50%;
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  padding: 20px;
  transition: all 0.9s ease;

  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
    box-shadow: 2px 2px 4px ${(props) => props.theme.callToAction};
    cursor: pointer;
  }
`;

export const EmailForm = () => {
  return (
    <FormContainer>
      <form>
        <EmailInput type="email" placeholder="Enter your email here" />
        <SubscribeButton type="submit">
          <MessageIcon />
          Subscribe
        </SubscribeButton>
      </form>
    </FormContainer>
  );
};
export const Footer = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  width: 100%;
  height: 100%;
  p {
    color: white;
    position: relative;
  }
  .footerRow {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: center;
    gap: 100px;
    position: relative;
    hr {
      border: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-top: 1px solid white;
      width: 100%;
      margin: 0;
    }

    .footerColumn {
      display: flex;
      flex-direction: column;
      align-content: center;
      color: white;
      .footerIcons {
        flex-direction: row;
        gap: 5px;
      }
    }
  }
`;
