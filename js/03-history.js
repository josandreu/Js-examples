/* Objeto window.history (historial del navegador) */

history.back();
history.forward();
history.go(2);
history.go(-3); // retrocede 3 páginas

/* 'JUGAR' CON EL HISTORIAL DEL NAVEGADOR */

/*
history.pushState() añade un estado al historial
history.pushState(data, title[, url])
data: objeto asocialdo al estado que recibirá el evento
title: titulo de la oágina añadida
url: parametro opcional para la url de la nueva entrada
*/

/* 
history.replaceState() Reemplaza el estado actual
mismos parámetros que history.pushState()
*/

/* 
history.state() Estado actual
Devuelve el objeto asociado al estado
*/
