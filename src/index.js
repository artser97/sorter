class Sorter {
  constructor() {
    // your implementation
    this.arr = [];

    this.setComparator((a, b) => a - b);
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  extractValuesByIndices(indices) {
    let indicesValuesArr = [];
    for (let i = 0; i < indices.length; i++) {
      indicesValuesArr.push(this.arr[indices[i]]);
    }

    return indicesValuesArr;
  }

  mergeIndicesValues(indices, indicesValuesArr) {
    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = indicesValuesArr[i];
    }
  }

  sort(indices) {
    // your implementation
    indices.sort((a, b) => a - b);

    let indicesValuesArr = this.extractValuesByIndices(indices);
    indicesValuesArr.sort(this.compareFunction);

    this.mergeIndicesValues(indices, indicesValuesArr);
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
