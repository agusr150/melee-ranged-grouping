function meleeRangedGrouping (str) {
    //your code here
    var firstSplitArray = str.split(',')
    var secondSplitArray = []
    var arrMelee = [], arrRanged = []
    var result = []
    
    if (str === '') {
      return []
    }
    
    // Split hero & weapon type
    for (var i = 0; i < firstSplitArray.length; i++) {
      secondSplitArray.push(firstSplitArray[i].split('-'))
    }
    
    // Grouping the hero based on the weapon type
    for (var j = 0; j < secondSplitArray.length; j++) {
      if (secondSplitArray[j][1] === 'Melee') {
        arrMelee.push(secondSplitArray[j][0])
      } else if (secondSplitArray[j][1] === 'Ranged') {
        arrRanged.push(secondSplitArray[j][0])
      }
    }  
    // Push Result
    result.push(arrRanged, arrMelee)
    return result
  }
  

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []