$(() => {
   //generate new fortune...
   const tpl = $('#fortune-tpl').html();
      
   let bounds = getScreenBoundaries();

   // make message array, alphabetical, 6 dutchie taals
   let messages = [
      'Veels geluk met jou verjaarsdag!', // afrikaans
      'Zorionak!', // basque
      'Sun Yat Fai Lok!', // cantonese
      'Sretan Rodendan!', // croatian
      'Vsechno nejlepsi k Tvym narozeninam!!', // czech
      'Tillykke med fodselsdagen!', // danish
      'Hartelijk gefeliciteerd!', // dutch 0
      'Fan herte lokwinske!', // dutch 1 frisian
      'Fellisiteert', // dutch 2 drents
      'Gelukkige verjaardag!', // dutch 3 flemish
      'Proficiat!', // dutch 4 limburgs
      'Ne geleukkege verjeurdoag!', // dutch 5 bowers
      'Gefeliciteard met oen’n verjoardag!', // dutch 6 twents
      'Happy Birthday!', // english colloq.
      'Felichan Naskightagon!', // esperanto
      'Tavalodet Mobarak!', // farsi
      'Hyvaa syntymapaivaa!', // finnish
      'Joyeux Anniversaire!', // français
      'Alles Gute zum Geburtstag!', // german
      'Buon Compleanno!', // italian
      'Fortuna dies natalis!', // latin
      'Vill Gleck fir daei Geburtsdaag!', // luxembourgeois
      'Gratulerer med dagen!', // norwegian
      'Feliz Aniversario!', // portuguese
      'Feliz cumpleaños!', // spanish
      'Hongera!', // swahili
      'Grattis på födelsedagen!', // swedish
   ];

   // pass in template message data and boundaries
   messages.forEach((message) => {
      createAnimation(tpl, message, bounds);
   });
   

   function createAnimation(tpl, message, bounds) {

      let $el = $($.parseHTML(tpl));
      $('body').append($el);

      // greensock tweening fancy
      var tl = new TimelineMax({
         yoyo: true, 
         repeat:-1, 
         repeatDelay: 3
      });
      // store fortune components
      var $fortune = $el.find('.fortune');
      var $fortuneLeft = $el.find('.fortune-left');
      var $fortuneRight = $el.find('.fortune-right');
      var $message = $el.find('.fortune-message span');

      $el.find('.message').html(message);
      // try to make it all a little more random (distance, position, pattern)
      let randomTravelTime = randomTime(0.1, 0.6);
      let startPosition = getRandomPositionObject();
      let endPosition = getRandomPositionObject(onComplete);

      tl.fromTo(
         $fortune, 
         1,
         startPosition,
         endPosition
      );
      // some jiggling
      tl.to($fortune, 0.1, {rotation: -5, delay: 2});
      tl.to($fortune, 0.1, {rotation: 5});
      tl.to($fortune, 0.1, {rotation: -5});
      tl.to($fortune, 0.1, {rotation: 5});
      tl.to($fortune, 0.1, {rotation: -5});
      tl.to($fortune, 0.1, {rotation: randomIntFromRange(-5, 5)});

      tl.addLabel("break", "+=0.3");

      let randomRotationTime = randomTime(0.3, 0.7);

      let randomRotation = randomIntFromRange(40, 50);
      tl.to($fortuneLeft, randomRotationTime, { rotation: -randomRotation, x: -70, y: 70 }, "break");
      tl.to($fortuneRight, randomRotationTime, { rotation: randomRotation, x: 70, y: 70 }, "break");
      
      tl.from($message, 1, {x:'110%'}, "break");  

      function onComplete(){
         endPosition = getRandomPositionObject(onComplete);
      }
      // TODO: figure out bounce giggly mode
      function getRandomPositionObject(callback){
         return {
            onComplete:callback,
            // ease: Bounce.easeInOut,
            x: randomIntFromRange(bounds.x, bounds.width), 
            y: randomIntFromRange(bounds.y, bounds.height),
            delay: randomIntFromRange(0, 1)
         };
      }     
   }
});

// get boundaries of screen so cookies dont fly too far
// TODO fix this so it works
function getScreenBoundaries() {
   var elementWidth = 250;
   var elementHeight = 100;

   return {
      x: 0, 
      y: 0,
      width: $(window).width() - elementWidth,
      height: $(window).height() - elementHeight
   }
}
// make the randomizing functions for movement, patterns/transition times
function randomIntFromRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomTime(min=0.1, max=0.9) {
   return randomIntFromRange(min * 10, max * 10) / 10;
}
