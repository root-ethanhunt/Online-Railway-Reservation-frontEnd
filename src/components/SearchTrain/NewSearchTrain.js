import SearchTrainForm from "./SearchTrainForm";
import PnrSearch from "./PnrSearch";
import img1 from "../../assets/t8.jpg";

const NewSearchTrain = (props) => {
  return (
    <div className="new-expense">
      <p />

      <div class="ui segment ">
        <div
          class="ui two column very relaxed grid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div class="column">
            <PnrSearch></PnrSearch>
          </div>

          <div class="column">
            <SearchTrainForm></SearchTrainForm>
          </div>
        </div>
        <div class="ui vertical divider"></div>
      </div>
    </div>
  );
};

export default NewSearchTrain;
