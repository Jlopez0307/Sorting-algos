const merge = (arr1, arr2) => {
    const results = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++;
        };
    };

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
};

const mergeSort = (arr) => {
    //Base case
    //Checks if array passed through has been fully iterated through, if true return new sorted array
    if(arr.length <= 1) return arr;

    //Chooses mid point, by finding half of array
    const mid = Math.floor(arr.length/2);
    //Left side of the split
    const left = mergeSort(arr.slice(0, mid));
    //Right side of the split
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
};
