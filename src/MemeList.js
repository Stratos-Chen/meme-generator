import React, { Component } from "react";

class MemeList extends Component {
  constructor() {
    super();
    this.state = {
      top_text: "",
      bottom_text: "",
      img_url: "",
      createdMemes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/memes")
      .then((response) => response.json())
      .then((response) => {
        const generatedmemes = response;
        console.log("List of Created Memes:", generatedmemes);
        this.setState({ createdMemes: generatedmemes });
      });
  }

  render() {
    // const text = this.state.meme;
    return (
      <div>
        <header>List of Created Memes</header>
        {this.state.createdMemes.map((meme) => (
          <div className="meme" key={meme.id}>
            <h2 className="top">{meme.top_text}</h2>
            <h2 className="bottom">{meme.bottom_text}</h2>
            <img src={meme.img_url} alt={meme.img_url} />
          </div>
        ))}
      </div>
    );
  }
}

export default MemeList;
