$(document).ready(function(){

  var portfolioLength = 10,
      questionLength = 7,
      randomCSS = [];

  //RANDOM NUMBER GENERATOR
  function randomNum(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  //STATS
  $('#portfolio .stats a').click(function(e){
    e.preventDefault();
    //var imageURL = $(this).css('background-image'),
    var imageNum = $(this).attr('class');
    $("#modal").addClass('active');
    $(".page-content").addClass('active');
    $("#modal .foreground").css('background', 'url(images/portfolio/' + imageNum + '.jpg)');
    var templateFrame = '<img src="../images/portfolio/' + imageNum + '.jpg">';

    $('#modal .foreground').html(templateFrame);
    $('body').toggleClass('locked');
  });

  $("#modal").click(function(){
    $(this).removeClass('active');
    $(".page-content").removeClass('active');
    $('#modal .foreground').html('');
    $('body').toggleClass('locked');
  });

  //$('.switcher.photo').click(function(){
    //$('#photo .visual').toggleClass('active');
  //});

  //$('.switcher.skills').click(function(){
    //$('#skills .info').toggleClass('active');
  //});

  //QUESTION AND ANSWER AREA
  $('#qa .questions p').each(function(){
    if(questionLength >= 1){
    } else {
      $(this).addClass('hidden');
    }
    questionLength--;
  });

  var answers = ["Coffee in several different forms. A nice cappuccino or something black with a little heavy cream is perfect.",
              "Definitely regular. What is this evil Decaf you speak of?",
              "UX and CX have been identified as one of the key differentiators for leaders in the areas of adoption, revenue and stock growth. The customers and users of your product know best it’s pains and what they need it to do.",
              "I prefer to work with custom frameworks for Brand development purposes, but for internal facing properties or site grids, almost anything will do.",
              "There’s no one secret, but definitely one of the keys would be genuine care for those you manage and work with. Give them your respect, work hard and help them achieve their goals. You won’t be disappointed.",
              "I can highly recommend unsplash.com! They’ve some stunning and varied imagery which is free with accreditation.",
              "There is usually some eye candy to be found at dribbble.com. Great inspiration if you’re working on ui design or animations of various kinds. Enjoy!",
              "I'd recommend a heavy dose of both. Humility to know that there is always more to learn. Confidence to fight for what you know is right and to get work done.",
              "The launch of BB-8 App Controlled Robot with Sphero, in conjunction with Star Wars Episode 7. A once in a lifetime opportunity.",
              "Without a doubt my wife, son, and family.",
              "Both. I find the Mac is an exceptional work machine but the PC has some advantages in expense and performance.",
              "If you’ve not yet read it, I’d recommend a book titled Cracked It. It covers a number of very useful concepts and methodologies, including Design Thinking, Unknown Unknowns, Cognative Bias, and many more.",
              "... ... ... Let’s just say it’s been a while since I had any. It left me when I was around 23..",
              "Stateside, Ozo's Coffee in Boulder, Colorado is truly amazing. If you find yourself in Rome, get a Cappuccino. I've never had one which doesn't taste amazing!",
              "Yes, depending on my current workload and life events, I'm happy to do both. Please contact me.",
              "Frank Herbert Dune. Just the first book mind you.",
              "...Just some harmless Javascript...you can trust me..."];

  $('#qa .questions p').click(function(){
    var currentElement = $(this),
        currentQuestion = currentElement.index(),
        currentWord = [''],
        startingLetter = 0,
        isHTML = false,
        htmlSnippet = "";

    $(currentElement).addClass('hidden-alt');
    $('#qa .questions p.hidden:first').removeClass('hidden');
    $('#qa .answers .answer').html('');

    for(var i = 0; i < answers[currentQuestion].length; i++){
      var nextLetter = i + 1,
          currentLetter = answers[currentQuestion].substring(i, nextLetter);

      if(currentLetter == "*") {
        currentWord.push('//');
      } else {
        currentWord.push(currentLetter);
      }
    }

    var runLetter = setInterval(function(){
      if(startingLetter < currentWord.length){
        $("#qa .questions").addClass('disabled');
        $("#qa .questions p").css("pointer-events", "none");

        if(currentWord[startingLetter] == "<" || isHTML == true){
          isHTML = true;
          if(currentWord[startingLetter] == "//" ){
            htmlSnippet = htmlSnippet + currentWord["/a>"];
            $("#qa .answers .answer").append(htmlSnippet);
            htmlSnippet = "";
            isHTML = false;
          } else {
            htmlSnippet = htmlSnippet + currentWord[startingLetter];
          }
        } else {
          $("#qa .answers .answer").append(currentWord[startingLetter]);
        }

        startingLetter++;
      } else {
        clearInterval(runLetter);
        $("#qa .questions p").css("pointer-events", "auto");
        $("#qa .questions").removeClass('disabled');
      }
    }, 50);
  });

  //MOVING ILLUSION
  $(".coffee").mousemove(function(event){
    var positionH = event.pageX,
        positionV = event.pageY,
        pageH = $(".coffee").width(),
        pageV = $(".coffee").height(),
        pageHP = (positionH / pageH).toFixed(2) * 100,
        pageVP = (positionV / pageV).toFixed(2) * 100;

    console.log(pageHP);
    console.log(pageVP);
  
  });
});

