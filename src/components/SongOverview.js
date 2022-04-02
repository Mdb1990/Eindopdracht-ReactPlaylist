import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          song: "send it",
          artist: "Maryscoovy",
          genre: "Stonerrock",
          rating: "5",
        },
      ],
    };
  }

  addSong = (song) => {
    const newSong = {
      song: song.song,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    this.setState({ songs: [...this.state.songs, newSong] });
  };

  render() {
    return (
      <div id="div-table">
        <SongForm addSong={this.addSong} />
        <table id="table-style" style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </thead>
          <tbody>
            <SongList songs={this.state} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
