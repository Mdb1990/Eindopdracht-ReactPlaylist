import React from "react";

const SongList = (props) => {
  const songLists = props.songs.songs;
  return songLists.map((song) => (
    <tr className="song-header">
      <td className="song-row__item">{song.song}</td>
      <td className="song-row__item">{song.artist}</td>
      <td className="song-row__item">{song.genre}</td>
      <td className="song-row__item">{song.rating}</td>
    </tr>
  ));
};

export default SongList;
