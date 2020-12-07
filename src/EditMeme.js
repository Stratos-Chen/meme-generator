import React, { Component } from "react";
const TEST_MEME = 1;

class EditMeme extends Component {
  constructor() {
    super();
    this.state = {
      top_text: "",
      bottom_text: "",
      img_url: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/memes/${TEST_MEME}`)
      .then((response) => response.json())
      .then((response) => {
        const meme = response;
        console.log(meme);
        this.setState({ ...meme });
      });
  }
  // handleChange(event) {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
  //   const randMemeImg = this.state.allMemeImgs[randNum].url;
  //   this.setState({ randomImg: randMemeImg });
  // }

  handleSave(event) {
    fetch("http://localhost:3000/api/memes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        img_url: this.state.randomImg,
      }),
    }).then((response) => console.log(response));
  }

  handleEdit(event) {
    console.log("edit");
    // this.route.params
    fetch(`http://localhost:3000/api/memes/${TEST_MEME}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        top_text: this.state.top_text,
        bottom_text: this.state.bottom_text,
        img_url: this.state.img_url,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="top_text"
            placeholder="Top Text"
            value={this.state.top_text}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottom_text"
            placeholder="Bottom Text"
            value={this.state.bottom_text}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleEdit}>Edit</button>

        <div className="meme">
          <img src={this.state.img_url} alt="" />
          <h2 className="top">{this.state.top_text}</h2>
          <h2 className="bottom">{this.state.bottom_text}</h2>
        </div>
      </div>
    );
  }
}

export default EditMeme;
