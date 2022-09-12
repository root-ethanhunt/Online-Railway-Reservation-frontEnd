import React from "react";

export const ProgressBar = (props) => {
  return (
    <div>
      <div class="ui three steps">
        <div class="completed step">
          <i class="user icon"></i>
          <div class="content">
            <div class="title">Passenger Details</div>
          </div>
        </div>
        <div class="active step">
          <i class="clipboard check icon"></i>
          <div class="content">
            <div class="title">Review Journey</div>
          </div>
        </div>
        <div class="disabled step">
          <i class=" payment icon"></i>
          <div class="content">
            <div class="title">Payment</div>
          </div>
        </div>
      </div>
    </div>
  );
};
