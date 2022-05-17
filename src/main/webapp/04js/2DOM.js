function f1() {
    let element_node = document.createElement("h2");
    console.log(element_node);

    let text_node = document.createTextNode("hello");
    console.log(text_node);
    
    element_node.appendChild(text_node);

    let here = document.querySelector("#heres");
    here.appendChild(element_node);
}

function f2() {
    let here = document.querySelector("#heres");
    here.innerHTML += `<h2> Hello~ </h2>`;
}

function f3() {
    let imgsrc = "../images/animal.jpeg";
    heres.innerHTML += `<img src='${imgsrc}'>`;
}

function f4() {
    let element_node = document.createElement("img");
    console.log(element_node);
    
    // element_node.src = "../images/animal.jpeg";
    element_node.setAttribute("src", "../images/animal.jpeg");
    element_node.setAttribute("width", "300");
    element_node.setAttribute("height", "200");

    let here = document.querySelector("#heres");
    here.appendChild(element_node);
}

function f5() {
    let many = document.getElementsByName("food");

    many.forEach((e, i, a) => {
        heres.innerHTML += `<hr> ${e.value} : ${e.checked?"선택됨":"선택안됨"}`;
    });
}

function f6() {
    // NodeList type : 향상 for, forEach불가
    let many = document.getElementsByTagName("button");

    for(let index = 0; index < many.length; index++) {
        heres.innerHTML += `<hr> ${many[index].innerHTML}`;
    }
}

function f7() {
    let many = document.querySelectorAll("button");

    // for(let index = 0; index < many.length; index++) {
    //     heres.innerHTML += `<hr> ${many[index].innerHTML}`;
    // }
    many.forEach((e) => {
        heres.innerHTML += `<hr> ${e.innerHTML}`;
    })

    let many2 = document.querySelectorAll("input[name='food']");

    many2.forEach((e, i, a) => {
        heres.innerHTML += `<hr> ${e.value} : ${e.checked?"선택됨":"선택안됨"}`;
    });

    many2 = document.querySelectorAll("input:checked"); // 체크 된 것만 가져오깅

    many2.forEach((e, i, a) => {
        heres.innerHTML += `<hr> ${e.value} : ${e.checked?"선택됨":"선택안됨"}`;
    });
}

function f8() {
    let many = document.querySelectorAll("button");
    
    many.forEach((e,i,a) => {
        if(i % 2 == 0 ) {
            e.style.backgroundColor = "skyblue";
            e.style.color = "white";
        } else {
            e.style.border = "1px solid red";
        }
    });
}

function call() {
    if(this.checked) {
        this.nextElementSibling.style.backgroundColor = "pink";
    } else {
        this.nextElementSibling.style.backgroundColor = "white";
    }
}

function f9() {
    heres.parentNode.removeChild(heres);

    let many = document.querySelector(".foodSelect");
    many.parentNode.removeChild(many);
}