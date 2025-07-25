//featureboxes//
// <div className="features-section">
//   <div className="feature-box1 featurebox1">
//     <i className="bi bi-clipboard2-data-fill"></i>
//     <div>
//       <h3>100% Confidential</h3>
//       <p>
//         A small river named Duden flows by their place and supplies it with the
//         necessary regelialia.
//       </p>
//     </div>
//   </div>
//   <div className="feature-box2">
//     <i className="bi bi-people-fill"></i>
//     <div>
//       <h3>Qualified Team</h3>
//       <p>
//         A small river named Duden flows by their place and supplies it with the
//         necessary regelialia.
//       </p>
//     </div>
//   </div>
//   <div className="feature-box3">
//     <i className="bi bi-umbrella"></i>
//     <div>
//       <h3>Individual Approach</h3>
//       <p>
//         A small river named Duden flows by their place and supplies it with the
//         necessary regelialia.
//       </p>
//     </div>
//   </div>
// </div>;
/************ */
/***services code */
//  <div className="text-center mb-5">
//           <h6 className="text-success text-uppercase">Services</h6>
//           <h2 className="fw-bold">How It Works</h2>
//         </div>
<div className="services-heading">
  <center>
    <h6>Services</h6>
    <h2>We Can Help You With This Situation</h2>
  </center>
</div>;
/*****/
/***pricing* */
// <h6 className="text-success row justify-content-center">
//             PRICE & PLANS
//           </h6>

//           <h2 className="text-center mb-5">Affordable Packages</h2>
///***//
// /**myblog* */
// <div className="homeblog-heading">
//         <h4>Blog</h4>
//         <h2>Recent Blog</h2>
//       </div>
/**myblogcard */
// <div className="container " style={{ marginTop: "80px" }}>
//         <div className="row">
//           {blogcards &&
//             blogcards.map((item, index) => (
//               <div
//                 className="col-md-4 mb-4 d-flex justify-content-center"
//                 key={index}
//               >
//                 <div
//                   className="card"
//                   style={{ height: "70vh", width: "100%", maxWidth: "350px" }}
//                 >
//                   <img
//                     src={item.image}
//                     className="card-img-top"
//                     alt="..."
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="d-flex mx-auto flex-column justify-content-center align-items-center rounded-circle cardcricle my-6 blog-circle">
//                     <h4 className="date" style={{ color: " #589167" }}>
//                       18
//                     </h4>
//                     <h5 className="monrh">April</h5>
//                     <span className="year">2020</span>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.heading}</h5>
//                     <p className="card-text">{item.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
/**service badges */
//  <div className="row text-center">
//         <div className="col-md-4 mb-4">
//           <div className="p-4 rounded-circle bg-light d-inline-block position-relative service-badges">
//             <i
//               className="bi bi-calendar-week"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 fontSize: "60px",
//                 lineHeight: "100px",
//                 textAlign: "center",
//                 borderRadius: "50%",
//                 backgroundColor: "transparent",
//                 color: "black",
//                 display: "block",
//               }}
//             ></i>
//             <span
//               className="badge bg-success position-absolute translate-middle rounded-pill"
//               style={{ top: "10%", left: "80%", height: "30px", width: "30px" }}
//             >
//               01
//             </span>
//           </div>
//           <h5 className="mt-3 fw-semibold">Make Schedule</h5>
//           <p className="text-muted">
//             A small river named Duden flows by their place and supplies it with
//             the necessary regelialia.
//           </p>
//         </div>

//         <div className="col-md-4 mb-4">
//           <div className="p-4 rounded-circle bg-light d-inline-block position-relative service-badges">
//             <i
//               className="bi bi-chat-left-text"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 fontSize: "60px",
//                 lineHeight: "100px",
//                 textAlign: "center",
//                 borderRadius: "50%",
//                 backgroundColor: "transparent",
//                 color: "black",
//                 display: "block",
//               }}
//             ></i>
//             <span
//               className="badge bg-success position-absolute  translate-middle rounded-pill iconshover"
//               style={{ top: "10%", left: "80%", height: "30px", width: "30px" }}
//             >
//               02
//             </span>
//           </div>
//           <h5 className="mt-3 fw-semibold">Start Discussion</h5>
//           <p className="text-muted">
//             A small river named Duden flows by their place and supplies it with
//             the necessary regelialia.
//           </p>
//         </div>

//         <div className="col-md-4 mb-4">
//           <div className="p-4 rounded-circle bg-light d-inline-block position-relative service-badges">
//             <i
//               className="bi bi-building-fill-check"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 fontSize: "60px",
//                 lineHeight: "100px",
//                 textAlign: "center",
//                 borderRadius: "50%",
//                 backgroundColor: "transparent",
//                 color: "black",
//                 display: "block",
//               }}
//             ></i>
//             <span
//               className="badge bg-success position-absolute  translate-middle rounded-pill"
//               style={{ top: "10%", left: "80%", height: "30px", width: "30px" }}
//             >
//               03
//             </span>
//           </div>
//           <h5 className="mt-3 fw-semibold">Enjoy Plan</h5>
//           <p className="text-muted">
//             A small river named Duden flows by their place and supplies it with
//             the necessary regelialia.
//           </p>
//         </div>
//       </div>
/***pricing card */
// <div className="row justify-content-center">
//             {pricingData.map((plan) => (
//               <div className="col-md-4 mb-3 shadow-sm  " key={plan.id}>
//                 <div className="card   text-center pricing-card">
//                   <div className="card-body d-flex flex-column mb-3 ">
//                     <span>
//                       ${" "}
//                       <span className="text-success price-cost">
//                         {plan.price}
//                       </span>
//                       <small className="text-muted fs-6">/mo</small>
//                     </span>
//                     <h5 className="mb-3">{plan.title}</h5>
//                     <hr />
//                     <ul className="list-unstyled">
//                       {plan.features.map((item, index) => (
//                         <li key={index} className="mb-2 ">
//                           <i class="bi bi-check text-success"></i> {item}
//                         </li>
//                       ))}
//                     </ul>
//                     <button className="btn btn-success mt-3 price-btn">
//                       GET STARTED
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
/**blogcards */
// <div className="container " style={{ marginTop: "80px" }}>
//         <div className="row">
//           {blogcards &&
//             blogcards.map((item, index) => (
//               <div
//                 className="col-md-4 mb-4 d-flex justify-content-center"
//                 key={index}
//               >
//                 <div
//                   className="card"
//                   style={{ height: "70vh", width: "100%", maxWidth: "350px" }}
//                 >
//                   <img
//                     src={item.image}
//                     className="card-img-top"
//                     alt="..."
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="d-flex mx-auto flex-column justify-content-center align-items-center rounded-circle cardcricle my-6">
//                     <span>18</span>
//                     <span>April</span>
//                     <span>2020</span>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.heading}</h5>
//                     <p className="card-text">{item.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
/**counselor code */
// <div className="container py-5 bg-light " style={{ margin: "50px" }}>
//         <div className="row justify-content-center">
//           {counselors.map((counselor, index) => (
//             <div className="col-sm-6 col-md-4 col-lg-3 mb-5" key={index}>
//               <div
//                 className="card h-100 shadow"
//                 style={{ boxShadow: "0px 24px 48px" }}
//               >
//                 <img
//                   src={counselor.image}
//                   className="card-img-top"
//                   alt={counselor.name}
//                 />
//                 <div className="card-body text-center ">
//                   <div
//                     className="mb-2 d-flex justify-content-center gap-2"
//                     style={{ marginTop: "-60px" }}
//                   >
//                     <a href="#">
//                       <i
//                         class="bi bi-twitter"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           fontSize: "20px",
//                           lineHeight: "40px",
//                           textAlign: "center",
//                           borderRadius: "50%",
//                           backgroundColor: "#589167",
//                           color: "white",
//                           display: "block",
//                         }}
//                       ></i>
//                     </a>
//                     <a href="#">
//                       <i
//                         class="bi bi-facebook"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           fontSize: "20px",
//                           lineHeight: "40px",
//                           textAlign: "center",
//                           borderRadius: "50%",
//                           backgroundColor: "#589167",
//                           color: "white",
//                           display: "block",
//                         }}
//                       ></i>
//                     </a>
//                     <a href="#">
//                       <i
//                         class="bi bi-google"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           fontSize: "20px",
//                           lineHeight: "40px",
//                           textAlign: "center",
//                           borderRadius: "50%",
//                           backgroundColor: "#589167",
//                           color: "white",
//                           display: "block",
//                         }}
//                       ></i>
//                     </a>
//                     <a href="#">
//                       <i
//                         class="bi bi-instagram"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           fontSize: "20px",
//                           lineHeight: "40px",
//                           textAlign: "center",
//                           borderRadius: "50%",
//                           backgroundColor: "#589167",
//                           color: "white",
//                           display: "block",
//                         }}
//                       ></i>
//                     </a>
//                   </div>
//                   <h5 className="card-title mb-1">{counselor.name}</h5>
//                   <p className="text-uppercase text-muted small mb-2">
//                     {counselor.role}
//                   </p>
//                   <p className="card-text text-muted">{counselor.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
