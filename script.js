
// prendiamo la temperatura max e min di Roma per oggi!

const getLibri = function () {
    fetch('https://striveschool-api.herokuapp.com/books'
    )
      .then((res) => {
        if (res.ok) {
        
          return res.json()
        } else {
          if (res.status === 404) {
            throw new Error('Not found')
          } else if (res.status === 500) {
            throw new Error('Internal Server Error')
          } else {
            throw new Error('Errore nella chiamata API')
          }
        }
      })
      .then((data) => {
        console.log(data)
        let spinnerContainer = document.getElementById('spinner-container')
        spinnerContainer.classList.add('d-none')
        //   prendo un riferimento alla colonna
        let cardImg = document.querySelector('img')
        cardImg.setAttribute()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
getLibri()