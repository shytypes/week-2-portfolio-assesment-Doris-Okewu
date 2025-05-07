const form = document.querySelector('#contact-form')
const output = document.querySelector('#form-output')

form.addEventListener('submit', function (e) {
  e.preventDefault() // Prevent the default form submission behavior
  const firstName = document.querySelector('#first-name').value
  const secondName = document.querySelector('#second-name').value
  const email = document.querySelector('#email').value
  const message = document.querySelector('#message').value

  output.innerHTML = `
    <h2>Submitted Information:</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Second Name:</strong> ${secondName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `
  form.reset()
}) // Reset the form after submission
