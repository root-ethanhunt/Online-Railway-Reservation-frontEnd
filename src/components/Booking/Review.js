import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { TicketPrice } from "./TicketPrice";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import PassengerCard from "./passengerCard";

export const Review = (props) => {
  const history = useNavigate();

  const location = useLocation();
  const data = location.state;

  console.log(data);
  const authCtx = useContext(AuthContext);

  console.log(authCtx.userId);

  return (
    <div>
      <div className="ui three steps">
        <div className="completed step">
          <i className="user icon"></i>
          <div className="content">
            <div className="title">Passenger Details</div>
          </div>
        </div>
        <div className="completed step">
          <i className="clipboard check icon"></i>
          <div className="content">
            <div className="title">Review Journey</div>
          </div>
        </div>
        <div className="active step">
          <i className=" payment icon"></i>
          <div className="content">
            <div className="title">Payment</div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
      <div class="ui internally celled grid">
        <div class="twelve wide column">
          <div class="ui segment">
            <p></p>
            <div class="ui segment">
              <p>Train Name:{}</p>
              <div>
                <p>CLASS : {}</p>
              </div>
            </div>
            <div class="ui secondary segment">
              <div>
                <p className="p1">
                  <p className="p1">
                    {/* {(isData.from_station || " ").toUpperCase()} */}
                  </p>
                  <i className="arrow right icon"></i>
                </p>
                <p className="p1">
                  {/* {(isData.to_station || "").toUpperCase()} | */}
                </p>
                <p className="p1">{data.train_class}</p>
                <p className="p1">Quota</p>
                <p className="p1">time</p>
              </div>
            </div>
          </div>

          <div class="ui segment">
            <p></p>

            {data.passengerDetail.map((detail) => (
              <PassengerCard passengerData={detail} />
            ))}
          </div>

          <div class="ui segment">
            <p></p>
          </div>

          <div class="ui buttons">
            <button class="ui labeled icon button" onClick={() => history(-1)}>
              <i className="left arrow icon"></i>Back
            </button>
            <div class="or"></div>
            <button class="ui positive labeled icon button">
              Pay
              <i class="rupee sign icon"></i>
            </button>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui segment">
            <TicketPrice></TicketPrice>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
    </div>
  );
};
