import React from "react";

const Banner = () => {
  return (
    <div id="Banner">
      <div className="col-md-12">
        <div className="container wrapper">
          <div className="inner-banner ">
            <h1> A WARM WELCOME</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary">Call to action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
