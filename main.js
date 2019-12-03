// dare la possibilità all'utente di inviare un messaggio: scrivendo nel campo di testo in basso e premendo un pulsante, il messaggio comparirà nel contenitore della conversazione. Per fare questo punto, vi consiglio di usare la funzione clone() che abbiamo visto insieme per utilizzare un div template a mo' di "stampo".

$(document).ready(function() {
  $('.chat-send').click(function(){//al click su chat-send
    inviaMessaggio(); //applico la mia funzione creata
  });
  $('.myText').keypress(function(event) { //quando si è in posizione dell'input e viene premuto INVIO
    if (event.which == 13) { // se viene premuto INVIO (che corrisponde al numero 13 della mappatura dei tasti)
      inviaMessaggio(); //applico la mia funzione creata
    }
  });
  $('.myText').keyup(function(event) { //quando si è in posizione dell'input e si inizia a scrivere
    var messaggio = $('.myText').val(); //recupero il contenuto dell'input
    if (messaggio.length != 0) { //se si inizia a scrivere (viene premuto un qualsiasi pulsante)
      $('.chat-send i').removeClass('fas fa-microphone').addClass('active'); //appare l'icona della freccia e scompare quella del microfono
    } else { //altrimenti se non si scrive nulla
      $('.chat-send i').addClass('fas fa-microphone').removeClass('active'); //resta l'icona del microfono e scompare quella della freccia
    }
  });
});


function inviaMessaggio() {
  var messaggio = $('.myText').val();  //recupero il contenuto dell'input
  if (messaggio.length != 0) {
    var nuovoMessaggio = $('.template .message').clone(); //clono il template del messaggio
    nuovoMessaggio.children('.message-text').text(messaggio); //inserisco nel giusto span il testo del messaggio
    $('.center-right').append(nuovoMessaggio); //inserisco il messaggio all'interno del container
    $('.myText').val(''); //resetto l'input con una stringa vuota
  }
}
