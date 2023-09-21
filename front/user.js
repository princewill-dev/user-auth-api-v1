// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('signupForm');
//     const messageElement = document.getElementById('message');

//     if (form) { // Check if the form exists
//         form.addEventListener('submit', async function(e) {
//             e.preventDefault(); // prevent the default form submission behavior

//             messageElement.innerText = 'Processing...'; // display the processing message

//             const formData = new FormData(form);
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/api/register', {
//                     method: 'POST',
//                     body: formData,
//                 });

//                 const responseData = await response.json();

//                 if (response.ok) {
//                     // If everything goes well, redirect to login.html
//                     window.location.href = 'login.html';
//                 } else {
//                     // Display the error message from the server
//                     messageElement.innerText = responseData.message || 'An error occurred';
//                 }
//             } catch (error) {
//                 // Handle any other errors like network errors, etc.
//                 messageElement.innerText = 'An error occurred. Please try again.';
//             }
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const loginMessageElement = document.getElementById('loginMessage');

//     if (loginForm) {
//         loginForm.addEventListener('submit', async function(e) {
//             e.preventDefault();

//             loginMessageElement.innerText = 'Processing...';

//             const formData = new FormData(loginForm);
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/api/login', {
//                     method: 'POST',
//                     body: formData,
//                 });

//                 const responseData = await response.json();

//                 if (response.ok) {
//                     // Store user data in sessionStorage (but NOT the token since it's in an HttpOnly cookie)
//                     sessionStorage.setItem('user', JSON.stringify(responseData.user));
//                     sessionStorage.setItem('isLoggedIn', 'true');

//                     window.location.href = 'dashboard.html';
//                 } else {
//                     // If there's a validation message, display it. Otherwise, show a generic message
//                     if (responseData.message.email || responseData.message.password) {
//                         const emailError = responseData.message.email ? responseData.message.email[0] : '';
//                         const passwordError = responseData.message.password ? responseData.message.password[0] : '';
//                         loginMessageElement.innerText = emailError + ' ' + passwordError;
//                     } else {
//                         loginMessageElement.innerText = responseData.message || 'Login failed. Please try again.';
//                     }
//                 }
//             } catch (error) {
//                 loginMessageElement.innerText = 'An error occurred. Please try again.';
//             }
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', async function() {
//     try {
//         const response = await fetch('http://127.0.0.1:8000/api/check-auth-status', {
//             method: 'GET',
//             credentials: 'include', // This ensures cookies are sent with the request
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });

//         const responseData = await response.json();

//         if (response.ok && responseData.success) {
//             // Display user data
//             document.getElementById('userEmail').innerText = responseData.user.email;
//             document.getElementById('userName').innerText = responseData.user.name;
//             document.getElementById('userPhone').innerText = responseData.user.phone;
//         } else {
//             // If not authenticated, redirect to login.html
//             window.location.href = 'login.html';
//         }
//     } catch (error) {
//         console.error("Error fetching authentication status:", error);
//         window.location.href = 'login.html'; // In case of any error, redirect to login
//     }
// });




// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const loginMessageElement = document.getElementById('loginMessage');

//     if (loginForm) {
//         loginForm.addEventListener('submit', async function(e) {
//             e.preventDefault();

//             loginMessageElement.innerText = 'Processing...';

//             const formData = new FormData(loginForm);
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/api/login', {
//                     method: 'POST',
//                     body: formData,
//                 });

//                 const responseData = await response.json();

//                 if (response.ok) {
//                     // Store user data for use in dashboard.html or use a more secure method depending on your application's needs
//                     // sessionStorage.setItem('user', JSON.stringify(responseData));

//                     localStorage.setItem('user', JSON.stringify(response.user)); // Store user data
// 					localStorage.setItem('token', response.token); // Store auth token

//                     window.location.href = 'dashboard.html';
//                 } else {
//                     loginMessageElement.innerText = responseData.message || 'Login failed. Please try again.';
//                 }
//             } catch (error) {
//                 loginMessageElement.innerText = 'An error occurred. Please try again.';
//             }
//         });
//     }
// });


