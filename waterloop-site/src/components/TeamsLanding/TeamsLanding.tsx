import React from "react";
import "../../theme/global.scss";

type MyProps = { subteam: string; description: string; image: string };

class SubteamsOverview extends React.Component<MyProps> {
  //TODO test if it works after global styling
  render() {
    return (
      <div className="Block-Teams">
        <img className="Img-Teams" src={this.props.image} alt="teams"></img>
        <div className="TextBlock-Teams">
          <h2 className="Header-Teams">{this.props.subteam}</h2>
          <p className="Text-Teams">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SubteamsOverview;
