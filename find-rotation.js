function findRotationCount(arr) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)
    let next = (mid + 1) % arr.length
    let prev = (mid + arr.length - 1) % arr.length

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left
        }
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid
        }
        else if (arr[mid] <= arr[right]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return 0
}