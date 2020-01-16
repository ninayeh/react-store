import React from 'react'
import axios from 'commons/axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';


export default function Login(props) {
  const { register, handleSubmit, errors} = useForm();
  
  // 註冊邏輯
  const onSubmit = async data => {
    // 取得表單資料
    // console.log(data);
    // 處理註冊邏輯
    try {
      const {nickname, email, password} = data;
      const res = await axios.post('/auth/register', { nickname, email, password, type: 0 });
      const jwToken = res.data;
      // console.log(jwToken);
      // 拿到的 token 存在瀏覽器 local
      global.auth.setToken(jwToken);
      // 跳轉到首頁
      props.history.push('/');
      toast.success('Register Success');
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };
  // console.log(errors);
  
  return (
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
          <label className="lable">Nickname</label>
          <div className="control">
            <input 
              className={`input ${errors.email && 'is-danger'}`} 
              type="text" 
              placeholder="Nickname" 
              name="nickname"
              ref={register({
                required: 'Nickname is required', 
                
                })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="lable">Email</label>
          <div className="control">
            <input 
              className={`input ${errors.email && 'is-danger'}`} 
              type="text" 
              placeholder="Email" 
              name="email"
              ref={register({
                required: 'password is required', 
                pattern: {
                  value: /^([A-Za-z0-9_\-.])+@/,
                  message: 'invalid email'
                } 
                })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="lable">Password</label>
          <div className="control">
            <input 
              className={`input ${errors.password && 'is-danger'}`} 
              type="password" 
              placeholder="Password" 
              name="password"
              ref={register({
                required: 'password is required', 
                minLength: {
                  value: 6,
                  message: 'cannot be less than 6 digits' }
                })}
            />
            {errors.password && (
              <p className="helper has-text-danger">
              {errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Submit</button>
        </div>
      </form>
    </div>
  )
};


