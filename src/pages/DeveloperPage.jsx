import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import DevInfo from "../components/DevInfo/DevInfo";

function DeveloperPage() {
  const [devData, setDevData] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-basin-62556.herokuapp.com/developers")
      .then((res) => res.json())
      .then((data) => setDevData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Header value="These are the developers building the hot tools today" />
      <NavBar value="false" />
      {devData.map((value, index) => (
        <DevInfo value={value} key={index} />
      ))}
    </div>
  );
}

export default DeveloperPage;
