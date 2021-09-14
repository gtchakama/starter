// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Link to="/about">About</Link>
      <title>Home Page</title>
      <h1>Welcome to my Project Sarter!</h1>
      <p>I'm making this to help me structure my C-R-A alternative.</p>
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;
