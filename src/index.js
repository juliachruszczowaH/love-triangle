/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    const array = preferences;
    const checkedItems = []; // storage of checked items from preferences array
    let counter = 0;

    for (let i = 0; //first index of preferences
         i < array.length; //last index of preferences is its length - 1
         i++) {//iteration
        let firstLover = getUncheckedItem(i);//check if start item has not been used already for another triangle
        let a = array[firstLover];//value of the first item is index for the second item of triangle
        let b = array[a-1];// value of the second item is index for the third item of triangle
        let c = array[b-1]; //value of the third item - should mach the first item index
        if (firstLover == c-1 //real index is c-1
            && a != b
            && a != c
            && b != c) {
            // store checked items' indexes
            checkedItems.push(firstLover);
            checkedItems.push(a-1);
            checkedItems.push(b-1);
            
            counter++;
        }
    }

    function getUncheckedItem(n) {
        while (checkedItems.includes(n))
            n++;
        return n;
    }

    return counter;
};


