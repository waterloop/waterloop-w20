import React from "react";
import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import PositionPosting from "../components/recruitment_form_component/PositionPosting"

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <FooterComponent />;
        </Router>

        <PositionPosting
          role ="Goose Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Pain Tolerance"
        ></PositionPosting>
        <PositionPosting
          role ="Goose Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Pain Tolerance"
        ></PositionPosting>
        <PositionPosting
          role ="Goose Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Pain Tolerance"
        ></PositionPosting>
      </div>
    );
  }
}

export default MainPage;
