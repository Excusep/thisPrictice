import menuJSon from '@/router/menu'

function getRouterConfig (router) {
  return {
    path: router.path,
    meta: Object.assign({title: router.title}),
    component: () => import(`@/view/${router.entry}`)
  }
}

export default function addRouter () {
  let routerMenus = menuJSon
  // 路由配置
  var routerConfig = []
  // 添加路由配置
  routerMenus.forEach((item) => {
    let config = getRouterConfig(item)
    routerConfig.push(config)
  })
  // 返回路由配置
  return routerConfig
}
