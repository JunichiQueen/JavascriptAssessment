function newRequest(method, url){
    return new Promise((res, rej) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if(req.status == 200){
                res(req);
            } else {
                const reason = new Error("fail");
                rej(reason);
            }
        };
        req.open(method, url);
        req.send();
       

    });
}

function get10Movies(){
    let x = document.getElementById("texty").value;
    // let table = document.createElement("table");
    // let tablerow = document.createElement("tr");
    // table.appendChild(tablerow);
    
    newRequest("GET", "http://www.omdbapi.com/?s=" + x + "&apikey=30f9ca8b").then(req => {
        console.log(req.responseText);
        let reqObject = JSON.parse(req.responseText);
        console.log(x);
        for (var index in reqObject){
            console.log(reqObject[index]);
            let y = document.createElement("td");
            y.innerText = reqObject[index];
            document.getElementById("tablerow").appendChild(y);
        }

        // let printout = document.createElement("p");
        // printout.innerText = req.responseText;
        // document.getElementById("display").appendChild(printout);
    })
}

function getAMovie(){
    let x = document.getElementById("texty").value;
    
    newRequest("GET", "http://www.omdbapi.com/?t=" + x + "&apikey=30f9ca8b").then(req => {
        let reqObject = JSON.parse(req.responseText);
        //console.log(x);
        for (var index in reqObject){
            console.log(reqObject[index]);
            let y = document.createElement("td");
            y.innerText = reqObject[index];
            document.getElementById("tablerow").appendChild(y);
        }



    })
}