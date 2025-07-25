import React from "react";
import Herosection from "./Herosection";
import BlogCard from "./MyBlogCard";
import "./blog.css";
const Blog = () => {
  const blogobj = {
    heading: "blog",
    subheading: "our blog",
  };
  const blogcards = [
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_5.jpg",
      heading: "Social Media Risks To Mental Health",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <div>
      <div>
        <Herosection title={blogobj} />
      </div>
      <div className="row" style={{ marginTop: "50px" }}>
        {blogcards &&
          blogcards.map((item, index) => (
            <BlogCard
              key={index}
              image={item.image}
              heading={item.heading}
              content={item.content}
              date={item.date || "18"}
              month={item.month || "April"}
              year={item.year || "2020"}
            />
          ))}
      </div>

      <div className="container pagination-center mx-auto">
        <ul className="pagination">
          <li className="disabled">
            <a href="#">
              <i class="bi bi-chevron-left"></i>
            </a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
