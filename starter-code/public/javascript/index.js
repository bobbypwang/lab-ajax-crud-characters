const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    charactersAPI.getOneRegister(document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value)
  }

  document.getElementById('delete-one').onclick = function () {
    charactersAPI.deleteOneRegister(document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value)
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()

    let charData= {
      id: document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value,
      name: document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value,      
      occupation: document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value,
      weapon: document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value,
      cartoon: document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked
    }

    charactersAPI.updateOneRegister(charData)
  }


  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()

    let charData = {
      name: document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value,
      occupation: document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value,
      weapon: document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value,
      cartoon: document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked
    }

    charactersAPI.createOneRegister(charData)
  }
  
})