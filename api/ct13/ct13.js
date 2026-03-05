import request from '@/utils/request'

// 查询CT13土的自由膨胀率检测记录列表
export function listCt13(query) {
  return request({
    url: '/ct13/ct13/list',
    method: 'get',
    params: query
  })
}

// 查询CT13土的自由膨胀率检测记录详细
export function getCt13(id) {
  return request({
    url: '/ct13/ct13/' + id,
    method: 'get'
  })
}

// 新增CT13土的自由膨胀率检测记录
export function addCt13(data) {
  return request({
    url: '/ct13/ct13',
    method: 'post',
    data: data
  })
}

// 修改CT13土的自由膨胀率检测记录
export function updateCt13(data) {
  return request({
    url: '/ct13/ct13',
    method: 'put',
    data: data
  })
}

// 删除CT13土的自由膨胀率检测记录
export function delCt13(id) {
  return request({
    url: '/ct13/ct13/' + id,
    method: 'delete'
  })


  //导出表格


  }
export function exportMyExcel(id) {
  return request({
    url: '/ct13/ct13/exportMyExcel/'+ id,
    method: 'get'
  })

}
