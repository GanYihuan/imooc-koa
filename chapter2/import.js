import { name } from './export'
import { getName } from './ext'
// import { name, getName } from './export'
import age from './export'
import {
  name as name3,
  getName2 as getName3,
  age as age3
} from './export'

console.log(name)
console.log(name3)
console.log(age)
console.log(age3)
console.log(getName())
console.log(getName3())