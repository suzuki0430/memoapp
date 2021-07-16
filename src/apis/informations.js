import axios from 'axios';

export default axios.create({
  baseURL: 'http://challenge-server.tracks.run/memoapp',
  timeout: 2 * 60 * 60, // 2時間(7200秒)でタイムアウト
});
