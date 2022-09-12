import React from "react";
import { connect } from "react-redux";

export const TicketPrice = (props) => {
  return (
    <div>
      <div class="ui segments">
        <div class="ui tertiary  segment">
          <h2>Fare Summary</h2>
        </div>
        <div class="ui left aligned segment">
          <h4>Ticket Fare :</h4>
        </div>

        <div class="ui left aligned inverted blue segment">
          <h3>Total Fare :</h3>
        </div>
      </div>
    </div>
  );
};
