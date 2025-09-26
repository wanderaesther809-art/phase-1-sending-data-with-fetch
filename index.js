// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json()) // parse JSON from the response
    .then((data) => {
      // Append the new id to the DOM
      const p = document.createElement("p");
      p.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch((error) => {
      // Append the error message to the DOM
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
