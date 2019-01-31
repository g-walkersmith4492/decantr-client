const store = require('../store.js')
const showWinesTemplate = require('../templates/wine-listing.handlebars')

const onSignUpSuccess = function () {
  $('#user-message').text('You have successfully signed up!')
  $('#signupform').trigger('reset')
}

const onSignUpFailure = function () {
  $('#user-message').text('You have failed!')
  $('#signupform').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#user-message').text(`Welcome ${responseData.user.email}!`)
  console.log(store.user)
  $('#signinform').trigger('reset')
}

const onSignInFailure = function () {
  $('#user-message').text('You have failed!')
  $('#signinform').trigger('reset')
}

const onChangePasswordSuccess = function (responseData) {
  $('#user-message').text('You have successfully changed your password!')
  $('#changepasswordform').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#user-message').text('You have failed!')
  $('#changepasswordform').trigger('reset')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#user-message').text('You have signed out!')
}

const onSignOutFailure = function () {
  $('#user-message').text('You have failed!')
}

const onCreateWineSuccess = function (responseData) {
  store.wine = responseData.wine
  const listOfWines = store.wine.name
  $('#user-message').text(listOfWines)
  $('#createwineform').trigger('reset')
}

const onCreateWineFailure = function () {
  $('#user-message').text('You have failed!')
  $('#signupform').trigger('')
  $('#createwineform').trigger('reset')
}

const onGetWinesSuccess = function (responseData) {
  console.log(responseData.wines)
  const showWinesHtml = showWinesTemplate({ wines: responseData.wines })
  $('#user-message').html(showWinesHtml)
}

const onGetWinesFailure = function () {
  $('#user-message').text('You have failed!')
}

const onGetWineSuccess = function (responseData) {
  const showWinesHtml = showWinesTemplate({ wines: responseData.wine })
  $('#user-message').html(showWinesHtml)
  $('#getwineform').trigger('reset')
}
const onGetWineFailure = function () {
  $('#user-message').text('You have failed!')
  $('#getwineform').trigger('reset')
}

const onChangeWineSuccess = function (responseData) {
  $(`.modal-backdrop`).remove()
  $('#user-message').html('Succesfully edited quote!')
  $('#changewineform2').trigger('reset')
}

const onChangeWineFailure = function () {
  $('#user-message').text('You have failed!')
  $('#changewineform2').trigger('reset')
}

const onDeleteWineSuccess = function (responseData) {
  $('.content').text('You have deleted this entry!')
}

const onDeleteWineFailure = function () {
  $('#user-message').text('You have failed!')
}

const onFavoriteWineSuccess = function (responseData) {
  const favoriteWine = responseData.wines

  const result = favoriteWine.reduce(function (previousnum, currentnum) {
    let largestNumber = 0

    if (currentnum.rating > previousnum.rating) {
      largestNumber = currentnum
      return largestNumber
    } else {
      largestNumber = previousnum
      return largestNumber
    }
  })
  $('#user-message').text(`Your favorite wine is ${result.name}`)
}

const onFavoriteWineFailure = function () {
  $('#user-message').text('You have failed!')
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateWineSuccess,
  onGetWinesSuccess,
  onGetWineSuccess,
  onChangeWineSuccess,
  onDeleteWineSuccess,
  onFavoriteWineSuccess,
  onSignInFailure,
  onSignUpFailure,
  onChangePasswordFailure,
  onSignOutFailure,
  onCreateWineFailure,
  onGetWinesFailure,
  onGetWineFailure,
  onChangeWineFailure,
  onDeleteWineFailure,
  onFavoriteWineFailure
}
