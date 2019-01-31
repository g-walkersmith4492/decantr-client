const store = require('../store.js')
const showWinesTemplate = require('../templates/wine-listing.handlebars')

$('.button-secret').hide()

const onSignUpSuccess = function () {
  $('#user-message').text('You have successfully signed up!')
  $('#signupform').trigger('reset')
  $('#exampleModalCenter').modal('toggle')
}

const onSignUpFailure = function () {
  $('#user-message').text('You have failed to sign up!')
  $('#signupform').trigger('reset')
  $('#exampleModalCenter').modal('toggle')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#user-message').text(`Welcome ${responseData.user.email}!`)
  console.log(store.user)
  $('#signinform').trigger('reset')
  $('.button-secret').show()
  $('.button-auth').hide()
  $('#signUpModalCenter').modal('toggle')
}

const onSignInFailure = function () {
  $('#user-message').text('You have failed to sign in!')
  $('#signinform').trigger('reset')
  $('#signUpModalCenter').modal('toggle')
}

const onChangePasswordSuccess = function (responseData) {
  $('#user-message').text('You have successfully changed your password!')
  $('#changepasswordform').trigger('reset')
  $('#changePasswordModalCenter').modal('toggle')
}

const onChangePasswordFailure = function () {
  $('#user-message').text('You have failed to change your password!')
  $('#changepasswordform').trigger('reset')
  $('#changePasswordModalCenter').modal('toggle')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#user-message').text('You have signed out!')
  $('.button-secret').hide()
}

const onSignOutFailure = function () {
  $('#user-message').text('You have failed to sign out!')
}

const onCreateWineSuccess = function (responseData) {
  store.wine = responseData.wine
  const listOfWines = store.wine.name
  $('#user-message').text(listOfWines)
  $('#createwineform').trigger('reset')
  $('#createWineModalCenter').modal('toggle')
}

const onCreateWineFailure = function () {
  $('#user-message').text('You have failed to create a tasting!')
  $('#signupform').trigger('')
  $('#createwineform').trigger('reset')
  $('#createWineModalCenter').modal('toggle')
  $('.createWineModalCenter').modal('toggle')
}

const onGetWinesSuccess = function (responseData) {
  console.log(responseData.wines)
  const showWinesHtml = showWinesTemplate({ wines: responseData.wines })
  $('#user-message').html(showWinesHtml)
}

const onGetWinesFailure = function () {
  $('#user-message').text('You have failed to get your tastings!')
}

const onGetWineSuccess = function (responseData) {
  const showWinesHtml = showWinesTemplate({ wines: responseData.wine })
  $('#user-message').html(showWinesHtml)
  $('#getwineform').trigger('reset')
  $('#getWineModalCenter').modal('toggle')
}
const onGetWineFailure = function () {
  $('#user-message').text('You have failed to get your tasting!')
  $('#getwineform').trigger('reset')
  $('#getWineModalCenter').modal('toggle')
}

const onChangeWineSuccess = function (responseData) {
  $(`.modal-backdrop`).remove()
  $('#user-message').html('You have succesfully changed a tasting!')
  $('#changewineform2').trigger('reset')
  $('.changewinehandlebars').modal('toggle')
}

const onChangeWineFailure = function () {
  $('#user-message').text('You have failed to change your tasting!!')
  $('#changewineform2').trigger('reset')
  $('.changewinehandlebars').modal('toggle')
}

const onDeleteWineSuccess = function (responseData) {
  $('.content').text('You have deleted this tasting!')
}

const onDeleteWineFailure = function () {
  $('#user-message').text('You have failed to delete this tasting!')
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
  $('#user-message').html(`Wine Name: ${result.name}<br>
    Tasted on: ${result.date}<br>
    Country: ${result.country}<br>
    Grape Type: ${result.varietal}<br>
    Region: ${result.region}<br>
    Vintage: ${result.region}<br>
    ABV: ${result.region}<br>
    Rating: ${result.region}<br>
    Notes: ${result.region}<br>
    Tasting ID: ${result.id}

      `)
}

const onFavoriteWineFailure = function () {
  $('#user-message').text('You have failed to get your favorite wine!')
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
