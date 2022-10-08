import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ArtCollection from "../components/Home/ArtCollection/ArtCollection";
import HeroSection from "../components/Home/HeroSection/HeroSection";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { isLoading, data: allData } = useQuery(
    ["get-arts", { search, page }],
    async () => {
      try {
        const response = await axios.get(
          `https://api.artic.edu/api/v1/artworks?q=${search}&page=${page}`
        );
        return response?.data;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: (res) => {
        setData((prev) => [...prev, ...res?.data]);
      },
      keepPreviousData: true,
    }
  );

  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 500);
  //   };
  // };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setData([]);
  };

  const handleNext = () => {
    if (allData?.pagination?.next_url) {
      setPage((prev) => prev + 1);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const optimizedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      <HeroSection />

      <ArtCollection
        data={data}
        search={search}
        isLoading={isLoading}
        handleChange={handleChange}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Home;
