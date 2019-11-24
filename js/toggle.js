var toggling = document.getElementById("myonoffswitch")
      
toggling.addEventListener('change', ()=> {
  if (toggling.checked == true){
    particlesJS.load('particles-js', 'js/particles-snow.json', function(){
      console.log('particles-snow.json loaded...')})
      document.getElementById("particles-js").style.background = "#192a56"
  } else if (toggling.checked == false) {
    particlesJS.load('particles-js', 'js/particles-dark.json', function(){
      console.log('particles-dark.json loaded...')})
      document.getElementById("particles-js").style.background = "#111111"
  }
}) 