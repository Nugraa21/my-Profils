//---------------------------------------//
//                                       //
//                                       //
//  Java Scripts   @Nugra21.github.io    //
//                                       //
//                                       //
//---------------------------------------//

//------------------------  Form Alert 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwymc5Ky1gkA8lNCNy7CVZJk8WPrCfUfZvB71mv4t7IB1icybEa4dnRrRtPXV37g-Y-/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Pesan ada tekah terkirim ( Berhasil di kirim ) ..!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
//------------------------  Form Alert 
