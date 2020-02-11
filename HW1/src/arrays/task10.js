// Quick


let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
let quickSort = array => {
    if (array.length == 0) return [];
    let a = [], c = [], b = array[0];
    for (let i = 1; i < array.length; i++) {
    	if (array[i] < b) a[a.length] = array[i];
    	else c[c.length] = array[i];
    }
    return quickSort(a).concat(b, quickSort(c));
}
console.log(quickSort(array));




// Merge  


let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};
const mergeSort = array => {
    if (!array || !array.length) {
        return null;
    }
    if (array.length <= 1) {
        return array;
    }
    
    const middle = Math.floor(array.length / 2);
    const arrLeft = array.slice(0, middle);
    const arrRight = array.slice(middle);
    
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
console.log(mergeSort(array));




// Shell


let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
const shellSort = array => {
    let gap = Math.floor(array.length / 2);
    while (gap >= 1) {
        for (let i = gap; i < array.length; i++) {
            const current = array[i];
            let j = i;
            while (j > 0 && array[j - gap] > current) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
};
console.log(shellSort(array));




// Heap


let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
let heapSort = array => {
	if (array.length == 0) {
		return [];
	}
    let l = array.length, i = Math.floor(l / 2), j, k, temp;
    while (true) {
    	if (i > 0) {
    		temp = array[--i];
    	} else { 
    		l--;
    		if (l == 0) {
    			return array;
    		}
    		temp = array[l]; 
    		array[l] = array[0];
            }        
      j = i;  
      k = j*2+1;
      while (k < l) { 
      	if (k+1 < l && array[k+1] > array[k]) {
      		k++;
      	}
         if (array[k] > temp) {
         	array[j] = array[k];  
         	j = k;  
         	k = j*2+1;
         } else break;
     }
      array[j] = temp; 
    }
}
console.log(heapSort(array));