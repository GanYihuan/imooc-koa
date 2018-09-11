// function makeIterator(arr) {
// 	let nextIndex = 0
// 	return {
//     // return result object
// 		next: () => {
// 			if (nextIndex < arr.length) {
// 				return {
// 					value: arr[nextIndex++],
// 					done: false
// 				}
// 			} else {
// 				return {
// 					done: true
// 				}
// 			}
// 		}
// 	}
// }
// const it = makeIterator(['eat', 'play', 'sleep'])
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().done)

// generator, optimize upon code
function* makeIterator(arr) {
	for (let i = 0; i < arr.length; i++) {
    // yield: sync complete async act
		yield arr[i]
	}
}

const it = makeIterator(['eat', 'play', 'sleep'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)
