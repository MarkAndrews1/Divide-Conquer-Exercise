function sortedFreq(arr, num){
    function findFrist(arr, tar){
        let left = 0
        let right = arr.length -1
        let result = -1


        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(arr[mid] === tar){
                result = mid 
                right = mid - 1
            }else if(arr[mid] > tar){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return result
    }

    function findLast(arr, tar){
        let left = 0
        let right = arr.length -1
        let result = -1


        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(arr[mid] === tar){
                result = mid 
                left = mid + 1
            }else if(arr[mid] > tar){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return result
    }

    const firstIdx = findFrist(arr, num)
    const lastIdx = findLast(arr, num)
    if(firstIdx !== -1 && lastIdx !== -1){
        return lastIdx - firstIdx + 1
    }
    return -1
}
