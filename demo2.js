// ORIGINAL
// (function anonymous(
//   ) {
//   with(this){const cache = {}
//   class Name {
//     constructor(stringName) {
//       cache[stringName] = Math.round(Math.random() * 100)
//     }
//   }
//   const n = {
//     errors: new Name("errors"),
//     (thi$(this)?window:this): new Name("(thi$(this)?window:this)"),
//     self: new Name("self"),
//   }

//   console.log("hello self: ", cache.self)
//   console.log("hello $_t_his_: ", cache.(thi$(this)?window:this))

//   ;function thi$(t){return t===this}};;
//   //# sourceURL=http://localhost:3000/demo.js
//   })

const cache = {}
class Name {
  constructor(stringName) {
    cache[stringName] = Math.round(Math.random() * 100)
  }
}
const n = {
  errors: new Name("errors"),
  "(thi$(this)?window:this)": new Name("(thi$(this)?window:this)"),
  self: new Name("self"),
}
console.log(n)

console.log("hello self: ", cache.self)
console.log("hello $_t_his_: ", cache["(thi$(this)?window:this)"])

function thi$(t) {
  return t === this
}
