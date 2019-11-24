const typedTitleOne = new Typed('#typed-title-1', {
  strings: ["Hello world!^1000\n My name is Brandon Melendez."],
  typeSpeed: 20,

});

const typedTitleTwo = new Typed('#typed-title-2', {
  strings: ['&amp; I love to write.', '&amp; I love to code.', '&amp; I love to connect.', '&amp; I love to create.'],
  smartBackspace: true,
  startDelay: 2900,
  typeSpeed: 20,
  backSpeed: 30,
});



const cursorOne = document.getElementsByClassName('typed-cursor')[0]
const cursorTwo = document.getElementsByClassName('typed-cursor')[1]
cursorOne.innerText = "|"
cursorTwo.innerText = ""
const removeCursor = () => {
  cursorOne.innerText = ""
}
const addCursor = () => {
  cursorTwo.innerText = "|"
}
setTimeout(removeCursor, 3400)
setTimeout(addCursor, 4000)
