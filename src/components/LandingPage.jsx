import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-6">
      <p>Ini Landing Page</p>

      <div>
        <Link
          className="px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white transition-all duration-150"
          to="/movies"
        >
          Search Movies
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
