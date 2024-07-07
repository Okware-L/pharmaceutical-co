import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Insights from "@/components/Insights";

const Home = ({ searchParams }: SearchParamProps) => {
  //const isAdmin = searchParams?.admin === "true";

  return (
    <div className="min-h-screen w-screen">
      <Hero />
      <Content />
      <Insights />
    </div>
  );
};

export default Home;
