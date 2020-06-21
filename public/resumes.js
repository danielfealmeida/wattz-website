let subject = 1;
let index = 1;

function getInput() {
    subject = document.getElementById("input").value;
    index = document.getElementById("input2").value;

    requestAnimationFrame(getInput);
}    

getInput();

async function getContent() {
    data = {subject, index};

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch("/content", options);
    const json = await response.json();
    
    document.getElementById("content-title").innerHTML = json.title;
    document.getElementById("content-content").innerHTML = json.content;
} 

document.getElementById("click-area").addEventListener("click", () => {
    getContent();
});

getContent();