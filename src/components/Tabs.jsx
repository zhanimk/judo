import React, { useEffect } from "react";

function Tabs() {
  useEffect(() => {
    document.querySelectorAll("#carousel figure").forEach((fig, index) => {
      console.log(
        `Figure ${index + 1}:`,
        getComputedStyle(fig).backgroundImage
      );
    });
  }, []);

  return (
    <div className="gallery-container">
      <h1>🎯 Дзюдо – жеңіс өнері</h1>
      <div className="carousel-container">
        <div id="carousel">
          <figure className="one" data-text="Қазақстанның чемпиондары"></figure>
          <figure className="two" data-text="Олимпиада жеңімпаздары"></figure>
          <figure className="three" data-text="Халықаралық жарыстар"></figure>
          <figure className="four" data-text="Дзюдо – күш пен ақыл"></figure>
          <figure className="five" data-text="Жас дзюдошылар"></figure>
          <figure className="six" data-text="Әлемдік аренада"></figure>
          <figure className="seven" data-text="Қазақстан құрамасы"></figure>
          <figure className="eight" data-text="Олимпиадалық ойындар"></figure>
          <figure className="nine" data-text="Дзюдошылардың дайындығы"></figure>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
