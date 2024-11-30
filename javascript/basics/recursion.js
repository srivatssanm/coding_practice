function recursion(n){
    if(n>0){
        var result = n + recursion(n-1);
        console.log(result);
    }
    else{
        result = 0;
    }
    return result;
}

recursion(6);
// 1
// 3
// 6
// 10
// 15
// 21