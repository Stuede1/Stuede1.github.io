fetch("./data.json")
.then(response => response.json())
.then(myUsers => loadUsers(myUsers));

function loadUsers(myUsers) {
    var user1 = document.getElementById("user1"); 
    var user2 = document.getElementById("user2");
    var user3 = document.getElementById("user3");
    var user4 = document.getElementById("user4");
    var user5 = document.getElementById("user5"); 
    var user6 = document.getElementById("user6");
    var user7 = document.getElementById("user7");
    var user8 = document.getElementById("user8");
    var user9 = document.getElementById("user9");
    var user11 = document.getElementById("user11");
    var user22 = document.getElementById("user22");
    var user33 = document.getElementById("user33");
    var user44 = document.getElementById("user44");
    var user55 = document.getElementById("user55");
    var user66 = document.getElementById("user66");
    var user77 = document.getElementById("user77");
    var user88 = document.getElementById("user88");
    var user99 = document.getElementById("user99");


    for (var i = 0; i<myUsers.userPost.length; i++){
        // let name = myUsers.userPost[i].name;
        let postid = myUsers.userPost[i].postid;
        let item = myUsers.userPost[i].item;
        let username = myUsers.userPost[i].username;
        let location = myUsers.userPost[i].location;
        let url = myUsers.userPost[i].url;

        let imgPost = document.createElement("div");
        imgPost.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtPost = document.createElement("p");
        txtPost.innerHTML = `<p class="card-text"> <strong>Item: </strong>${item}<br><strong>Location: </strong>${location}<br><strong>Username: </strong>${username}</p>`;


        if (myUsers.userPost[i].postid === 1) {
            user1.appendChild(imgPost);
            user11.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 2) {
            user2.appendChild(imgPost);
            user22.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 3) {
            user3.appendChild(imgPost);
            user33.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 4) {
            user4.appendChild(imgPost);
            user44.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 5) {
            user5.appendChild(imgPost);
            user55.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 6) {
            user6.appendChild(imgPost);
            user66.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 7) {
            user7.appendChild(imgPost);
            user77.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 8) {
            user8.appendChild(imgPost);
            user88.appendChild(txtPost);
        } else if (myUsers.userPost[i].postid === 9) {
            user9.appendChild(imgPost);
            user99.appendChild(txtPost);
        }
    } // end of for

    // Toggle Avenger's button :
    var toggleButton1 = document.getElementById('toggleCardButton1');
    var card1 = document.getElementById('card1');
    var collapsableCard1 = new bootstrap.Collapse(card1, {toggle: true});

    let email = myUsers.userPost[0].email;
    let card11 = document.createElement("p");
    card11.innerHTML = `<p class="card-text"> <strong>Email: ${email}</strong></p>`;

    toggleButton1.addEventListener('click', function () {
        card1.appendChild(card11);
        collapsableCard1.toggle();
        
    }); 

    // Toggle Avenger's button :
    var toggleButton2 = document.getElementById('toggleCardButton2');
    var card2 = document.getElementById('card2');
    var collapsableCard2 = new bootstrap.Collapse(card2, {toggle: true});

    let email2 = myUsers.userPost[1].email;
    let card22 = document.createElement("p");
    card22.innerHTML = `<p class="card-text"> <strong>Email: ${email2}</strong></p>`;

    toggleButton2.addEventListener('click', function () {
        card2.appendChild(card22);
        collapsableCard2.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton3 = document.getElementById('toggleCardButton3');
    var card3 = document.getElementById('card3');
    var collapsableCard3 = new bootstrap.Collapse(card3, {toggle: true});

    let email3 = myUsers.userPost[2].email;
    let card33 = document.createElement("p");
    card33.innerHTML = `<p class="card-text"> <strong>Email: ${email3}</strong></p>`;

    toggleButton3.addEventListener('click', function () {
        card3.appendChild(card33);
        collapsableCard3.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton4 = document.getElementById('toggleCardButton4');
    var card4 = document.getElementById('card4');
    var collapsableCard4 = new bootstrap.Collapse(card4, {toggle: true});

    let email4 = myUsers.userPost[3].email;
    let card44 = document.createElement("p");
    card44.innerHTML = `<p class="card-text"> <strong>Email: ${email4}</strong></p>`;

    toggleButton4.addEventListener('click', function () {
        card4.appendChild(card44);
        collapsableCard4.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton5 = document.getElementById('toggleCardButton5');
    var card5 = document.getElementById('card5');
    var collapsableCard5 = new bootstrap.Collapse(card5, {toggle: true});

    let email5 = myUsers.userPost[4].email;
    let card55 = document.createElement("p");
    card55.innerHTML = `<p class="card-text"> <strong>Email: ${email5}</strong></p>`;

    toggleButton5.addEventListener('click', function () {
        card5.appendChild(card55);
        collapsableCard5.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton6 = document.getElementById('toggleCardButton6');
    var card6 = document.getElementById('card6');
    var collapsableCard6 = new bootstrap.Collapse(card6, {toggle: true});

    let email6 = myUsers.userPost[5].email;
    let card66 = document.createElement("p");
    card66.innerHTML = `<p class="card-text"> <strong>Email: ${email6}</strong></p>`;

    toggleButton6.addEventListener('click', function () {
        card6.appendChild(card66);
        collapsableCard6.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton7 = document.getElementById('toggleCardButton7');
    var card7 = document.getElementById('card7');
    var collapsableCard7 = new bootstrap.Collapse(card7, {toggle: true});

    let email7 = myUsers.userPost[6].email;
    let card77 = document.createElement("p");
    card77.innerHTML = `<p class="card-text"> <strong>Email: ${email7}</strong></p>`;

    toggleButton7.addEventListener('click', function () {
        card7.appendChild(card77);
        collapsableCard7.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton8 = document.getElementById('toggleCardButton8');
    var card8 = document.getElementById('card8');
    var collapsableCard8 = new bootstrap.Collapse(card8, {toggle: true});

    let email8 = myUsers.userPost[7].email;
    let card88 = document.createElement("p");
    card88.innerHTML = `<p class="card-text"> <strong>Email: ${email8}</strong></p>`;

    toggleButton8.addEventListener('click', function () {
        card8.appendChild(card88);
        collapsableCard8.toggle();
    }); 

    // Toggle Avenger's button :
    var toggleButton9 = document.getElementById('toggleCardButton9');
    var card9 = document.getElementById('card9');
    var collapsableCard9 = new bootstrap.Collapse(card9, {toggle: true});

    let email9 = myUsers.userPost[8].email;
    let card99 = document.createElement("p");
    card99.innerHTML = `<p class="card-text"> <strong>Email: ${email9}</strong></p>`;

    toggleButton9.addEventListener('click', function () {
        card9.appendChild(card99);
        collapsableCard9.toggle();
    }); 


} // end of function

