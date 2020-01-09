import _axios from 'axios'

const axios = baseURL => {

  const instant = _axios.create({
    baseURL: baseURL || 'http://localhost:3003',
    timeout: 1000
  }) ;

  return instant;
}

export default axios();