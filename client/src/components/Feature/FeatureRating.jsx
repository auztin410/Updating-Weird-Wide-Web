import React, { Component } from "react";

class FeatureRating extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <stong><p>Weirdness Score</p></stong>
                    <p>{this.props.weirdness}</p>
                </div>
            </div>
        );
    }
}

export default FeatureRating;