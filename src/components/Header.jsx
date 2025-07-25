import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="navbar1">
      <div className="phn-mail">
        <a>
          <i class="bi bi-telephone-fill"></i> +00 1234 567
        </a>
        <a>
          <i class="bi bi-telegram"></i> &nbsp;youremail@email.com
        </a>
      </div>

      <div className="social-icons">
        <a href="#">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i class="bi bi-globe2"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
