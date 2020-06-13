// Core modules:
import React from "react";
import styled from "styled-components";
import "../../theme/global.css";    // For styling

export interface FeatProps {
    imgSrc: string,
    imgAlt: string, /*header: string,*/
    desc: string
}    // Type definition for component.

/* NOTE: See if you can use PureComponent instead.
 You should go for React.PureComponent when you can satisfy any of the below conditions.

    State/Props should be an immutable object
    State/Props should not have a hierarchy
    You should call forceUpdate when data changes
 */

// Custom styled image component.
const FeatImage = styled.img`
    background: url(${props => props.src} || "nonexistent-link") no-repeat;    
;`

class SimpleFeatComp extends React.Component<FeatProps> { //TODO test if it works after global styling

    render() {
        return (
            <div className="featComp">
                <FeatImage className="FeatImage" src={this.props.imgSrc} alt={this.props.imgAlt}></FeatImage>
                <p className="FeatPara">{this.props.desc}</p>
            </div>
        );
    }
}

// Export so that other code can use this component:
export default SimpleFeatComp; // default is used so that we don't have to immediately define the class again.