import request from '@/utils/request'

// 查询稿件列表
export function listScript(query) {
  return request({
    url: '/system/script/list',
    method: 'get',
    params: query
  })
}

// 查询稿件详细
export function getScript(id) {
  return request({
    url: '/system/script/' + id,
    method: 'get'
  })
}

// 新增稿件

export function addScript(data) {
  return request({
    url: '/system/script',
    method: 'post',
    data: data
  })
}

// 修改稿件

export function updateScript(data) {
  return request({
    url: '/system/script',
    method: 'put',
    data: data
  })
}

// 删除稿件

export function delScript(id) {
  return request({
    url: '/system/script/' + id,
    method: 'delete'
  })
}
