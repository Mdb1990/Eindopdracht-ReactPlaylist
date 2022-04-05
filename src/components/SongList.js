import React from "react";

const SongList = ({ songs, deleteSong }) => {
  const songLists = songs.songs;
  return songLists.map((song) => (
    <tr>
      <td class="song-data">{song.song}</td>
      <td class="song-data">{song.artist}</td>
      <td class="song-data">{song.genre}</td>
      <td class="song-data">{song.rating}</td>
      <td>
        <button type="delete" onClick={() => deleteSong(song.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
};

export default SongList;
