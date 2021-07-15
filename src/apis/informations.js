import axios from 'axios';

export default axios.create({
  baseURL: 'http://challenge-server.tracks.run/memoapp',
  timeout: 5 * 60 * 60,
});
