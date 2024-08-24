class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);


  }

  read(index) {

    // Your code here
    if(index < 0 || index >= this.length){
      return undefined;
    }
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    if(this.length === this.capacity){
      this.resize();
    }

    for(let i=this.length; i>0; i--){
      this.data[i]= this.data[i-1];
    }

    this.data[0] = val;

    this.length++;
  }

  resize(){
    this.capacity*=2;
    const newData = new Array(this.capacity);

    for(let i=0; i< this.length; i++){
      newData[i] = this.data[i];
    }

    this.data = newData;
  }


}


module.exports = DynamicArray;
