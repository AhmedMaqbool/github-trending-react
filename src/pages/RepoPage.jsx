import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import RepoInfo from "../components/RepoInfo/RepoInfo";
import "../pages/RepoPage.css";

function RepoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-basin-62556.herokuapp.com/repo")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <Header value="See what the GitHub community is most excited about today" />
      <NavBar value="true" />
      {data.map((val, index) => (
        <RepoInfo key={index} value={val} />
      ))}
    </div>
  );
}

export default RepoPage;
