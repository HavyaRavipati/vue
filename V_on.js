var handled = new Vue({
    el: '#element',
    data: {
      name: 'Welcome to Vue.Js Workshop'
    },
    methods: {
   clickelement : function () {
        alert('Hello ' + this.name + '!')
  }}})
  