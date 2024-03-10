function countRotations(arr, low, high) 
{ 
    if (high < low) 
        return 0; 
    if (high == low) 
        return low; 
    let mid = Math.floor(low + (high - low)/2);
    if (mid < high && arr[mid+1] < arr[mid]) 
        return (mid+1); 
    if (mid > low && arr[mid] < arr[mid - 1]) 
        return mid; 
    if (arr[high] > arr[mid]) 
        return countRotations(arr, low, mid-1); 

    return countRotations(arr, mid+1, high); 
} 