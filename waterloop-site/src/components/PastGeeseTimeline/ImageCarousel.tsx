import React from "react";

import { useSwipeable } from "react-swipeable";

import styled from "styled-components";
import useGeeseImages from "./hooks/geese-images";

const Name = styled.div`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  color: #c4c4c4;

  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const Description = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: justify;

  color: #010101;
`;

const Arrow = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const ArrowMobile = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: flex;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

const Image = styled.img`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 90%;
  @media only screen and (max-width: 900px) {
    width: 100%;
    box-shadow: none;
  }
`;

const ImageCarousel: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const { image, name, desc, cycleLeft, cycleRight } = useGeeseImages();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: cycleLeft,
    onSwipedRight: cycleRight,
  });

  return (
    <div>
      <div style={containerStyles}>
        <Arrow className="material-icons" onClick={cycleLeft}>
          keyboard_arrow_left
        </Arrow>
        <Image {...swipeHandlers} src={image} alt="Goose Pick" />
        <Arrow className="material-icons" onClick={cycleRight}>
          keyboard_arrow_right
        </Arrow>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Name>{name}</Name>
        <Description>{desc}</Description>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowMobile className="material-icons" onClick={cycleLeft}>
            keyboard_arrow_left
          </ArrowMobile>
          <ArrowMobile className="material-icons" onClick={cycleRight}>
            keyboard_arrow_right
          </ArrowMobile>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
