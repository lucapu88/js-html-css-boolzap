// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
// invia il testo viene aggiunto al thread sopra, come messaggio verde
// Milestone 2
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite
// Milestone 3
// ● Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire
// nuovi messaggi per ogni conversazione
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato


$(document).ready(function() {
  $('.chat-send').click(function(){//al click su chat-send
    inviaMessaggio(); //applico la mia funzione creata
    $('.chat-send i').addClass('fa-microphone').removeClass('fa-paper-plane');//torna l'icona del microfono e scompare quella della freccia
  });
  $('.myText').keypress(function(event) { //quando si è in posizione dell'input e viene premuto INVIO
    if (event.which == 13) { // se viene premuto INVIO (che corrisponde al numero 13 della mappatura dei tasti)
      inviaMessaggio(); //applico la mia funzione creata
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
  $('.search-input').keyup(function(event){
    var contatto = $('.search-input').val(); //recupero il testo inserito nella ricerca
    if (contatto.length != 0) { //se stiamo scrivendo nella ricerca
      $('.contatti').each(function(){
        var nomeContatto = $(this).find('.nome-stato p').text(); //recupero il nome del contatto
        if (nomeContatto.toLowerCase().includes(contatto.toLowerCase())) { //se il testo inserito include caratteri uguali a quelli del nome del contatto
          $(this).show(); //mostra il contenitore del nome del contatto
        } else {
          $(this).hide(); //altrimenti nascondi il contenitore del contatto
        }
      });
    } else { //se invece nella ricerca non c'è scritto nulla, mostra la lista dei contatti
      $('.contatti').show();
    }
  });
  $(document).on('click', '.message-options', function() {
    $('.message-options-panel').addClass('.active');
  })

});

//intercetto il click sul div del contatto
//al click del div bisogna visualizzare la sua conversazione e deve cambiare il nome in alto
  //1.bisogna cancellare eventuali messaggi precedenti (ad esempio se è stato cliccato prima un altro contatto)
  //2.bisogna spostare il message del template nel contenitore centrale


// $('.contatti').click(function(){ //intercetto il click sul div del contatto
//     var nomeUtente = $('.nome-stato p').text(); //var contenente il nome dell'utente dei contatti
//     $(this).each(function(){
//       $('.nome-accesso p').hide(); //nascondo il nome corrente
//       $('.nome-accesso').append(nomeUtente); //mostro il nome del contatto cliccato
//     });
// });



//QUI SOTTO CI SONO LE MIE FUNZIONI CREATE
function risposta() { //funzione che invierà una risposta dopo 1 secondo
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
    setTimeout(risposta,1000); //richiamo la mia funzione che invierà una risposta dopo 1 secondo
  }
}
