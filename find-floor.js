function findFloor(arr, num){
    let right = arr.length - 1
    let left = 0
    if(num >= arr[right]) return arr[right]
    if(num <= arr[left]) return arr[left]
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === num) return arr[mid]
        if(mid > 0 && arr[mid - 1] <= num && num <arr[mid]) {
            return arr[mid - 1]
        }
        if(num >= arr[mid]){
            left = mid++
        }
    }
    return -1
}