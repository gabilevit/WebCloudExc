let btn = document.getElementById('btn');
btn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
    console.log('on button clicked, button:', event.target, this);
    httpGet();
}

function httpGet()
{
    fetch('http://localhost:1902/getHelloFromServer')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);   
        document.getElementById('div').innerHTML = json;     
    });
     
}