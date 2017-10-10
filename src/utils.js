export default {
  read(type) {
    return JSON.parse(window.localStorage.getItem(type) || '[]')
  },
  write(type, val) {
    window.localStorage.setItem(type, JSON.stringify(val))
  }
}
