import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { nanoid } from "nanoid";

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
          id: "lalalie",
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
      id: nanoid(),
    };
    this.setState({ songs: [...this.state.songs, newSong] }, () => {
      localStorage.setItem("songs", JSON.stringify(this.state.songs));
    });
  };

  componentDidMount() {
    const songs = localStorage.getItem("songs");
    if (songs) this.setState({ songs: JSON.parse(songs) });
  }

  deleteSong = (id) => {
    const newSongsList = [...this.state.songs];
    const indexSongs = this.state.songs.findIndex((songi) => songi.id === id);
    newSongsList.splice(indexSongs, 1);
    this.setState({ songs: newSongsList }, () => {
      localStorage.setItem("songs", JSON.stringify(this.state.songs));
    });
  };

  render() {
    return (
      <div id="div-table">
        <h1>Song Saver</h1>
        <SongForm addSong={this.addSong} />
        <table id="table-style">
          <thead id="table-header">
            <tr>
              <th class="song-head">Song</th>
              <th class="song-head">Artist</th>
              <th class="song-head">Genre</th>
              <th class="song-head">Rating</th>
              <th class="song-head">Delete</th>
            </tr>
          </thead>
          <tbody>
            <SongList deleteSong={this.deleteSong} songs={this.state} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
