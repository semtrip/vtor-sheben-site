import { useEffect } from 'react';

function MarquizWifget() {
   const Marquiz = window.Marquiz;
   useEffect(() => {
      (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '61115c5c12e050003e77c479', position: 'right', delay: 1})
   })
   return (
    console.log("Marquiz Widget Load")
   );
}
export default MarquizWifget;