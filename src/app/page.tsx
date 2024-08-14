import Image from "next/image";
import Hero from "@/components/shared/Hero";
import TopPost from "@/components/shared/TopPost";
import LatestPost from "@/components/shared/LatestPost";



export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 
   w-[95%] mx-auto max-w-[1450px] overflow-hidden h-fit mt-10
   
   ">

        <LatestPost />
        <TopPost />

      </div>

    </>
  );
}
