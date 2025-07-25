import React from "react";
import "./testimonial.css";
import TestimonialCard from "./TestimonialCard";
// import testimonialsData from "./testimonialsData";
const Testimoinal = () => {
  const testimonialsData = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      title: "Marketing Manager",
      image: "https://preview.colorlib.com/theme/counselor/images/person_1.jpg",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      title: "Marketing Manager",
      image: "https://preview.colorlib.com/theme/counselor/images/person_2.jpg",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      title: "Marketing Manager",
      image: "https://preview.colorlib.com/theme/counselor/images/person_3.jpg",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      title: "Marketing Manager",
      image: "https://preview.colorlib.com/theme/counselor/images/person_4.jpg",
    },
  ];

  return (
    <div>
      <div className="image-container">
        <div className="image-shadow" />
        <div className="text-overlay">
          <h4>Testimonial</h4>
          <div>Hello World</div>
        </div>
      </div>
      <div></div>

      <div className="container">
        <div className="d-flex  test">
          {testimonialsData.map((t, index) => (
            <TestimonialCard
              key={index}
              text={t.text}
              name={t.name}
              title={t.title}
              image={t.image}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <i
          class="bi bi-dot"
          style={{
            color: "green",
            border: "2px solid white",
            backgroundColor: "#589167",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        ></i>
        <i
          class="bi bi-dot"
          style={{
            color: "white",
            border: "2px solid green",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        ></i>
        <i
          class="bi bi-dot"
          style={{
            color: "white",
            border: "2px solid green",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        ></i>
        <i
          class="bi bi-dot"
          style={{
            color: "white",
            border: "2px solid green",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        ></i>
      </div>
    </div>
  );
};

export default Testimoinal;
