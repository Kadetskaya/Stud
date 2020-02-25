function AList (array) {
    this.defaultArray = array;
    this.array = [];
    this.init();
};

AList.prototype.init = function () {
    let index = 0;
    while (this.defaultArray[index]) {
        this.array[index] = this.defaultArray[index];
        index++;
    }
};

AList.prototype.size = function () {
    let index = 0;
    while (this.array[index]) {
        index++;
    }
    return index;
};

AList.prototype.addStart = function (element) {
    let arr = [element];
    for (let i = 0; i < this.size(); i++) {
        arr [i + 1] = this.array[i];
    }
    this.array = arr;
    return this.size();
};

AList.prototype.addEnd = function (element) {
    let length = this.size();
    let arr = new Array(length + 1);
    arr [length] = element;
    for (let i = 0; i < this.size(); i++) {
        arr [i] = this.array[i];
    }
    this.array = arr;
    return this.size();
};

AList.prototype.delStart = function () {
    let arr = [];
    let deletedEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        arr [i - 1] = this.array[i];
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.delEnd = function () {
    let arr = [];
    let deletedEl = this.array[this.size() - 1];
    for (let i = 0; i < this.size() - 1; i++) {
        arr [i] = this.array[i];
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.delPosition = function (index) {
    let arr = [];
    let deletedEl = this.array[index];
    let j = 0;
    for (let i = 0; i < this.size(); i++) {
        if (i != index) {
            arr [j] = this.array[i];
            j++;
        }
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.get = function (index) {
    let getEl = this.array[index];
    if (getEl) {
        return getEl;
    }
};

AList.prototype.set = function (index, element) {
    if (index < this.size()) {
        this.array[index] = element;
    }
    return `Error! Index ${index} is not available`;
};

AList.prototype.toString = function () {
    let str = new String ();
    for (let i = 0; i < this.size(); i++) {
        str += this.array[i];
    }
    return str;
};

AList.prototype.clear = function () {
    this.array = this.defaultArray;
};

AList.prototype.min = function () {
    let minEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] < minEl) {
            minEl = this.array[i];
        }
    }
    return minEl;
};

AList.prototype.max = function () {
    let maxEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] > maxEl) {
            maxEl = this.array[i];
        }
    }
    return maxEl;
};

AList.prototype.sort = function () {
    for (let i = 0; i < this.size(); i++) {
        let indexMin = i;
        for (let j = i + 1; j < this.size(); j++) {
            if (this.array[indexMin] > this.array[j]) {
                indexMin = j;
            }
        }
        if (indexMin != i) {
            [this.array[i], this.array[indexMin]] = [this.array[indexMin], this.array[i]];
        }
    }
};

AList.prototype.minIndex = function () {
    let minEl = this.array[0];
    let indexMinEl = 0;
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] < minEl) {
            minEl = this.array[i];
            indexMinEl = i;
        }
    }
    return indexMinEl;
};

AList.prototype.maxIndex = function () {
    let maxEl = this.array[0];
    let indexMaxEl = 0;
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] > maxEl) {
            maxEl = this.array[i];
            indexMaxEl = i;
        }
    }
    return indexMaxEl;
};

AList.prototype.reverse = function (element) {
        let arr = [];
        for (let i = 0, j = this.size() - 1; i < this.size(); i++, j--) {
            arr[i] = this.array[j];
            this.array[j] = this.array[i];
        }
    this.array = arr;
};

AList.prototype.halfReverse = function () {
    let arr = [];
    let j = 0;
    let l = this.size() - 1;

    if (this.size() % 2 === 0)  {
        let  half = this.size() / 2;
        let k = half - 1;

        for (let i = 0; i < this.size(); i++) {
            if (i < half) {
                arr[j] = this.array[k];
                j++;
                k--;
            } else {
                arr[j] = this.array[l];
                j++;
                l--;
            }
        }
    } else {
        let median = (this.size() - 1) / 2;
        let k = median - 1;

        for (let i = 0; i < this.size(); i++) {
            if (i < median) {
                arr[j] = this.array[k];
                j++;
                k--;
            } else if (i === median) {
                arr[j] = this.array[median];
                j++;
            } else if (i > median) {
                arr[j] = this.array[l];
                j++;
                l--;
            }
        }
    }
    this.array = arr;
};


const testArr = new AList ([5, 10, 11, 12, 15, 20]);
//console.log(testArr);
//console.log(testArr.size());
//console.log(testArr.addStart(59));
//console.log(testArr.addStart(115));
//console.log(testArr.addStart(27));
//console.log(testArr.addEnd(45));
//console.log(testArr.addEnd(36));
//console.log(testArr.addEnd(245));
//console.log(testArr.delStart());
//console.log(testArr.delEnd());
//console.log(testArr.delPosition(3));
//console.log(testArr.getIndex(10));
//console.log(testArr.getIndex(4));
//console.log(testArr.setIndex(4, 989));
//console.log(testArr.setIndex(15, 989));
//console.log(testArr.toString());
//console.log(testArr.clear());
//console.log(testArr.min());
//console.log(testArr.max());
//console.log(testArr.sort());
//console.log(testArr);
//console.log(testArr.minIndex());
//console.log(testArr.maxIndex());*/
//console.log(testArr);
console.log(testArr.reverse());
console.log(testArr);
//console.log(testArr.halfReverse());
//console.log(testArr);
//console.log(testArr.delPosition(3));
//console.log(testArr);
//console.log(testArr.addEnd(59));