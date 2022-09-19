import React from "react";

import { useEffect, useState, useRef, useContext } from "react";
import service from "../../Services/Train";
import img from "../../assets/Vikash Kumar Photo.JPG";
import { Button } from "semantic-ui-react";
export const HomeSideComponent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState([]);

  const list = () =>
    service
      .getAllTrain()
      .then((res) => {
        setIsData(res.data);
        console.log(res.data);
        props.showNumb(res.data.length);
        setIsLoading(true);
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);

            // throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  useEffect(() => {
    list();
  }, []);
  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {isLoading &&
            isData.map((trainData) => (
              <tr>
                <td data-label="Train Name">
                  {trainData.train_name.toUpperCase()}
                </td>
                <td data-label="Train Number">{trainData.train_id}</td>
                <td data-label="Job">
                  <button class="positive ui button">Update</button>
                </td>
                <td data-label="Job">
                  <button class="negative ui button">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
