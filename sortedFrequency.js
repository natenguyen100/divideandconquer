function binarySearch(arr, l, r, x)
{
	if (r < l)
		return -1;
	let mid = l + parseInt((r - l) / 2);
	if (arr[mid] == x)
		return mid;
	if (arr[mid] > x)
		return binarySearch(arr, l, mid - 1, x);
	return binarySearch(arr, mid + 1, r, x);
}

function countOccurrences(arr, n, x)
{
	let ind = binarySearch(arr, 0, n - 1, x);
	if (ind == -1)
		return 0;
	let count = 1;
	let left = ind - 1;
	while (left >= 0 && arr[left] == x)
		count++, left--;
	let right = ind + 1;
	while (right < n && arr[right] == x)
		count++, right++;

	return count;
}
