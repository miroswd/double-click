const post = document.getElementById("post");
const like = document.getElementById("like");

post.addEventListener('dblclick', () => {
window.getSelection().removeAllRanges()
  like.style.opacity=1;
  like.style.visibility="visible";
  like.style.animation="show 0.4s forwards"
  console.log('Clicaste 2x?')
})