let request = new XMLHttpRequest();

function displayNicely(apiData){
    let newData = JSON.parse(apiData);
    document.getElementById("data").innerHTML = "<strong>Name:</strong> " + newData.name;
}

request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
};

//readystate = XMLHttpRequest constructor object has 5 readystates, in practice we only ever use last one(no. 4). 4 means request has been received, sent back, done and finito! ready.

request.open("GET", "https://swapi.co/api/people/1/");

request.send();