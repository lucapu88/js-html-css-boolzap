// dare la possibilità all'utente di inviare un messaggio: scrivendo nel campo di testo in basso e premendo un pulsante, il messaggio comparirà nel contenitore della conversazione. Per fare questo punto, vi consiglio di usare la funzione clone() che abbiamo visto insieme per utilizzare un div template a mo' di "stampo".

$(document).ready(function() {
//al click su chat-send
$('.chat-send').click(function(){
  //quando scrivo nel placeholder
  var messaggio = document.getElementById("myText").value;
  //trasferisci quello che è stato scritto in placeholder in un div con classe message template
  $('.center-right').append('<div class="message template"></div>');
  $('.message.template').append(messaggio);
})
});
