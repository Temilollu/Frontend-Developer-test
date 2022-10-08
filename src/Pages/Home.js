import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ArtCollection from "../components/Home/ArtCollection/ArtCollection";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const Home = () => {
  const { isLoading, error, data } = useQuery(
    ["get-payment-links"],
    async () => {
      try {
        const response = await axios.get(
          "https://api.artic.edu/api/v1/artworks"
        );
        return response?.data?.data;
      } catch (error) {
        throw error;
      }
    }
  );

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div>
      <HeroSection />
      {isLoading ? <LoadingSpinner /> : <ArtCollection data={data} />}
    </div>
  );
};

export default Home;
