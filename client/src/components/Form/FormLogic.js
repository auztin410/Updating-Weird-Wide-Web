import React, { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import API from "../../utils/API";



class Form extends Component {
    state = {
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
        weirdness: "",
        nsfw: false,
        comments: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        
        var tag = this.state.tags.split(",");
        
        API.saveItem({
            title: this.state.title,
            category: this.state.category,
            medium: this.state.medium,
            tags: tag,
            url: this.state.url,
            image: this.state.image,
            description: this.state.description,
            nsfw: this.state.nsfw
        })
        .then(res => this.handleFormClear())
        .catch(err => console.log(err));
        
    };

    handleFormClear = () => {
        this.setState({
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
        weirdness: "",
        nsfw: false,
        comments: ""
        })
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            medium: changeEvent.target.value
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

    };


    render() {
        return (
            <div className="www-content">
            <h2> Found something weird?</h2>
                <h1>
                    Submit it!
                </h1>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <Input
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        name="category"
                        placeholder="Category (required)"
                    />
                    <div>
                        <br />
                        <h6>
                                Choose the medium your weird contribution is.
                        </h6>
                        <p>
                            
                            <br />
                            
                                <input id="article"value="Article" className="with-gap" name="group1" type="radio" onChange={this.handleOptionChange} />
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
                    <Input
                        value={this.state.tags}
                        onChange={this.handleInputChange}
                        name="tags"
                        placeholder="Submit your tags here! Separate a new tag with a comma."
                    />
                    <Input
                        value={this.state.url}
                        onChange={this.handleInputChange}
                        name="url"
                        placeholder="Place your url link here."
                    />
                    <Input
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        name="image"
                        placeholder="Place your image link here."
                    />
                    <Input
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        name="description"
                        placeholder="Give a short description of what your weird contribution is."
                    />
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
                        disabled={!(this.state.title && this.state.category && this.state.medium && this.state.tags && this.state.url && this.state.image && this.state.description)}
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default Form;