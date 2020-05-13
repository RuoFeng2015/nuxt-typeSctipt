import Cookies from 'js-cookie'
import config from './../env.js'
export const getToken = () => {
  const token = Cookies.get(config.tookenKey)
  if (token) { return token } else { return '' }
}
