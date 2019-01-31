const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignUp = function (event) {
  console.log('Nice click!')
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Nice Click!')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Nice Click!')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.failure)
}

const onCreateWine = function (event) {
  event.preventDefault()
  console.log('Nice Click!')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.createWine(formData)
    .then(ui.onCreateWineSuccess)
    .catch(ui.failure)
}

const onGetWines = (event) => {
  event.preventDefault()
  api.getWines()
    .then(ui.onGetWinesSuccess)
    .catch(ui.failure)
}

const onGetWine = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  // console.log(formData)
  api.getWine(formData)
    .then(ui.onGetWinesSuccess)
    .catch(ui.failure)
}

const onChangeWine = function (event) {
  event.preventDefault()
  console.log('Nice Click!')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changeWine(formData)
    .then(ui.onChangeWineSuccess)
    .catch(ui.failure)
}

const onDeleteWine = (event) => {
  event.preventDefault()
  const dataid = $(event.target).closest('section').data('id')
  api.deleteWine(dataid)
    .then(ui.onDeleteWineSuccess)
    .catch(ui.failure)
}

const onFavoriteWine = (event) => {
  event.preventDefault()
  api.getWines()
    .then(ui.onFavoriteWineSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#signupform').on('submit', onSignUp)
  $('#signinform').on('submit', onSignIn)
  $('#changepasswordform').on('submit', onChangePassword)
  $('.signoutbutton').on('click', onSignOut)
  $('#createwineform').on('submit', onCreateWine)
  $('#getwinesbutton').on('click', onGetWines)
  $('#getwineform').on('submit', onGetWine)
  $('#changewineform').on('submit', onChangeWine)
  $('#deletewinebutton').on('click', onDeleteWine)
  $('#favoritewinebutton').on('click', onFavoriteWine)
  $('body').on('click', '.delete-button', onDeleteWine)
}

module.exports = {
  addHandlers
}
