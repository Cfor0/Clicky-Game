import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import images from "./images.json"


class App extends Component {
  state = {
    images
  }
  switchPictures = id => {
    const images = this.state.images.filter(image => image.id !== id);
    this.setState({ images })
  }
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.images.map(image => (
          <ClickCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}

      </Wrapper>

    )
  }
}

export default App;
