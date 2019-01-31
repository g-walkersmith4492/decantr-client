const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignUp = function (event) {
  console.log('Nice click!')
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateWine = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.createWine(formData)
    .then(ui.onCreateWineSuccess)
    .catch(ui.onCreateWineFailure)
}

const onGetWines = (event) => {
  event.preventDefault()
  api.getWines()
    .then(ui.onGetWinesSuccess)
    .catch(ui.onGetWinesFailure)
}

const onGetWine = (event) => {
  event.preventDefault()
  const dataid = getFormFields(event.target).id
  api.getWine(dataid)
    .then(ui.onGetWineSuccess)
    .catch(ui.onGetWineFailure)
}

const onChangeWine = function (event) {
  event.preventDefault()
  const dataid = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  console.log(formData)
  console.log(dataid)
  api.changeWine(dataid, formData)
    .then(ui.onChangeWineSuccess)
    .catch(ui.onChangeWineFailure)
}

const onDeleteWine = (event) => {
  event.preventDefault()
  const dataid = $(event.target).closest('section').data('id')
  api.deleteWine(dataid)
    .then(() => onGetWines(event))
    .catch(ui.onDeleteWineFailure)
}

const onFavoriteWine = (event) => {
  event.preventDefault()
  api.getWines()
    .then(ui.onFavoriteWineSuccess)
    .catch(ui.onFavoriteWineFailure)
}

const addHandlers = () => {
  $('#signupform').on('submit', onSignUp)
  $('#signinform').on('submit', onSignIn)
  $('#changepasswordform').on('submit', onChangePassword)
  $('.signoutbutton').on('click', onSignOut)
  $('#createwineform').on('submit', onCreateWine)
  $('#getwinesbutton').on('click', onGetWines)
  $('#getwineform').on('submit', onGetWine)
  $('#deletewinebutton').on('click', onDeleteWine)
  $('#favoritewinebutton').on('click', onFavoriteWine)
  $('body').on('click', '.delete-button', onDeleteWine)
  $('body').on('submit', '.changewineform2', onChangeWine)
  $('.modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
}

module.exports = {
  addHandlers
}
