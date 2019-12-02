import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import images from "./images.json"


class App extends Component {
  state = {
    count: 0,
    highscore: 0,
    images
  }
  // create function to randomly swtich pictures into new positions
  click = id => {
    this.state.images.map(friend => {
      if (friend.id === id) {
        if (friend.count < 1) {
          friend.count++;
          this.setState({ count: this.state.count + 1 });
        } else {
          if (this.state.count > this.state.highscore) {
            this.setState({ highscore: this.state.count })
          }
          (this.setState({ count: 0 }))
          this.state.images.map(friend => friend.count = 0)
        }
      }
    })
    this.shuffle(this.state.images)
  }

  shuffle = (images) => {
    var currentIndex = images.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
    this.setState(images);
  }
  render() {
    return (
      <Wrapper>
        <Title
          count={this.state.count}
          highscore={this.state.highscore}
        >
          Clicky Game
        </Title>
        <div className="card-columns">
          {this.state.images.map(image => (

            <ClickCard
              id={image.id}
              key={image.id}
              image={image.image}
              click={this.click}
            />

          ))}
        </div>
      </Wrapper>

    )
  }
}

export default App;
