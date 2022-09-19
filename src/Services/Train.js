import httpClient from "../http-common1";
class trainService {
  getTrains(from, to) {
    return httpClient.get(`/trainSearch/getTrainByStations/${from}/${to}`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
  }

  getTrainById(id) {
    return httpClient.get(`/trainSearch/getTrainById/${id}`);
  }

  getAllTrain() {
    return httpClient.get(`/trainSearch/allTrains`);
  }
}
export default new trainService();
