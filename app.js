async function getUserAsync(name) {
    let response = await fetch ('https://jsonplaceholder.typicode.com/users/');
    let data = await response.json()
    return data;
}
getUserAsync('id')
    .then(data => console.log(data))