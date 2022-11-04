import request from '../utils/request'

export function getStudent(data) {
    return request({
      url: 'students',
      method: 'get',
      params: data
    })
}