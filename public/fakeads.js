//function for random banner ads
function random_imglink(){
    var ry=Math.floor(Math.random()*30) //30 being the amount of images in the ads folder
    if (ry==0)
    ry=1
    document.write('<a href="https://www.youtube.com/watch?v=phAKccY6M9I"><img src="/public/images/ads/' + ry + '.gif" style="max-width: 100%" border=0></a>');
  }

random_imglink()
//-->