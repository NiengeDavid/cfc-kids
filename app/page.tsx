import type { NextPage } from "next";
import type { Metadata } from "next";
import HomePage from "@/containers/homePage";

export const metadata: Metadata = {
  title: "Home | CFC Kids",
  description: "Shining God's light to the world.",
};

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <HomePage />
    </div>
  );
};

export default Home;
