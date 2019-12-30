var toggling = document.getElementById("myonoffswitch")
      
toggling.addEventListener('change', ()=> {
  if (toggling.checked == true){
    particlesJS.load('particles-js', 'js/particles-snow.json', function(){
      console.log('particles-snow.json loaded...')})
  } else if (toggling.checked == false) {
    particlesJS.load('particles-js', 'js/particles-dark.json', function(){
      console.log('particles-dark.json loaded...')})
  }
}) 

