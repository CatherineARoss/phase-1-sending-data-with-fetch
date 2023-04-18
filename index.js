// Add your code here
function submitData(name, email) {
    const formData = { name: name, email: email };
  
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const idDiv = document.createElement('div');
        idDiv.innerHTML = id;
        document.body.appendChild(idDiv);
      })
      .catch(error => {
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = error.message;
        document.body.appendChild(errorDiv);
      });
  }






