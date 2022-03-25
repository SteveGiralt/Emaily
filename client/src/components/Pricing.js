import React from "react";
import Payments from "./Payments";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      {" "}
      <div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Email Surveys Made Easy</span>
              <p>
                At Emaily we belive in simple pricing. $1 gets you 1 survey to
                unlimited recipients!
              </p>
            </div>
            <div class="card-action">
              <Payments />
              <Link to="/surveys">
                <button className="btn red darken-2 waves-effect waves-light right">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
