import React, { Component } from "react";
import API from "../../utils/API";
import Feature from "../Feature";
import Footer from "../Footer";

class MainPage extends Component {
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

    loadItems = (res) => {
        let array = res.data;
       let random = array[Math.floor(Math.random()*array.length)];
        console.log(random);
        this.setState({
            title: random.title ? random.title: "",
            image: random.image,
            category: random.category,
            medium: random.medium,
            nsfw: random.nsfw,
            url: random.url,
            description: random.description,
            weirdness: random.weirdness,
            comments: random.comments,
            tags: random.tags
     });
    };

    handleRandom = () => {
    API.randomItem({})
    .then(res => this.loadItems(res));
    
    };

    componentDidMount() {
        console.log("Testing randomize");
        this.handleRandom();

    }
    render() {
        return (
            <div>
                <Feature
                title={this.state.title}
                image={this.state.image}
                category={this.state.category}
                medium={this.state.medium}
                nsfw={this.state.nsfw}
                url={this.state.url[0]}
                description={this.state.description}
                weirdness={this.state.weirdness}
                comments={this.state.comments}
                tags={this.state.tags}
                 />
                <Footer/>
            </div>
        );
    }
}

export default MainPage;