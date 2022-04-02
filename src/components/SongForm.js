import React, { useState } from "react";

const SongForm = (props) => {
  const [formAdd, setformAdd] = useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
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
        <input
          type="text"
          name="song"
          value={formAdd.song}
          onChange={onChangeForm}
        ></input>
        <input
          type="text"
          name="artist"
          value={formAdd.artist}
          onChange={onChangeForm}
        ></input>
        <input
          type="text"
          name="genre"
          value={formAdd.genre}
          onChange={onChangeForm}
        ></input>
        <input
          type="text"
          name="rating"
          value={formAdd.rating}
          onChange={onChangeForm}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SongForm;
