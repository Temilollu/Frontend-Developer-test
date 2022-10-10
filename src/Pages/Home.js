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
    }
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    setData([]);
    setPage(1);
  };

  const handleNext = () => {
    if (allData?.pagination?.next_url) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <HeroSection />

      <ArtCollection
        data={data}
        search={search}
        isLoading={isLoading}
        handleChange={handleChange}
        handleNext={handleNext}
        page={page}
      />
    </>
  );
};

export default Home;
