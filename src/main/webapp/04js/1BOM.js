function f1() {
    let output = ``;
    for(let key in window) {
        output += `<hr> ${key} : ${window[key]}`;
    }

    heres.innerHTML = output;
    console.dir(window);
}

function f2() {
    let output = ``;
    for(let key in document) {
        output += `<hr> ${key} : ${document[key]}`;
    }

    heres.innerHTML = output;
    console.dir(document);
}

function f3() {
    let output = ``;
    for(let key in navigator) {
        output += `<hr> ${key} : ${navigator[key]}`;
    }

    heres.innerHTML = output;
    console.dir(navigator);

    let userAgent = navigator.userAgent;
    
    //iPhone, Android
    if(userAgent.includes("iPhone") || userAgent.includes("Android")) {
        alert("당신은 모바일을 이용해서 접속했습니다.");
    } else {
        alert("PC로 접속했다.");
    }
}

function f4() {
    let output = ``;
    for(let key in screen) {
        output += `<hr> ${key} : ${screen[key]}`;
    }

    heres.innerHTML = output;
    console.dir(screen);
}

function f5() {
    let output = ``;
    for(let key in history) {
        output += `<hr> ${key} : ${history[key]}`;
    }

    heres.innerHTML = output;
    console.dir(history);
}

function f6() {
    let output = ``;
    for(let key in location) {
        output += `<hr> ${key} : ${location[key]}`;
    }

    heres.innerHTML = output;
    console.dir(location);
}

function f7() {
    let origin = location.origin;
    let pathname = location.pathname;
    let path = pathname.substring(0, pathname.indexOf("/",1)); // pathname에서 path만 구하기.

    console.log(path);

    location.href = origin + path + "/1BOM.js";
}

function f8() {
    location.reload();
}

function f9() {
    history.back();
}

function f10() {
    history.go();
}
