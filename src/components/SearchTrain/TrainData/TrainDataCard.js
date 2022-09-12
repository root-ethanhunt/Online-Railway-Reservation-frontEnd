const TrainData = (props) => {
  //   console.log(props.trainData);
  return (
    //    <div>{props.trainData.train_id}</div>
    <div class="ui segment">
      <div class="ui tertiary segment">
        <p className="p1">{props.trainData.train_name.toUpperCase()} |</p>
        <p className="p1">{props.trainData.train_id}</p>
      </div>

      <div class="ui four column  stackable grid">
        <div class="column ">
          <div class="ui raised  segment">
            <div class="ui ">
              <div class=" header">
                <div class="line">Sleeper (SL)</div>
              </div>
              <div class="paragraph">
                <div class="medium line">
                  {props.trainData.total_Seat_sleeper}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui raised segment">
            <div class="ui ">
              <div class=" header">
                <div class="line">AC 3 Tier (3A)</div>
              </div>
              <div class="paragraph">
                <div class="medium line">{props.trainData.total_Seat_ac3}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui raised segment">
            <div class="ui ">
              <div class=" header">
                <div class="line">AC 2 Tier (2A)</div>
              </div>
              <div class="paragraph">
                <div class="medium line">{props.trainData.total_Seat_ac2}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui raised segment">
            <div class="ui ">
              <div class=" header">
                <div class="line">AC 1 Tier (1A)</div>
              </div>
              <div class="paragraph">
                <div class="medium line">{props.trainData.total_Seat_ac1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <button class="ui button">Book Now</button>
      </div>
    </div>
  );
};

export default TrainData;
