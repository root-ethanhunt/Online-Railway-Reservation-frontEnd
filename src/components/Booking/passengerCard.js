function PassengerCard(props) {
  return (
    <div>
      <table class="ui four column table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Seat No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="collapsing">
              <i class="user icon"></i> {props.passengerData.name}
            </td>
            <td>{props.passengerData.age}</td>
            <td>{props.passengerData.gender}</td>
            <td>{props.passengerData.seatNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PassengerCard;
