// const arr = N => [ /* the numbers 0 to N-1 */ ];

function arr(N){
    var myArr = [];
    for (var i = 0; i < N; i++){
        myArr.push(i);
    }
    return myArr;
}

console.log(arr(4)) // [0,1,2,3]