// components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-bold">Welcome to Horloo Hub</h1>

      <div className="w-4/5 grid grid-cols-3 gap-4">
        <a
          className="rounded-lg border border-white overflow-hidden transform transition-transform hover:scale-105 hover:border-orange-500"
          href="https://youtu.be/hIlShR0Wofc?si=YuKDjBkB3vv9meV6"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.ytimg.com/vi/hIlShR0Wofc/hqdefault.jpg"
            alt="Video Thumbnail"
            className="rounded-lg"
          />
        </a>
        <a
          className="rounded-lg border border-white overflow-hidden transform transition-transform hover:scale-105 hover:border-orange-500"
          href="https://youtu.be/hIlShR0Wofc?si=YuKDjBkB3vv9meV6"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.ytimg.com/vi/hIlShR0Wofc/hqdefault.jpg"
            alt="Video Thumbnail"
            className="rounded-lg"
          />
        </a>
        <a
          className="rounded-lg border border-white overflow-hidden transform transition-transform hover:scale-105 hover:border-orange-500"
          href="https://youtu.be/hIlShR0Wofc?si=YuKDjBkB3vv9meV6"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.ytimg.com/vi/hIlShR0Wofc/hqdefault.jpg"
            alt="Video Thumbnail"
            className="rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
