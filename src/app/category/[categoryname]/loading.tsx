import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      {" "}
      <span className="loading loading-spinner loading-lg text-warning"></span>{" "}
    </div>
  );
};

export default LoadingPage;
