window.addEventListener('load', (event) => {
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => console.log(response))
})