import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TicketPrice } from "./TicketPrice";

export default function TrainBooking() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: "", age: "", gender: "", seatNo: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), name: "", age: "", gender: "", seatNo: "" },
    ]);

    console.log(inputFields.length);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );

    setInputFields(values);
  };

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
      {/* {progress bar end} */}

      <div class="ui segment  ">
        <div class="ui segments">
          <h1 class="ui left aligned tertiary segment">
            train name (train number)
          </h1>

          <div>
            <p>class</p>
          </div>
          <div class="ui secondary segment">
            <div>
              <p className="p1">
                <p className="p1">PATNA</p>
                <i class="arrow right icon"></i>
              </p>
              <p className="p1">KOLKATA</p>
              <p className="p1">class</p>
              <p className="p1">Quota</p>
              <p className="p1">time</p>
            </div>
          </div>
        </div>
      </div>

      {/* {passenger section and payment section start} */}
      <div class="ui internally celled grid">
        <div class="row">
          <div class="twelve wide column">
            <div class="ui segment">
              <p>Passenger Details</p>

              {/* add Passenger details */}
              <div class="ui segment">
                <button
                  class="ui button labeled icon"
                  onClick={handleAddFields}
                  disabled={inputFields.length >= 6 ? true : false}
                >
                  <i class="plus icon"></i>
                  Add Passenger Details
                </button>
              </div>

              {inputFields.map((inputField) => (
                <div key={inputField.id}>
                  <div class="ui form  segment">
                    <div class="five fields">
                      <div class="field">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={inputField.name}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        />
                      </div>
                      <div class="field">
                        <input
                          type="text"
                          placeholder="Age"
                          name="age"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.age}
                        />
                      </div>
                      <div class="ui selection  ">
                        <input
                          type="text"
                          placeholder="Gender"
                          name="gender"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.gender}
                        />
                      </div>
                      <div class="field">
                        <input
                          type="text"
                          placeholder="Seat No."
                          name="seat"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.seatNo}
                        />
                      </div>
                      <div class="field">
                        <button
                          class="ui button labeled icon"
                          onClick={() => handleRemoveFields(inputField.id)}
                          disabled={inputFields.length < 1 ? true : false}
                        >
                          <i class="trash icon"></i>
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <button
                class="ui button"
                onClick={handleSubmit}
                disabled={inputFields.length < 1 ? true : false}
                style={{ marginTop: "1%" }}
              >
                submit
              </button> */}

              {/* submit or back button start */}
              <button class="ui labeled icon button">
                <i class="left arrow icon"></i>
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={inputFields.length < 1 ? true : false}
                style={{ marginTop: "1%" }}
                class="ui right labeled icon button"
              >
                <i class="right arrow icon"></i>
                Continue
              </button>
              {/* submit or back button end */}
              {/* add Passenger details */}
            </div>
          </div>
          <div class="four wide column">
            <div class="ui segment">
              <TicketPrice />
            </div>
          </div>
        </div>
      </div>
      {/* user detail start*/}

      <div class="ui segment"></div>
    </div>
  );
}
