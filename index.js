const express = require("express");
const fs = require("fs");

const app = express()

let home = fs.readFileSync("public/index.html", "utf-8");
let study = fs.readFileSync("public/resumes.html", "utf-8");
let index = fs.readFileSync("public/index-page.html", "utf-8");

let jsonSubject = fs.readFileSync("subjects.json", `utf-8`);
let subjectData = JSON.parse(jsonSubject);

app.listen(3000, () => console.log(`> Server listening on port: 3000`))
app.use(express.static('public'));

app.use(express.json());

app.get("/home", (req, res) => {
    console.log("Request: " + req.url);
    res.end(home);
})

app.get("/study", (req, res) => {
    console.log("Request: " + req.url);

    //study = study.replace(/{{content}}/g, "This is the content.");

    res.end(study);
})

app.post("/content", (req, res) => {
    let data = req.body;

    console.log(data);

/*     switch(Number(data.subject)) {
        case 0: 
            subject = "portuguese"
            break;
        case 1: 
            subject = "english"
            break;
        case 2: 
            subject = "history"
            break;
        case 3: 
            subject = "math"
            break;
        case 4: 
            subject = "arts"
            break;
        case 5: 
            subject = "geography"
            break;
        case 6: 
            subject = "spanish"
            break;
        case 7:
            subject = "PE"
            break;
        case 8:
            subject = "science"
            break;
            case 7:
            subject = "religion"
            break;
        default:
            subject = "exeption"
            break;
    } */

    let response = {
        title: "",
        content: ""
    }

    if(subjectData[data.subject][Number(data.index)]) {
        response.title = subjectData[data.subject][Number(data.index)].title;
        response.content = subjectData[data.subject][Number(data.index)].content;
    }
    else {
        response.title = "This ID is invalid. Check it again.";
    }

    console.log(data.subject);

    res.json(response);
})

app.get("/index", (req, res) => {
    console.log("Request: " + req.url);

    res.end(index);
})