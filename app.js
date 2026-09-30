let usersData = [];
function displayUsers() {
    const userContainer = document.getElementById('users')

fetch('https://jsonplaceholder.typicode.com/users')

.then(r => {
    if(!r.ok) {
        throw new Error(`HTTP Error status! ${r.status}`)
    }
    return r.json();
})

.then(result => {

    usersData = result;

    userContainer.innerHTML = "";
    
    result.forEach(user => {
        // console.log(user.name)
        userContainer.innerHTML += `
            <div class="user-card">
                <h3 class="name">${user.name} </h3>
                <p class="company">${user.company.name} </p>
                <div class="contact-info">
                    <span>Email:</span>
                    <a class="email" href="mailto:${user.email}">${user.email}</a>
                </div>
            </div>
        `;
    });
})


.catch(error => {
    userContainer.innerHTML = `Something went wrong. Please try again. 
    ${error.message}`
})
}
displayUsers()

function searchUsers() {
    const userElemnt = document.getElementById('username');
    const userContainer = document.getElementById('users');
    const userValue = userElemnt.value; 
    if (userValue === '') {
        displayUsers();
        return;
    } 
    userContainer.innerHTML = "";
    const filteredUsers = usersData.filter(user => {
        return user.name.includes(userValue);
    }) 
    filteredUsers.forEach(user => {
        userContainer.innerHTML += `
            <div class="user-card">
                <h3 class="name">${user.name} </h3>
                <p class="company">${user.company.name} </p>
                <div class="contact-info">
                    <span>Email:</span>
                    <a class="email" href="mailto:${user.email}">${user.email}</a>
                </div>
            </div>
        `;
    });
    console.log(filteredUsers);
}

// const form = document.querySelector('form');

//     form.addEventListener('input', (event) => {
//     event.preventDefault();
//     searchUsers()
// });

const userInput = document.getElementById('username');

userInput.addEventListener('input', () => {
    searchUsers();
});
