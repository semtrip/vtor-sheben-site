document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        const mapBlock = document.getElementById('map')
        const script = document.createElement('script')
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A52e31760726ea3b5d9fd344c9834489a171b626327c867249e6559ac6310a8df&amp;width=100%25&amp;height=540&amp;lang=ru_RU&amp;scroll=true"
        script.async = true
        script.type="text/javascript"
        mapBlock.appendChild(script)
    }, 1000);
})