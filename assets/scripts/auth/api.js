const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createWine = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/wines',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token

    }
  })
}

const getWines = () => {
  return $.ajax({
    url: config.apiUrl + '/wines',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getWine = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/wines/' + formData.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changeWine = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/wines/' + store.wineId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteWine = () => {
  return $.ajax({
    url: config.apiUrl + '/wines/' + store.wineId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createWine,
  getWines,
  getWine,
  changeWine,
  deleteWine
}
