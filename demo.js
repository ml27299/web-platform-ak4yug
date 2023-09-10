const cache = {}
class Name {
  constructor(stringName) {
    cache[stringName] = Math.round(Math.random() * 100)
  }
}
const n = {
  errors: new Name("errors"),
  this: new Name("this"),
  self: new Name("self"),
}

console.log("hello self: ", cache.self)
console.log("hello $_t_his_: ", cache.this)
