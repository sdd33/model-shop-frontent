import {makeAutoObservable} from 'mobx'
import {http,setToken,getToken} from '@/utils'


class LoginStore{
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  settoken = async ({mobile,code})=>{
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    console.log(res)
    setToken(res.data.data.token)
  }
}
export default LoginStore