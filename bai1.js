function findMinScore(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    } return min;
}
