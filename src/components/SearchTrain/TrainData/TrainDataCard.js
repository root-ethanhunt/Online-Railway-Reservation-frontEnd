import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TrainData = (props) => {
  const history = useNavigate();
  //   console.log(props.trainData);
  const [classData, setClassData] = useState("");
  const [trainNoData, setTrainNoData] = useState(0);
  const [classClickSL, setClassClickSL] = useState(false);
  const [classClickA3, setClassClickA3] = useState(false);
  const [classClickA2, setClassClickA2] = useState(false);
  const [classClickA1, setClassClickA1] = useState(false);
  const [classClick, setClassClick] = useState(true);

  const handleClick = (data, e) => {
    e.preventDefault();
    // setClassClickSL(false);
    // setClassClickA3(false);
    // setClassClickA2(false);
    // setClassClickA1(false);

    // if (classData === "SL" && !classClickSL) {
    //   setClassClickSL(true);
    // }

    // if (classData === "3A" && !classClickA3) {
    //   setClassClickA3(true);
    // }

    // if (classData === "2A" && !classClickA2) {
    //   setClassClickA2(true);
    // }

    // if (classData == "1A" && !classClickA1) {
    //   setClassClickA1(true);
    // }

    setClassData(data);
    setClassClick(false);
    setTrainNoData(props.trainData.train_id);
  };
  console.log({ classClickSL, classClickA3, classClickA2, classClickA1 });

  // const handleSubmitClick = (event) => {
  //    event.preventDefault();
  //   setTrainNoData(props.trainData.train_id);
  // };

  useEffect(() => {
    setClassClickSL(false);
    setClassClickA3(false);
    setClassClickA2(false);
    setClassClickA1(false);

    if (classData === "SL") {
      setClassClickSL(true);
    }

    if (classData === "3A") {
      setClassClickA3(true);
    }

    if (classData === "2A") {
      setClassClickA2(true);
    }

    if (classData == "1A") {
      setClassClickA1(true);
    }

    // console.log(1);
    // console.log(classData);
    // console.log(classClickA1);
  });

  const trainBookingData = {
    train_class: classData,
    train_no: trainNoData,
  };

  //console.log({ classData, trainNoData });

  const addStyleSL = classClickSL
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA3 = classClickA3
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA2 = classClickA2
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA1 = classClickA1
    ? "ui raised blue inverted segment"
    : "ui raised  segment";

  return (
    //    <div>{props.trainData.train_id}</div>
    <div className="ui segment">
      <div className="ui tertiary segment">
        <p className="p1">{props.trainData.train_name.toUpperCase()} |</p>
        <p className="p1">{props.trainData.train_id}</p>
      </div>

      <div className="ui four column  stackable grid">
        <div
          className="column "
          onClick={(e) => {
            handleClick("SL", e);
          }}
        >
          <div className={addStyleSL}>
            <div className="ui ">
              <div className=" header">
                <div className="line">Sleeper (SL)</div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.trainData.total_Seat_sleeper}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="column"
          onClick={(e) => {
            handleClick("3A", e);
          }}
        >
          <div className={addStyleA3}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 3 Tier (3A)</div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.trainData.total_Seat_ac3}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="column"
          onClick={(e) => {
            handleClick("2A", e);
          }}
        >
          <div className={addStyleA2}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 2 Tier (2A)</div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.trainData.total_Seat_ac2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="column"
          onClick={(e) => {
            handleClick("1A", e);
          }}
        >
          <div className={addStyleA1}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 1 Tier (1A)</div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.trainData.total_Seat_ac1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <button
          className="ui button"
          disabled={classClick}
          // onClick={handleSubmitClick}
        >
          <Link to="/train-booking" state={trainBookingData}>
            {<a className="active item"> Book Now</a>}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TrainData;
