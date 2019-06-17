import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  // TODO DEMO
  xhr(config)
}

export default axios
