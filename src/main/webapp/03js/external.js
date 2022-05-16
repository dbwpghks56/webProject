function call6() {
    let arr2 = [];
    arr2.push(new Student("유제환", 100, 90, 80));
    arr2.push(new Student("감블러", 45, 56, 14));
    arr2.push(new Student("김진우", 98, 67, 45));
    arr2.push(new Student("김똘복", 76, 56, 98));
    arr2.push(new Student("탬탬버린", 45, 67, 87));

    // 생성자 함수를 이용해서 만든 객체들이 공유하는 공간 : prototype
    Student.prototype.getSum = function() {
        return this.java + this.sql + this.js;
    };
    Student.prototype.getAvg = function() {
        return Math.floor(this.getSum() / 3);
    };
    Student.prototype.toString = function() {
        return `<br> ${this.name}<span> : 총점 :  </span>${this.getSum()} 
        <span>: 평균 : </span>${Math.floor(this.getAvg())}`;
    };

    // for(let index in arr2) {
    //     here.innerHTML += arr2[index];
    // }
    return arr2;
}

function Student(name, java, sql, js) {
    this.name = name;
    this.java = java;
    this.sql = sql;
    this.js = js;
}