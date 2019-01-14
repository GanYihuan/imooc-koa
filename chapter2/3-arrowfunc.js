const arrow = function(param) {}
const arrow2 = param => {}
const arrow3 = param => console.log(param)
const arrow4 = param => ({ param: param })
const arrow5 = (param1, param2) => {}
// { id:1, movie:xxx }
const arrow6 = ({ id, movie }) => {
  console.log(id, movie)
}
const luke = {
  id: 2,
  say: function() {
    setTimeout(function() {
      console.log('id:', this.id) // undefined
    }, 50)
  },
  sayWithThis: function() {
    let that = this
    setTimeout(function() {
      console.log('this id: ', that.id) // 2
    }, 500)
  },
  sayWithArrow: function() {
    setTimeout(() => {
      // this point current arrowfunc defined action scope
      console.log('arrow id: ', this.id) // 2
    }, 1500)
  },
  // this become global
  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log('global arrow id: ', this.id) // undefined
    }, 2000)
  }
}
luke.say()
luke.sayWithThis()
luke.sayWithArrow()
luke.sayWithGlobalArrow()
