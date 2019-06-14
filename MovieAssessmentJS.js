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

        console.log(reqObject.Search[3]);
        

        for (let i=0; i<10; i++){
            let searcharray = reqObject.Search[i];
            //console.log(reqObject.search[2]);
            let y = document.createElement("td");
            y.innerText = searcharray.Title;
            document.getElementById("tablerow").appendChild(y);
            let a = document.createElement("td");
            a.innerText = searcharray.Year;
            document.getElementById("tablerow").appendChild(a);
            let b = document.createElement("td");
            b.innerText = searcharray.imdbID;
            document.getElementById("tablerow").appendChild(b);
            let c = document.createElement("td");
            c.innerText = searcharray.Type;
            document.getElementById("tablerow").appendChild(c);
            let d = document.createElement("td");
            d.innerText = searcharray.Poster;
            document.getElementById("tablerow").appendChild(d);

            
            // for (var Title in searcharray){
            //     let y = document.createElement("td");
            //     y.innerText = searcharray.Title;
            //     document.getElementById("tablerow").appendChild(y);
            // }
        }

        // for (var index in reqObject){
        //     console.log(reqObject[index]);
        //     let y = document.createElement("td");
        //     // console.log( reqObject[index])
        //     y.innerText = reqObject[index];
            
        //     document.getElementById("tablerow").appendChild(y);
        // }

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