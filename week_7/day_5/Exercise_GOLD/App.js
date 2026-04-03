import React from "react";
import PostForm from "./PostForm";
import PostAxios from "./PostAxios";

function App() {
  return (
    <div>
      <h2>Fetch Example</h2>
      <PostForm />

      <h2>Axios Example</h2>
      <PostAxios />
    </div>
  );
}

export default App;