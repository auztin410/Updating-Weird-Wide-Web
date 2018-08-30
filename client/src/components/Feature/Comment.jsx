import React, { Component } from "react";

class Tags extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://via.placeholder.com/100x100" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* <p>{this.props.user}</p>
                                <p>{this.props.comment}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;