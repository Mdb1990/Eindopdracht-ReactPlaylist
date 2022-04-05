import React, { useState } from "react";

const SongForm = (props) => {
  const [formAdd, setformAdd] = useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
    id: "",
  });

  const onChangeForm = (e) => {
    setformAdd({ ...formAdd, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.addSong(formAdd);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label>Song</label>
        <input
          type="text"
          name="song"
          value={formAdd.song}
          onChange={onChangeForm}
        ></input>
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          value={formAdd.artist}
          onChange={onChangeForm}
        ></input>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={formAdd.genre}
          onChange={onChangeForm}
        ></input>
        <label>Rating</label>
        <select
          onChange={(e) => {
            const selectedRating = e.target.value;
            setformAdd({ ...formAdd, rating: selectedRating });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SongForm;
