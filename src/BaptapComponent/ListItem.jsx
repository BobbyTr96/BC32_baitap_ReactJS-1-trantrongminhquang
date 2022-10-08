import React from "react";

const ListItem = () => {
  return (
    <>
      <div className="card">
        <img className="card-img-top img-fluid" src="https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg" alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Find Out more</button>
        </div>
      </div>
    </>
  );
};

export default ListItem;
