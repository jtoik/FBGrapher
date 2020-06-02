var app = new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3001')
      .then(response => (this.info = response))
  }
})