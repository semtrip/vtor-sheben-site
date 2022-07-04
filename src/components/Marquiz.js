import React, { useEffect } from 'react';

function Marquiz() {
   const Marquiz = window.Marquiz;

   useEffect(() => {
    (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Inline', {id: '61115c5c12e050003e77c479', buttonText: 'Пройти тест', bgColor: '#ffb320', textColor: '#363636', rounded: true, shadow: 'rgba(255, 179, 32, 0.5)', blicked: true})
   })
   return (
    <div data-marquiz-id="61115c5c12e050003e77c479"></div>
   );
}
export default Marquiz;