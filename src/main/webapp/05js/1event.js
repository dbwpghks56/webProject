function call() {
    alert(this.innerHTML);
    console.log(this);
}

function call2() {
    let a = document.querySelector("input[name='userid']").value;

    if(a != "admin") {
        return false;
    }
    return true;
}