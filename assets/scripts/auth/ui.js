const store = require('../store.js')
const showWinesTemplate = require('../templates/wine-listing.handlebars')
const events = require('./events.js')

const onSignUpSuccess = function () {
  $('#user-message').text('You have successfully signed up!')
}

const failure = function () {
  $('#user-message').text('You have failed!')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#user-message').text(`Welcome ${responseData.user.email}!`)
  console.log(store.user)
}

const onChangePasswordSuccess = function (responseData) {
  $('#user-message').text('You have successfully changed your password!')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#user-message').text('You have signed out!')
}

const onCreateWineSuccess = function (responseData) {
  store.wine = responseData.wine
  const listOfWines = store.wine.name
  $('#user-message').text(listOfWines)
}

const onGetWinesSuccess = function (responseData) {
  console.log(responseData.wines)
  const showWinesHtml = showWinesTemplate({ wines: responseData.wines })
  $('#user-message').html(showWinesHtml)
}

const onGetWineSuccess = function (responseData) {
  const showWinesHtml = showWinesTemplate({ wines: responseData.wine })
  $('#user-message').html(showWinesHtml)
}

const onChangeWineSuccess = function (responseData) {
  $(`.modal-backdrop`).remove()
  $('#user-message').html('Succesfully edited quote!')
}

const onDeleteWineSuccess = function (responseData) {
  $('.content').text('You have deleted this entry!')
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
module.exports = {
  onSignUpSuccess,
  failure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateWineSuccess,
  onGetWinesSuccess,
  onGetWineSuccess,
  onChangeWineSuccess,
  onDeleteWineSuccess,
  onFavoriteWineSuccess
}
