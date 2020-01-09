import _axios from 'axios'

const instant = _axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 1000
}) ;

export default instant;