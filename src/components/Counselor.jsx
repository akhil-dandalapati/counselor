import React from "react";
import Herosection from "./Herosection";
import Pricing from "./Pricing";
import CounselorCard from "./reusablecomponents/CounselorCard";
const Counselor = () => {
  const counselorobj = {
    heading: "Counselor",
    subheading: "Qualified Counselor",
  };
  const counselors = [
    {
      name: "Lloyd Wilson",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Rachel Parker",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Ian Smith",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Alicia Henderson",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Lloyd Wilson",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Rachel Parker",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Ian Smith",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
    {
      name: "Fred Henderson",
      role: "Counselor",
      desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "https://preview.colorlib.com/theme/counselor/images/staff-1.jpg",
    },
  ];

  return (
    <div>
      <div>
        <Herosection title={counselorobj} />
      </div>
      <div className="container py-5 bg-light" style={{ marginTop: "25px" }}>
        <div className="row justify-content-center">
          {counselors.map((counselor, index) => (
            <CounselorCard
              key={index}
              image={counselor.image}
              name={counselor.name}
              role={counselor.role}
              desc={counselor.desc}
            />
          ))}
        </div>
      </div>
      <Pricing />
    </div>
  );
};

export default Counselor;
