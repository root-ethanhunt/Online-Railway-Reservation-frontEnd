import httpClient from "../http-common1";
class trainService {
  getTrains(from, to) {
    return httpClient.get(`/trainSearch/getTrainByStations/${from}/${to}`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
  }
}
export default new trainService();
