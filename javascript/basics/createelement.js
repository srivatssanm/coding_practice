const body = document.querySelector("body")

function createInput(inputType,inputid,inputPlaceholder){
    const input = window.document.createElement("input")
    input.setAttribute("type",inputType);
    input.setAttribute("id",inputid);
    input.setAttribute("name",inputid);
    input.setAttribute("placeholder",inputPlaceholder);
    return input;
}

body.appendChild(createInput("text","username","Enter your username"));
body.appendChild(createInput("password","password","Enter your password"));
console.log(window.document);