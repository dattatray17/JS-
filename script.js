/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(printByMap);
  function printByMap(item) {
    if (item.profession === "developer") {
      console.log(item);
    }
  }
}
 
 

function PrintDeveloperbyForEach() {
  arr.forEach(printByForEach);
  function printByForEach(item){
    if(item.profession === "developer"){
      console.log(item);
    }
  }
}

function addData() {
  let newObject = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObject);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(function arrayItemFilter);
  function arrayItemFilter(item){
    if(item.profession !== "admin"){
      return item;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  let arr1 = [
    { id: 1, name: "Dattatray", age: "31", profession: "frond end developer" },
    { id: 2, name: "Durgesh", age: "18", profession: "full stack developer" },
    { id: 3, name: "Ramesh", age: "35", profession: "Banker" },
  ]
  let newArray = arr.concat(arr1);
  console.log(newArray);
}


