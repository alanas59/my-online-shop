import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="w-50 mt-5 mx-auto">
      {/*   first question */}
      <h1>What is Context API?</h1>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux. Context API is a (kind of) new feature added in
        version 16.3 of React that allows one to share state across the entire
        app (or part of it) lightly and with ease.
      </p>
      {/*    second question */}
      <h1 className="mt-4">What are Semantic Elements?</h1>
      <p>
        Semantic elements have meaningful names which tells about type of
        content. For example header, footer, table, … etc. HTML5 introduces many
        semantic elements as mentioned below which make the code easier to write
        and understand for the developer as well as instructs the browser on how
        to treat them.
        <h5 className='my-2'>Semantic Elements:</h5>
        <ul>
            <li>article</li>
            <li>aside</li>
            <li>details</li>
            <li>figcaption</li>
            <li>figure</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
