window.addEventListener('load', (event) => {
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => {
        return (response.text());
    })
    .then(data => {
        document.getElementById('todo').innerHTML = JSON.parse(data).activity;
    })
})