import React from "react";
import Posts from "@/components/shared/Posts";
import TopPost from "@/components/shared/TopPost";

 const page = () => {
  return (
    <div
      className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1
   w-[95%] max-w-[1450px] mx-auto overflow-y-hidden h-fit mt-10 max-lg:space-y-7 "
    >
      <Posts />
      <TopPost/>
    </div>
  );
};

export default page;