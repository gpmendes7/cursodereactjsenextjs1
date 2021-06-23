import { useState } from "react";
import { useFetch } from "./useFetch";

export const Home = () => {
  const [postId, setPostId] = useState("");
  const [result, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    {
      headers: {
        abc: "1",
      },
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick("")}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};
