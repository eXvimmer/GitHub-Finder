import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  // console.log(props);
  // const { avatar_url, html_url, login } = props.user;
  return (
    <div className="card text-center">
      <img
        alt={login}
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a
          className="btn btn-dark btn-sm my-1"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
