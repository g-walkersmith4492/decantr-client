const store = require('../store.js')

const onSignUpSuccess = function () {
  console.log('You have signed up!')
}

const failure = function () {
  console.log('You have failed!')
}

const onSignInSuccess = function (responseData) {
  console.log('You have signed in!')
  store.user = responseData.user
  console.log(store.user)
}

const onChangePasswordSuccess = function (responseData) {
  console.log('You have changes password!')
}

const onSignOutSuccess = () => {
  store.user = null
  console.log('You have signed out!')
}

const onCreateWineSuccess = function (responseData) {
  console.log('You have created a wine!!')
  console.log(responseData)
}

module.exports = {
  onSignUpSuccess,
  failure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateWineSuccess
}
