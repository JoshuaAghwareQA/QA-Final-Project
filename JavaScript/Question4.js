// Question 4
// Fetch the first five users from DummyJSON API.

fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("First Five Users:");

        data.users.slice(0, 5).forEach(user => {
            console.log(user.firstName);
        });
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });