import { VxeUI } from 'vxe-pc-ui'

// 创建一个图片预览渲染器
VxeUI.renderer.add('MyImg', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row } = params
    return <vxe-image src={row.url} height="60"></vxe-image>
  }
})