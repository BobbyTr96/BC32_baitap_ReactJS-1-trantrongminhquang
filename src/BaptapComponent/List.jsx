import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <section id="List">
      <div className="wrapper-List">
        <div className="container list-contain">
          <div className="row">
            <div className="col-md-3">
              <ListItem />
            </div>
            <div className="col-md-3">
              <ListItem />
            </div>
            <div className="col-md-3">
              <ListItem />
            </div>
            <div className="col-md-3">
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
