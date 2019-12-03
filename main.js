// dare la possibilità all'utente di inviare un messaggio: scrivendo nel campo di testo in basso e premendo un pulsante, il messaggio comparirà nel contenitore della conversazione. Per fare questo punto, vi consiglio di usare la funzione clone() che abbiamo visto insieme per utilizzare un div template a mo' di "stampo".

$(document).ready(function() {
//al click su chat-send
  $('.chat-send').click(function(){
    //quando scrivo nel placeholder
    var messaggio = $('#myText').val();
    //trasferisci quello che è stato scritto in placeholder in un div con classe message template
    $('.center-right').append('<div class="template"></div>');
    $('.template').append(messaggio);
  });
  //quando il mouse è sulla barra di inserimento messaggio
  $('.bottom-right').mouseenter(function(){
    $('.chat-send > i').removeClass('fa-microphone'); //toglie l'icona del microfono
    $('.chat-send > i').addClass('active'); //mette l'icona della freccia
  });
  //quando il mouse esce dalla barra di inserimento messaggio
  $('.bottom-right').mouseleave(function(){
    $('.chat-send > i').removeClass('active'); //toglie l'icona della freccia
    $('.chat-send > i').addClass('fa-microphone'); //rimette l'icona del microfono
  });
});
