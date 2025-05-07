console.log('javascript is linked')

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form')
  const output = document.querySelector('#formoutput')

  form.addEventListener('submit', function (event) {
    event.preventDefault() // Prevent the default form submission behavior

    const firstName = document.querySelector('#firstname').value
    const secondName = document.querySelector('#secondname').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    const displayMessage = `
    <h3>Thanks for reaching out!</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Second Name:</strong> ${secondName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `

    output.innerHTML = displayMessage
    // Display the message in the output div
    form.reset()
  })
})
