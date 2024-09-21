import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
  //   const [followers, setFollowers] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/alpha25742/followers")
  //       .then((x) => x.json())
  //       .then((x) => setFollowers(x));
  //   }, []);
  const followers = useLoaderData();
  return (
    <>
      <p>github followers: {followers.length}</p>
    </>
  );
}
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/alpha25742/followers"
  );
  return response.json();
};
