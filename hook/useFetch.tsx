import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "44e85953bamshaf63e579a46fc03p12450fjsn2ce58ea340cc",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};
