import Content from "@/components/Content";

import Hero from "@/components/Hero";

import Insights from "@/components/Insights";

const Home = () => {
  return (
    <div className="min-h-screen w-screen">
      <Hero />
      <Content />
      <Insights />
    </div>
  );
};

export default Home;
