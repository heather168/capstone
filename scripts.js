var slideshowindex= 0;
show slides():

function show slides( ) {
  var i;
  var slides =
  document.getelementsbyclassname("myslides");
  for (i = 0; i <slides.length;
  i++) {
    slides[i].style.display=
    "none";
  }
  slideindex++;
  if (slideindex> slides length)
  {slideindex=1}
  slides[slideindex-1].s
}
}
