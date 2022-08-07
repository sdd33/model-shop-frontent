import {Card,Form,Input,Checkbox,Button,message} from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import {useStore} from "@/store"
import {useNavigate} from 'react-router-dom'

function login(){
  const {loginStore} = useStore();
  const navigate = useNavigate();
async function onFinish(values){
    console.log(loginStore)
    console.log('Success:', values);
    try {
      await loginStore.settoken({
        mobile:values.username,
        code:values.password
      })
      navigate('/layout',{replace : true});
      message.success('登陆成功');
    }catch (e){
      message.success('登陆失败');
    }
}
  async function regist(){
      navigate('/layout',{replace : true});
  }

  return(
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt=''/>
        <Form initialValues={{remember : true,}} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {required: true, message: '请输入账号!'},
              {pattern: /^\d{3,}$/, message: '手机号码格式不对', validateTrigger: 'onBlur'}]}>
            <Input size="large" placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {required: true, message: '请输入密码!'},
              {len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' }
            ]}
          >
            <Input size="large" placeholder="密码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button  type="primary" size="large" onClick={regist} block>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default login