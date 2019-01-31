const store = require('../store.js')
const showWinesTemplate = require('../templates/wine-listing.handlebars')

const onSignUpSuccess = function () {
  $('h1').text('You have successfully signed up!')
}

const failure = function () {
  $('h1').text('You have failed!')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('h1').text(`Welcome ${responseData.user.email}!`)
  console.log(store.user)
}

const onChangePasswordSuccess = function (responseData) {
  $('h1').text('You have successfully changed your password!')
}

const onSignOutSuccess = () => {
  store.user = null
  console.log('You have signed out!')
}

const onCreateWineSuccess = function (responseData) {
  store.wine = responseData.wine
  const listOfWines = JSON.stringify(store.wine)
  console.log(store.wine)
  console.log(store.wine.id)
  $('h1').text(listOfWines)
}

const onGetWinesSuccess = function (responseData) {
  const showWinesHtml = showWinesTemplate({ wines: responseData.wines })
  $('.content').append(showWinesHtml)
}

const onGetWineSuccess = function (responseData) {
  $('content').text(${wine.name})
}

const onChangeWineSuccess = function (responseData) {
  const listOfWines = JSON.stringify(responseData)
  $('h1').text(listOfWines)
}

const onDeleteWineSuccess = function (responseData) {
  $('h1').text('You have deleted this entry!')
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
  $('content').text(`Your favorite wine is ${result.name}`)
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
