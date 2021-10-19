import React from "react";
import "../DevInfo/DevInfo.css";
import { FlameIcon, RepoIcon } from "@primer/octicons-react";

function DevInfo(props) {
  const { rank, username, name, url, avatar } = props.value;
  const { repositoryName, description } = props.value.popularRepository;

  return (
    <div className="dev-box">
      <div className="dev-info">
        <div>
          <span>{rank}</span>
        </div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <img
              className="avatar"
              src={avatar}
              width="50"
              height="50"
              alt="avatar"
            />
          </a>
        </div>
        <div className="name-box">
          <h3 className="dev-name">
            <a className="dev-name" href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </h3>
          <span>
            <a
              className="dev-username"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {username}
            </a>
          </span>
        </div>
      </div>
      <div className="dev-stats">
        <ul>
          <li>
            <FlameIcon className="flame" size={16} />
            <span>Popular Repo</span>
          </li>
          <li>
            <RepoIcon className="repo-icon" size={16} />
            <a
              href={props.value.popularRepository.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="repo-name">{repositoryName}</span>
            </a>
          </li>
          <li>
            <span>{description}</span>
          </li>
        </ul>
      </div>

      <div className="follow-button">
        <button>Follow</button>
      </div>
    </div>
  );
}

export default DevInfo;
