let firebaseConfig = {
    apiKey: "AIzaSyDhUeLiIpLFRTLVF6D9cKkLuhYi-PyI4JU",
    authDomain: "wattz-b6cf2.firebaseapp.com",
    databaseURL: "https://wattz-b6cf2.firebaseio.com",
    projectId: "wattz-b6cf2",
    storageBucket: "wattz-b6cf2.appspot.com",
    messagingSenderId: "924061828045",
    appId: "1:924061828045:web:898e1081b604bcdb77fa84",
    measurementId: "G-XJX73CL06J"
}

function getInput() {
    Number.parseInt()
    let i = Number.parseInt(document.getElementById("input").value);
    
    document.getElementById("content-title").textContent = dataArray[i].title;
    document.getElementById("content-content").textContent = dataArray[i].content;

    requestAnimationFrame(getInput);
}

firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let ref = database.ref("data");

let dataArray = [];

ref.on("value", (data) => {
    let content = data.val();
    let keys = Object.keys(content);

    for(let i = 0; i < keys.length; i++) {
        let k = keys[i]
        dataArray[i] = content[k];
    }

    console.log(dataArray);
    getInput();
})