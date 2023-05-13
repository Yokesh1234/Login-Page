document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form submission
	
	// Get input values
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	// Check if username and password are correct
	if (username === "admin" && password === "password") {
	  alert("Login successful!");
	  // Redirect to another page or perform other actions
	} else {
	  var errorElement = document.createElement("p");
	  errorElement.innerText = "Invalid username or password";
	  errorElement.classList.add("error");
	  document.getElementById("loginForm").appendChild(errorElement);
	}
  });
  
