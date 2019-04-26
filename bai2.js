function tryRemoveFromArray(x){
    let arr = [12,6,3,7,21,5,7];
    if ((x > arr.length - 1)||(x < 0)){
        return arr;
    }
    if (x <= arr.length){
        for (i = 0; i < arr.length;i++){
            if (x === i){
                arr.splice(x,1);
            }
        }
    }
    return arr;
}

console.log(tryRemoveFromArray(6));
