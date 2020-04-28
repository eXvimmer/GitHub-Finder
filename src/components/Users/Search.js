import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (!text.length) {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <input
          onChange={onInputChange}
          type="text"
          name="text"
          value={text}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {!!githubContext.users.length && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
