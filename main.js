// Milestone 2
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite

$(document).ready(function() {
  $('.chat-send').click(function(){//al click su chat-send
    inviaMessaggio(); //applico la mia funzione creata
    $('.chat-send i').addClass('fa-microphone').removeClass('fa-paper-plane');//torna l'icona del microfono e scompare quella della freccia
    setTimeout(risposta,1000); //richiamo la mia funzione che invierà una risposta dopo 1 secondo
  });
  $('.myText').keypress(function(event) { //quando si è in posizione dell'input e viene premuto INVIO
    if (event.which == 13) { // se viene premuto INVIO (che corrisponde al numero 13 della mappatura dei tasti)
      inviaMessaggio(); //applico la mia funzione creata
      setTimeout(risposta,1000); //richiamo la mia funzione che invierà una risposta dopo 1 secondo
    }
  });
  $('.myText').keyup(function(event) { //quando si è in posizione dell'input e si inizia a scrivere
    var messaggio = $('.myText').val(); //recupero il contenuto dell'input
    if (messaggio.length != 0) { //se si inizia a scrivere (viene premuto un qualsiasi pulsante)
      $('.chat-send i').removeClass('fa-microphone').addClass('fa-paper-plane'); //appare l'icona della freccia e scompare quella del microfono
    } else { //altrimenti se non si scrive nulla
      $('.chat-send i').addClass('fa-microphone').removeClass('fa-paper-plane'); //resta l'icona del microfono e scompare quella della freccia
    }
  });
});



function risposta() {
  var messaggioRicevuto = $('.template2 .message-recevied').clone();//clono il template del messaggio
  $('.center-right').append(messaggioRicevuto);//inserisco il messaggio all'interno del container
  }
function inviaMessaggio() {
  var messaggio = $('.myText').val();  //recupero il contenuto dell'input
  if (messaggio.length != 0) {
    var nuovoMessaggio = $('.template .message').clone(); //clono il template del messaggio
    nuovoMessaggio.children('.message-text').text(messaggio); //inserisco nel giusto span il testo del messaggio
    $('.center-right').append(nuovoMessaggio); //inserisco il messaggio all'interno del container
    $('.myText').val(''); //resetto l'input con una stringa vuota
  }
}
