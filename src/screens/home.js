import React, { useEffect, useState } from "react";
import axios from "axios";
//import md5 from "md5";
//import privateKey from "../.secret";
import Pagination from "../components/pagination";

const Home = (props) => {
  const valueOffset = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [topList, setTopList] = useState([]);
  useEffect(() => {
    //const publicKey = "82e4a73948d1fba1c752babfff3bdd36";
    //const timeStamp = new Date().getMilliseconds();
    //const hash = md5(`${timeStamp}${privateKey}${publicKey}`);
    const generatedUrl = "https://api.jikan.moe/v3/top/anime";
    //const generatedUrl = "https://gateway.marvel.com/v1/public/characters";
    //faire le call api
    axios({
      method: "GET",
      url: generatedUrl,
      params: {
        // ts: timeStamp,
        // apikey: publicKey,
        // hash: hash,
        offset: valueOffset * currentPage,
      },
    })
      .then((res) => {
        console.log("res", res);
        setTopList(res.data.top);
        setTotal(res.data.data.total);
      })
      .catch((err) => {
        //setErrorMessage("Une erreur est survenue");
        console.log(err);
      });
  }, [currentPage]);
  return (
    <div>
      {topList.map((top) => (
        <p key={top.mal_id}>{top.title}</p>
      ))}
      <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
      ></Pagination>
    </div>
  );
};

export default Home;
