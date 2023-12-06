function countZeros(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(rightIdx >= leftIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx)/2)
        if((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
            return arr.length - midIdx
        }else if (arr[midIdx] === 1) {
            leftIdx = midIdx++
        }
    }
    return -1
}