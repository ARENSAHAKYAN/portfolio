import React from "react";
import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt="" />
        GitHub repo
      </a>
    </div>
  );
};

export default BtnGitHub;
