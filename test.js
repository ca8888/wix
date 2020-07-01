

// function myFirstarray(){
//     var cars = ["Saab", "Volvo", "BMW"];
//     console.log(cars[0])
//     console.log(cars.length)
//     cars.push("vw");
//     console.log(cars)
//     for(const mcar of cars){
//         console.log(mcar)
//     }
//     for(var i = 0; i < cars.length; i++) {
//         console.log(cars[i])
//     }
//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     var f = fruits.entries();
//     for (fruit of f){
//         console.log(fruit)
//     }
// }

// myFirstarray()
// const w = new Map();
// w.set("a", "3")
// console.log(w)
// console.log(w.has('a'))
// var obj = {
//     "key1": 1,
//     "key2": "value2"
// };
// obj["key1"]
// var b = 1;
// const c = b + "a"
// console.log(c)
/**
 *  count the number of ones and zeors 
 *  each one except the first apperance is 2 oprations 
 *  each zero after the first one appear is one opreation
 * @param {*} S string binary
 */ 
// function solution(S) {
//     first_one = false
//     total_ones = 0
//     total_zeros = 0
//     for (var dig of S){
//         if (dig==='1'){
//             first_one = true
//             total_ones = total_ones + 1
//         }
//         else if (first_one === true){
//             total_zeros = total_zeros + 1
//         }
//     }
    
//     var opreation = ((total_ones * 2) - 1) + total_zeros
//     return (opreation < 0 ? 0: opreation)
// }

// console.log(solution("1000000000"))


function calculateArraySum(A){
    var sumA = []
    sumA[0] = A[0]
    for(var i = 1; i < A.length; i++) {
        sumA.push(sumA[i-1] + A[i])
    }
    return sumA
}

function findMaxSub(sumA, K){
    var maxK = sumA[K-1]
    var indexK = K-1
    
    for(var i = K; i < sumA.length; i++) {
        
        temp = sumA[i] - sumA[i-K]
        indexK = (temp > maxK ? i : indexK)
        maxK = (temp > maxK ? temp : maxK)
    }
    return ([maxK, indexK])
}

function solution(A, K, L) {
    var lengthA = A.length
    if (K+L > lengthA){
        return -1
    }
    var sumA = calculateArraySum(A)
    console.log(sumA)

    if (K+L === lengthA){
        return sumA[lengthA -1]
    }

    resK = findMaxSub(sumA, K)
    copyA = Array.from(A)
    for(var i = resK[1]; i >resK[1]-K; i--) {
        A[i] = 0
    }
    sumA = calculateArraySum(A)
    resL = findMaxSub(sumA, L)
    sumMax = resK[0] + resL[0]


    var sumA = calculateArraySum(copyA)
    resK = findMaxSub(sumA, L)
    for(var i = resK[1]; i >resK[1]-K; i--) {
        copyA[i] = 0
    }
    sumA = calculateArraySum(A)
    resL = findMaxSub(sumA, K)
    temp = resK[0] + resL[0]
    ten_power_nine = 1000000000
    return (temp > sumMax ? temp%ten_power_nine : sumMax%ten_power_nine)
}

console.log(solution([100000000,100000000,1,1,1,1,1,9],3, 4))

// /**
//  * return the cordiante in radians of given x and y in the unit circle
//  * @param *{} x the x corrdiante of the point  
//  * @param {*} y the y coordiante of the point
//  */
// function calaualteQuarter(x,y){
//     // need to be careful no to calculate in zero
//     if (y==0){
//         if (x >= 0){
//         return 0
//         }
//         if (x<0){
//             return Math.PI
//         }
//     }
//     //check the quarter in the unit circle where the corrdinate appear.
//    if (x>=0 && y>0){
//        acos = Math.acos(x/y)
//        return(Math.acos(x/y))
//    }
//    else if (x<=0 && y>0){
//        acos = Math.acos(x/y)
//        return (acos + Math.PI/2)
//    }
//    else if (x<=0 && y<0){
//     acos = Math.acos(x/y)
//     return (acos + Math.PI)
//    }
//    else if (x>=0 && y<0){
//     acos = Math.acos(x/y)
//     return (acos + Math.PI*2/3)
//    }

// }
// /**
//  * calcaute the degree of the each coordiante and add to array
//  * add to a set data structre to so wont be any duplicate
//  * @param {*} A 
//  */
// function solution(A) {
//     console.log(A)
//     var set = new Set()
//     for (a of A){
//         set.add(calaualteQuarter(a.x, a.y))
//     }
//     return set.size
// }




// p = {'x':1, 'y':2}
// p1 = {'x':0, 'y':0}
// p2 = {'x':1, 'y':-2}
// p3 = {'x':-1, 'y':-2}
// p4 = {'x':2, 'y':4}
// // p = {'x':1, 'y':2}
// // p = {'x':1, 'y':2}
// A = [p, p1, p2, p3]
// console.log(solution(A))
