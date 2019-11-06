$(function(){
  var counter = 0;//déclare une variable égale à 0
  $('#add').click(function(){//appel de la fonction sur le clic du bouton
    $('span').html(counter+=1);//rajoute 1 à chaque clic sur le bouton
  })
  $('#subtract').click(function(){//appel de la fonction sur le clic du bouton
    $('span').html(counter -=1);//enlève 1 à chaque clic sur le bouton
  })
})
