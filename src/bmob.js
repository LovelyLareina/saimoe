import Bmob from '../static/lib/bmob/Bmob-1.6.1.min'
Bmob.initialize('d1feb029226a3b6475d0d368bdd54722', '31f10576a0109ddf89c7dbc12937ca19')

// var user = new Bmob.User()
// console.log(user)

// 注册
export function register (userInfo = {}) {
  return new Promise(function (resolve, reject) {
    Bmob.User.register(userInfo).then(res => {
      console.log(`注册的正确的信息` + res)
    }).catch(err => {
      console.log(`注册的错误信息` + err)
    })
  })
}
// 登录
export function login (userInfo = {}) {
  return new Promise(function (resolve, reject) {
    Bmob.User.login(userInfo.username, userInfo.password, {
      success: function (user) {
        if (!user.get('emailVerified')) {
          resolve({ 'code': '001', 'email': user.get('email') })
          return
        }
        resolve({ 'code': '000', 'avatar': user.get('avatar'), 'userId': user.id })
      },
      error: function (user, error) {
        reject(error)
      }
    })
  })
}

// // 登出
// export function bmobLogout () {
//   return new Promise(function (resolve, reject) {
//     try {
//       Bmob.User.logOut()
//       resolve({ 'code': '000', 'message': '登出成功' })
//     } catch (error) {
//       reject({ 'code': '001', 'message': '登出失败' })
//     }
//   })
// }
//
// // 重置查询密码
// export function resetPwd (payload) {
//   return new Promise(function (resolve, reject) {
//     Bmob.User.requestPasswordReset(payload, {
//       success: function () {
//         resolve({ 'code': '000', 'message': '发送成功' })
//       },
//       error: function () {
//         reject({ 'code': '001', 'message': '重置错误'})
//       }
//     })
//   })
// }
//
// // 判断是否登录，获取当前登录的用户
// export function currentUser () {
//   return new Promise(function (resolve, reject) {
//     var currentUser = Bmob.User.current()
//     if (currentUser) {
//       resolve(currentUser)
//     } else {
//       reject({ 'code': '001', 'message': '未登录' })
//     }
//   })
// }
