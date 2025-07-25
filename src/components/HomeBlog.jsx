import React from "react";
import "./homeBlog.css";
import HeadindSubheading from "./reusablecomponents/HeadindSubheading";
import BlogCard from "./MyBlogCard";
const HomeBlog = () => {
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
  ];
  return (
    <div className="homeblog-main">
      <HeadindSubheading subtitle="Blog" title="Recent Blog" />

      <div className="row">
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
    </div>
  );
};

export default HomeBlog;
