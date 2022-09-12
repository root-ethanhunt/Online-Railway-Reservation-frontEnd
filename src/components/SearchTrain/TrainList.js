import "./TrainList.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import service from "../../Services/Train";
import TrainDataCard from "./TrainData/TrainDataCard";

import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const TrainList = (props) => {
  const [isData, setIsData] = useState([]);
  const location = useLocation();

  //   const to = props.items.to;
  const data = location.state;

  const trainRun = () => {
    service
      .getTrains(data.from, data.to)
      .then((res) => {
        // console.log(res.data);
        setIsData(res.data);
        //   setIsLoading(false);
        if (res.status === 200) {
          // console.log(res.data.accessToken);
          // console.log(res.status);
          return res.data;
        } else {
          return res.data.then((data) => {
            // throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //   authCtx.login(data.token);
        //   history("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    trainRun();
  }, []);

  //   console.log(isData.at(0).train_id);
  return (
    /* {data && (
        <div>
          <h3>Passed data:</h3>
          <p>to: {data.to}</p>
          <p>from: {data.from}</p>
          <p>date: {data.dates}</p>
          <p>class: {data.classes}</p>
          <p>category: {data.category}</p>
        </div>
      )} */
    <div>
      <div class="ui segment ">
        <h2 class="ui  header">
          <div class="ui tertiary segment">
            {data && (
              <div>
                <p className="p1">
                  {data.from.toUpperCase()}
                  <p className="p1"> </p>
                  <i class="arrow right icon"></i>
                </p>
                <p className="p1"> {data.to.toUpperCase()} |</p>
                <p className="p1">date: {data.dates} |</p>
                <p className="p1"> {data.classes} |</p>
                <p className="p1"> {data.category} </p>
              </div>
            )}
          </div>
        </h2>
        <div class="ui clearing divider"></div>
        <div class="ui padded segment">
          {isData.map((train) => (
            <TrainDataCard trainData={train} />
          ))}

          {/* <div>{isData.at(0).train_id}</div> */}
        </div>
      </div>
    </div>
  );
};
export default TrainList;
