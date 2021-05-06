                                     // Sum All Numbers in a RangePassed
function sumAll(arr) {
  let smallestNo = Math.min(...arr);
  let biggestNo = Math.max(...arr);

  let result = 0
  for (let i = smallestNo; i <= biggestNo; i++) {
    result += i
  }
  // kia to isko functionaly programming ma change kar sekhta hn 
  // serif is he loop ko jo upper hn ...

  return result
}

sumAll([1, 4]);
                                           //  Diff Two ArraysPassed

function diffArray(arr1, arr2) {
  let newArr = []
  function diff(firstArr,SecondArr){
    firstArr.filter(diff => {
      let flag = false
      for (let j = 0; j < SecondArr.length; j++) {
        if (diff === SecondArr[j]){
          flag = true
          break
        }
      }
      if (flag !== true){
        newArr.push(diff)
      }
    })     
  }

  diff(arr1,arr2)
  diff(arr2,arr1)

  console.log(newArr)
  return newArr
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]);
