import React from "react";
import worker from "../../assets/worker.jpg";

const Home = () => {
  return (
    <section className="top-0">
      <div className="container mx-auto w-full xl:max-w-[1260px] lg:max-w-[1024px] px-8 ">
        <div className="py-16 flex flex-col lg:flex-row   text-left items-center">
          <div className="w-full flex flex-col">
            <h1 className="text-3xl leading-[60px]  lg:text-[48px]  text-slate-700 font-bold w-full">
              First project completed successfully.
            </h1>
            <p className="max-w-[450px] text-sm mt-6 font-normal     inline-block  font-sans lg:mt-4 lg:text-xl text-slate-500 ">
              It served as a springboard for future initiatives, instilling
              confidence and enthusiasm among team members. The successful
              completion of the project has set a high standard for future
              endeavors, ensuring a positive trajectory for our organization.
            </p>
            <div className="w-full mt-8 text-left">
              <button className="transition ease-in-out delay-150 lg:text-lg text:md font-sans font-normal lg:font-bold bg-rose-500 lg:tracking-wide py-1 px-4 lg:py-3 lg:px-8 inline-block text-white border-2 border-solid cursor-pointer hover:bg-transparent hover:text-rose-500 rounded-full border-rose-500">
                Read more{" "}
              </button>
            </div>
          </div>
          <figure className="lg:min-w-[600px] box-border mt-[50px] flex items-center justify-center">
            <img src={worker} className="max-w-full box-border " />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Home;
