import axios from 'axios'

export const useRequest = async ({
  url = '',
  method = 'GET',
  body = null,
  headers = {},
  timeout = 3000,
  statusAccept = [200]
}) => {
  const { status, data } = await axios({ url, data: body, method, timeout, headers })
  if (statusAccept.includes(status)) {
    return { status: true, data }
  }
  return { status: false, data: null }
}
