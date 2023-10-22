fetch("./bwr.json")
.then(response => response.json())
.then(myUsers => loadUsers(myUsers));

function loadUsers(myUsers) {
    var user1 = document.getElementById("user1"); 
    var user2 = document.getElementById("user2");
    var user3 = document.getElementById("user3");

    var user11 = document.getElementById("user11");
    var user22 = document.getElementById("user22");
    var user33 = document.getElementById("user33");



    for (var i = 0; i<myUsers.userPost.length; i++){
        // let name = myUsers.userPost[i].name;
        let postid = myUsers.userPost[i].postid;
        let username = myUsers.userPost[i].username;
        let location = myUsers.userPost[i].location;
        let url = myUsers.userPost[i].url;
        let email = myUsers.userPost[i].email;
        let item = myUsers.userPost[i].item;

        let imgPost = document.createElement("div");
        imgPost.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtPost = document.createElement("p");
        txtPost.innerHTML = `<p class="card-text"> <strong>Item: </strong>${item}<br><strong>Location: </strong>${location}<br><strong>Username: </strong>${username}<br><strong>Email: </strong>${email}</p>`;


        if (myUsers.userPost[i].postid === 2) {
            user1.appendChild(imgPost);
            user11.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 5) {
            user2.appendChild(imgPost);
            user22.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 8) {
            user3.appendChild(imgPost);
            user33.appendChild(txtPost);
        }
    } // end of for

} // end of function

