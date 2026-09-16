const container =document.getElementById("user-container");

async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    displayUsers(data);
   
}
function displayUsers(data){
    data.forEach((user) =>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`<h3>${user.name}</h3>
            <p><strong>Email:</strong>${user.email}</p>
            <p><strong>Phone:</strong>${user.phone}</p>
            <p><strong>city:</strong>${user.address.city}</p>
            <p><strong>Company:</strong>${user.company.name}</p> `
        container.appendChild(card);
    })
}
fetchUsers();