const SearchTrainForm = (props) => {
  return (
    <form>
      <div className="ui form">
        {/* <h1 className="ui dividing header">Book Ticket</h1> */}
        <h1 className="ui header" style={{ color: "#2B3080" }}>
          BOOK TICKET
        </h1>
        <div className="fields">
          <div className="field">
            {/* <label>From</label> */}
            <div className="ui icon input">
              <i className="paper plane icon"></i>
              <input type="text" placeholder="From" />
            </div>
          </div>
          <div className="field">
            {/* <label>To</label> */}
            <div className="ui icon input">
              <i className="map marker alternate icon"></i>
              <input type="text" placeholder="To" />
            </div>
          </div>
        </div>
        <div className="equal width fields">
          <div className="field">
            {/* <label>Date</label> */}
            <input
              type="date"
              placeholder="date"
              value="2022-09-07"
              // min="2022-01-01"
              // max="2023-12-31"
            />
          </div>

          <div className="field">
            {/* <label>All classNamees</label> */}

            <select className="ui search dropdown">
              <option value="">All classNamees</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
            </select>
          </div>
        </div>
        <div className="field">
          {/* <label>General</label> */}

          <select className="ui search dropdown">
            <option value="">GENERAL</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
            <option value="AL">Albania</option>
          </select>
        </div>
        <button className="ui toggle button">Search</button>
      </div>
    </form>
  );
};

export default SearchTrainForm;
