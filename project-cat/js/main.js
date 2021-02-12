let border_limits = function(value){
  value = parseInt(value);
  if (value < 30) {
  	return 30;
  } else if (value > 70) {
  	return 70;
  }; 
  return value;
}

let balls = document.getElementsByClassName('eyeball');
document.onmousemove = function() {
  let x = event.clientX * 100 / window.innerWidth + '%';
  let y = event.clientY * 100 / window.innerHeight + '%';
  x = border_limits(x);
  y = border_limits(y);

  for (let i = 0; i < 2; i++) {
    	balls[i].style.left = x + '%';
    	balls[i].style.top = y + '%';
   		balls[i].style.transform = `translate(-"${+x}", -"${+y}")`;
	}		
  }

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})