fetch("dataFr.json")
.then(response => response.json())
.then(myuser => loaduser(myuser));

function loaduser(myuser) {
    var user1 = document.getElementById("user1"); 
    var user2 = document.getElementById("user2"); 
    var user3 = document.getElementById("user3"); 
    
    
    

    for (var i = 0; i<myuser.users.length; i++){
        let name = myuser.users[i].name;
        let location = myuser.users[i].location;
        let description = myuser.users[i].description
        let roll = myuser.users[i].roll
        
        let txtUser = document.createElement("p");
        txtUser.innerHTML = `<p class="card-text"><strong> Name: </strong> ${name} <br> <strong>Location: </strong> ${location}<br> <strong>Description: </strong>${description}<br><strong>Price: </strong>${roll}</p>`;
        
       

        if (myuser.users[i].id === 1) {
            user1.appendChild(txtUser);
            } else if (myuser.users[i].id === 2) {
            user2.appendChild(txtUser);
            } else if (myuser.users[i].id === 3) {
            user3.appendChild(txtUser);
            } 
        }
    
        
    }