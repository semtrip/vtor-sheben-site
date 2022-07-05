function marquiz() {
    document.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(() => {
            (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '61115c5c12e050003e77c479', position: 'right', delay: 1})
            if(document.getElementById('quiz_block').innerHTML === '') {
                marquiz()
            } else {
                console.log('Marquiz load block')
            }
        }, 1000);
    })
}
marquiz()