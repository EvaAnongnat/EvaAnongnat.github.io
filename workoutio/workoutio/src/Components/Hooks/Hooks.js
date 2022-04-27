import { useEffect, useState } from "react";
import { getRecords } from "../Api/Api";

export const useUserRecords = () => {
  const [posts, setPosts] = useState([]);

  const refreshRecords = async () => {
    const response = await getRecords();
    console.log(response.status);
    console.log(response.data);

    if (response.status < 300) {
      setPosts(response.data);
    } else {
      alert("Can't connect to server");
    }
  };

  useEffect(() => {
    refreshRecords();
  }, []);

  return [posts, setPosts, refreshRecords];
};
