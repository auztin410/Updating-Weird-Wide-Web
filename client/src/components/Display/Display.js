import React, { Component } from "react";
import API from "../../utils/API";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { Range } from "../Form/Range";
import { Card } from "../Display/Card";
import { Image } from "../Display/Image";
import { Text } from "../Display/Text";
import { Link } from "../Display/Link";
import { Container } from "../Display/Container";

class Display extends Component {
    
    state = {
        items: [],
        user: "",
        userId: "",
        weirdScore: 0,
        loggedIn: false,
        title: "",
        category: "",
        medium: "",
        tags: "",
        url: "",
        image: "",
        description: "",
        exposure: "",
        weirdness: 0,
        nsfw: false,
        comments: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleToggleChange = (changeEvent) => {

        if (this.state.nsfw === false) {
            this.setState({
                nsfw: true
            });
        }
        else if (this.state.nsfw === true) {
            this.setState({
                nsfw: false
            });
        }
        else{
            this.setState({
                nsfw: false
            });
        }

    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            medium: changeEvent.target.value
        });
    };

    handleRangeChange = (changeEvent) => {
        this.setState({
            weirdness: changeEvent.target.value
        });
    };

    loadItems = (res) => {
        this.setState({
            items: res.data, title: "", category: "", medium: "", nsfw: "", url: "", description: "", weirdness: "", comments: ""
        });
        this.handleRadioButtonClear();
        
    };

    handleSubmit = event => {
        event.preventDefault();
        this.handleClearArray();
        API.searchItems({
            medium: this.state.medium,
            weirdness: this.state.weirdness,
            nsfw: this.state.nsfw
        })
            .then(res => this.loadItems(res));

    };


    handleClearArray = () => {
        this.setState({
            items: []
        });
    };

    handleRadioButtonClear = () => {
        document.getElementById("article").checked = false;
        document.getElementById("video").checked = false;
        document.getElementById("audio").checked = false;
        document.getElementById("video_game").checked = false;
        document.getElementById("art").checked = false;
        document.getElementById("0").checked = false;
        document.getElementById("1").checked = false;
        document.getElementById("2").checked = false;
        document.getElementById("3").checked = false;
        document.getElementById("4").checked = false;
        document.getElementById("5").checked = false;
        document.getElementById("search-form").reset();
        this.setState({
            nsfw: false
        });
    }
    



    render() {
        return (
            <div>
                <div class="www-content">
                    <form id="search-form">
                        <div>

                            <h1>Search the weird side of the web</h1>
                            <br />
                            <h6>
                                Choose the medium you'd like to see.
                        </h6>
                            <p>

                                <br />

                                <input id="article" value="Article" className="with-gap" name="group1" type="radio" onChange={this.handleOptionChange} />
                                <label for="article" >Article</label>

                                {" "}

                                <input id="video" value="Video" className="with-gap" name="group1" type="radio" value="Video" onChange={this.handleOptionChange} />
                                <label for="video" >Video</label>

                                {" "}

                                <input id="audio" value="Audio" className="with-gap" name="group1" type="radio" value="Audio" onChange={this.handleOptionChange} />
                                <label for="audio" >Audio</label>

                                {" "}

                                <input id="video_game" value="Video game" className="with-gap" name="group1" type="radio" value="Video Game" onChange={this.handleOptionChange} />
                                <label for="video_game">Video game</label>

                                {" "}

                                <input id="art" value="Art" className="with-gap" name="group1" type="radio" value="Art" onChange={this.handleOptionChange} />
                                <label for="art">Art</label>

                                {" "}

                                <input id="website" value="Website" className="with-gap" name="group1" type="radio" value="Website" onChange={this.handleOptionChange} />
                                <label for="website">Website</label>
                            </p>
                        </div>
                        <p>
                            <br />
                            <h6>
                                Choose how weird! 1 is a little weird, and 5 is melt-your-eyes-out weird.
                            </h6>
                            <br />

                            <input id="0" value="0" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="0" >0</label>

                            {" "}

                            <input id="1" value="1" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="1" >1</label>

                            {" "}

                            <input id="2" value="2" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="2" >2</label>

                            {" "}

                            <input id="3" value="3" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="3" >3</label>

                            {" "}

                            <input id="4" value="4" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="4" >4</label>

                            {" "}

                            <input id="5" value="5" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                            <label for="5" >5</label>

                            {" "}
                        </p>
                        <div className="switch">
                            <label onChange={this.handleToggleChange}>
                                SFW
                    <input type="checkbox" />
                                <span className="lever"></span>
                                NSFW
                    </label>
                        </div>
                        <br />
                        <Button
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>

                {this.state.items.length ? (
                    <Card>
                        {this.state.items.map(item => (
                            <Container key={item.title}>
                                <div className="search-thumbnail">
                                    <img className="www-thumbnail" src={item.image} value={item.title} />
                                </div>
                                <div className="search-info">
                                    <h5>
                                        {item.title}
                                    </h5>
                                    <h3>Link:</h3>
                                    <a href={item.url} target="_blank">
                                        {item.url}
                                    </a>
                                    <p>
                                        <h3>Author:</h3> {item.author}
                                    </p>
                                    <p>
                                        <h3>Category:</h3> {item.category}
                                    </p>
                                    <p>
                                        <h3>Medium:</h3> {item.medium}
                                    </p>
                                    <h3>Description:</h3>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </Container>
                        ))}
                    </Card>
                ) : (
                        <h5>No Result Found (Yet)</h5>
                    )}


            </div>
        );
    }
}

export default Display;