import decode from 'jwt-decode';
const JWT = 'store_token_id';

const setToken = token => { 
  localStorage.setItem(JWT, token);
};

// 取得存在 LocalStoage 裡的 totken 資料，才能進一步取得 user 資料
const getToken = () => {
  return localStorage.getItem(JWT);
};

// 取得 user 資料之前，判斷是否已經登入
const isLogin = () => {
  const jwToken = getToken();
  return !!jwToken && !isTokenExpired(jwToken);
};

// 檢查 token 是否超時
const isTokenExpired = token => { 
try {
  const _info = decode(token);
  if (_info.exp < Date.now() / 1000) {
    return true;
    } else return false;
  } catch (error) {
    return false;
  } 
};
  

// 取得 user 資料
const getUser = () => { 
  const jwToken = getToken(); 
  if (isLogin()) {
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};



// 類似 export 的東西，不過是給全域使用的，所以要在 index 導入這個檔案
global.auth = {
  setToken,
  getUser
};