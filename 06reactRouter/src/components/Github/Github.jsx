import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const myData = useLoaderData();
  console.log(myData);
  return (
    <div className="m-4 px-4 py-4 bg-gray-600 text-white">
      <h1 className="text-xl mb-3">Github Followers : {myData.followers}</h1>
      <img
        src={myData.avatar_url}
        alt="git Picture"
        width={300}
        className="align-center rounded-xl border-2"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/DolenDeori");
  return response;
};
