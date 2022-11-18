import VideoHero from "../../assets/hero.mp4";
import Song from "../../assets/Burn_It_Down.mp3";
import Links from "../Links/Links";
import "./Hero.css";
import React, { Component } from "react";

class Hero extends Component {
  state = {
    audio: new Audio(Song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <>
        <div className="heroContainer">
          <video loop src={VideoHero} className="videoHero" autoPlay muted />
          <div className="heroDescription">
            <a className="play" onClick={this.playPause}>
              {this.state.isPlaying ? "Pause song!" : "Play song!"}
            </a>
            <h1>Kooks by Terry</h1>
            <p>
              What’s up, these are the kooks. Born and raised in El Porto,
              they’ve been surfing the world-famous break Shit...{" "}
              <a href="#about">Read more</a>
            </p>
            <Links />
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
