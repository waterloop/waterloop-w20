import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-left: 3%;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0px 30px;
  }
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 227px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Text = styled.p`
  margin-top: 14px !important;

  @media (max-width: 500px) {
    text-align: left;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 25px;
`;

type MyProps = { subteam: string; description: string; image: string };

class SubteamsOverview extends React.Component<MyProps> {
  render() {
    return (
      <Block>
        <Img src={this.props.image} alt="photo"></Img>
        <TextBlock>
          <h2>{this.props.subteam}</h2>
          <Text>{this.props.description}</Text>
        </TextBlock>
      </Block>
    );
  }
}

export default SubteamsOverview;
