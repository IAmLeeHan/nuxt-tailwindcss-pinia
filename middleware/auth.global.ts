export default defineNuxtRouteMiddleware((to)=>{
    // 设置用户权限页面
    const  authList = [
        '/user'
    ]
    // 记录redirect页面
    const redirect = to.fullPath
    // 是否需要权限
    let flag = authList.some(item=>to.path.indexOf(item) !== -1)
    // 是否已经获取权限token
    const token = useCookie('token').value|| false
    // 如果没有获取就跳转到登录界面
    if(flag&&!token) return navigateTo(`/login?redirect=${redirect}`)
    // return abortNavigation()
})