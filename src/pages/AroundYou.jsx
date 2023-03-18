import { useState, useEffect } from "react";
import axios  from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  

  useEffect(() => {
    axios.get(
      "https://geo.ipify.org/api/v2/country?apiKey=at_CS4NAuzDIz9Clp4oyAJEJ0daE89on"
    )
    .then((res) => setCountry(res?.data?.location?.country))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
    //at_CS4NAuzDIz9Clp4oyAJEJ0daE89on
  },[country]);
};

export default AroundYou;
