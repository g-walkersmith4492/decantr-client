const store = require('../store.js')
const showWinesTemplate = require('../templates/wine-listing.handlebars')

// $('.wine-bottle').hover(
//   function () {
//     $('.decantr-title').css('color', 'gold')
//   })

$('.wine-bottle').hover(
  function () {
    $('.decantr-title').toggleClass('.decantr-title decantr-titleyellow')
  },
  function () {
    $('.wine-bottle').toggleClass('.decantr-title decantr-titleyellow')
  }
)

$('.button-secret').hide()
$('.page2').hide()

const onSignUpSuccess = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message').html('')
  $('#user-message-success').text('You have successfully signed up!')
  $('#signupform').trigger('reset')
  $('#exampleModalCenter').modal('hide')
}

const onSignUpFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to sign up!')
  $('#signupform').trigger('reset')
  $('#exampleModalCenter').modal('hide')
}

const onSignInSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  store.user = responseData.user
  $('#user-message-success').text(`Welcome ${responseData.user.email}!`)
  console.log(store.user)
  $('#signinform').trigger('reset')
  $('.button-secret').show()
  $('.button-auth').hide()
  $('#signUpModalCenter').modal('hide')
  $('.page1').hide()
  $('.page1').hide()
  $('.page2').show()
  $('#dropdownMenuButton').html(responseData.user.email)
}

const onSignInFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to sign in!')
  $('#signinform').trigger('reset')
  $('#signUpModalCenter').modal('hide')
}

const onChangePasswordSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-success').text('You have successfully changed your password!')
  $('#changepasswordform').trigger('reset')
  $('#changePasswordModalCenter').modal('hide')
}

const onChangePasswordFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to change your password!')
  $('#changepasswordform').trigger('reset')
  $('#changePasswordModalCenter').modal('hide')
}

const onSignOutSuccess = () => {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  store.user = null
  $('#user-message-success').text('You have signed out!')
  $('.button-secret').hide()
  $('.button-auth').show()
  $('.page1').show()
  $('.page2').show()
  $('.page2content').html('')
}

const onSignOutFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to sign out!')
}

const onCreateWineSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-ID').html(`Tasting ID: ${responseData.wine.id}`)
  store.wine = responseData.wine
  $('.page2content').html(`Wine Name: ${store.wine.name}<br>
    Tasted on: ${store.wine.date}<br>
    Country: ${store.wine.country}<br>
    Grape Type: ${store.wine.varietal}<br>
    Region: ${store.wine.region}<br>
    Vintage: ${store.wine.vintage}<br>
    ABV: ${store.wine.abv}<br>
    Rating: ${store.wine.rating}<br>
    Notes: ${store.wine.notes}<br>
      `)
  $('#createwineform').trigger('reset')
  $('#createWineModalCenter').modal('hide')
}

const onCreateWineFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to create a tasting!')
  $('#signupform').trigger('')
  $('#createwineform').trigger('reset')
  $('#createWineModalCenter').modal('hide')
  $('.createWineModalCenter').modal('hide')
}

const onGetWinesSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  console.log(responseData.wines)
  const showWinesHtml = showWinesTemplate({ wines: responseData.wines })
  console.log(showWinesHtml)
  if (responseData.wines.length === 0) {
    $('#user-message-failure').html('Please Create a Tasting!')
  } else {
    $('.page2content').html(showWinesHtml)
  }
}

const onGetWinesFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to get your tastings!')
}

const onGetWineSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-ID').text(`Tasting ID: ${responseData.wine.id}`)
  $('.page2content').html(`Wine Name: ${responseData.wine.name}<br>
    Tasted on: ${responseData.wine.date}<br>
    Country: ${responseData.wine.country}<br>
    Grape Type: ${responseData.wine.varietal}<br>
    Region: ${responseData.wine.region}<br>
    Vintage: ${responseData.wine.vintage}<br>
    ABV: ${responseData.wine.abv}<br>
    Rating: ${responseData.wine.rating}<br>
    Notes: ${responseData.wine.notes}<br>
      `)
  $('#getwineform').trigger('reset')
  $('#getWineModalCenter').modal('hide')
}
const onGetWineFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('Could Not Retrieve Tasting!')
  $('#getwineform').trigger('reset')
  $('#getWineModalCenter').modal('hide')
}

const onChangeWineSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('.modal-backdrop').remove()
  $('#user-message-ID').html(`Tasting ID: ${responseData.wine.id}`)
  $('.page2content').html(`Wine Name: ${responseData.wine.name}<br>
    Tasted on: ${responseData.wine.date}<br>
    Country: ${responseData.wine.country}<br>
    Grape Type: ${responseData.wine.varietal}<br>
    Region: ${responseData.wine.region}<br>
    Vintage: ${responseData.wine.vintage}<br>
    ABV: ${responseData.wine.abv}<br>
    Rating: ${responseData.wine.rating}<br>
    Notes: ${responseData.wine.notes}
      `)
  $('.changewineform2').trigger('reset')
  $('.changewinehandlebars3').modal('hide')
}

const onChangeWineFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('.modal-backdrop').remove()
  $('#user-message-failure').text('You have failed to change your tasting!!')
  $('.changewineform2').trigger('reset')
  $('.changewinehandlebars3').modal('hide')
}

const onDeleteWineFailure = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You have failed to delete this tasting!')
}

const onFavoriteWineSuccess = function (responseData) {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
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
  $('#user-message-ID').html(`Tasting ID: ${result.id}`)
  $('.page2content').html(`Wine Name: ${result.name}<br>
    Tasted on: ${result.date}<br>
    Country: ${result.country}<br>
    Grape Type: ${result.varietal}<br>
    Region: ${result.region}<br>
    Vintage: ${result.vintage}<br>
    ABV: ${result.abv}<br>
    Rating: ${result.rating}<br>
    Notes: ${result.notes}<br>
      `)
}

const onFavoriteWineFailure = function () {
  $('#user-message-success').html('')
  $('#user-message-failure').html('')
  $('#user-message-ID').html('')
  $('#user-message-failure').text('You do not have a favorite wine!')
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
  onFavoriteWineSuccess,
  onSignInFailure,
  onSignUpFailure,
  onChangePasswordFailure,
  onSignOutFailure,
  onCreateWineFailure,
  onGetWinesFailure,
  onGetWineFailure,
  onChangeWineFailure,
  onFavoriteWineFailure,
  onDeleteWineFailure
}
