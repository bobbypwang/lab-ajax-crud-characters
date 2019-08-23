class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(res => {

        console.log(res)

        document.querySelector(".characters-container").innerHTML = ""

        for (let i=0;i < res.data.length;i++) {
          let charBox = `<div class="character-info">
          <div class="id">Id: ${res.data[i].id}</div>
          <div class="name">Name: ${res.data[i].name}</div>
          <div class="occupation">Occupation: ${res.data[i].occupation}</div>
          <div class="cartoon">Cartoon: ${res.data[i].cartoon}</div>
          <div class="weapon">Weapon: ${res.data[i].weapon}</div>
          </div>`
        
        document.querySelector(".characters-container").innerHTML += charBox
        }
      })
      .catch(err => {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">Unable to fetch all.<br />${err}</div>`
      })
  }

  getOneRegister(idSearch) {
    axios.get(`${this.BASE_URL}/characters/${idSearch}`)
      .then(res => {

        let charBox = `<div class="character-info">
        <div class="id">Id: ${res.data.id}</div>
        <div class="name">Name: ${res.data.name}</div>
        <div class="occupation">Occupation: ${res.data.occupation}</div>
        <div class="cartoon">Cartoon: ${res.data.cartoon}</div>
        <div class="weapon">Weapon: ${res.data.weapon}</div>
        </div>`

        document.querySelector(".characters-container").innerHTML = charBox

      })
      .catch(err => {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">Unable to pull ID: ${idSearch}.<br />${err}</div>`
      })
  } 

  deleteOneRegister(idSearch) {
    axios.delete(`${this.BASE_URL}/characters/${idSearch}`)
    .then(res => {
      document.querySelector(".characters-container").innerHTML = `<div class="character-info">${res.data.name} (ID: ${idSearch}) has been deleted.</div>`
      document.querySelector("#delete-one").setAttribute("style", "background-color: green;");
    })
    .catch(err => {
      document.querySelector(".characters-container").innerHTML = `<div class="character-info">Unable to delete ID: ${idSearch}.<br/>${err}</div>`
      document.querySelector("#delete-one").setAttribute("style", "background-color: red;");
    })
  }

  createOneRegister(charData) {
    axios.post(`${this.BASE_URL}/characters/`, charData)

    .then(res => {
      if (charData.cartoon) {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">Cartoon character ${charData.name} the ${charData.occupation} carryinng a ${charData.weapon} has been created.</div>`
      } else {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">${charData.name} the ${charData.occupation} carryinng a ${charData.weapon} has been created.</div>`
      }     
      document.querySelector("#new-character-form #send-data").setAttribute("style", "background-color: green;");
    })
    .catch(err => {
      document.querySelector(".characters-container").innerHTML = `<div class="character-info">${err}</div>`
      document.querySelector("#new-character-form #send-data").setAttribute("style", "background-color: red;");
    })
  }

  updateOneRegister(charData) {
    axios.patch(`${this.BASE_URL}/characters/${charData.id}`, charData)

      .then(res => {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">(ID:${charData.id}) has been updated.<br/></div>`
        document.querySelector("#edit-character-form #send-data").setAttribute("style", "background-color: green;");
      })
      .catch(err => {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">Error<br />>${err}</div>`
        document.querySelector("#edit-character-form #send-data").setAttribute("style", "background-color: red;");
      })
  }

}