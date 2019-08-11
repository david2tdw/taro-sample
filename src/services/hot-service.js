import Request from '../utils/request'

export const fetchHotList = (data) => {
  return Request({
    url: 'nodes/all.json',
    method: 'GET',
    data,
  })
}
