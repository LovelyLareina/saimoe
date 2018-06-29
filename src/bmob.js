// import Bmob from '../static/lib/bmob/Bmob-1.6.1.min.js'
// Bmob.initialize('d1feb029226a3b6475d0d368bdd54722', '31f10576a0109ddf89c7dbc12937ca19')
//
// // 注册
// export function register (userInfo = {}) {
//   return new Promise(function (resolve, reject) {
//     var user = new Bmob.User()
//     user.set('username', userInfo.username)
//     user.set('password', userInfo.password)
//     user.set('email', userInfo.email)
//     user.signUp(null, {
//       success: function (user) {
//         resolve(user)
//       },
//       error: function (user, error) {
//         reject(error)
//       }
//     })
//   })
// }

// // 登录
// export function login (userInfo = {}) {
//   return new Promise(function (resolve, reject) {
//     Bmob.User.logIn(userInfo.username, userInfo.password, {
//       success: function (user) {
//         if (!user.get('emailVerified')) {
//           resolve({ 'code': '001', 'email': user.get('email') })
//           return
//         }
//         resolve({ 'code': '000', 'avatar': user.get('avatar'), 'userId': user.id })
//       },
//       error: function (user, error) {
//         reject(error)
//       }
//     })
//   })
// }
//
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
