javascript:
HOME = "https://scrapbox.io/{yourname}/";
a = d = 0;
url = location.href;
title = document.title || url;
text = getSelection().toString();
switch (true) {
  case /youtube\.com/.test(url): url = "https://www.youtube.com/watch?v=" + url.split("v=")[1].split("&")[0];
    text = "\n#youtube";
    break;
  case /amazon\.co/.test(url): a = 1;
    p = document.querySelector("#landingImage, #imgBlkFront, #ebooksImageBlock img, #coverArt_feature_div img, #cover-art img, #image-block img");
    url = p.src + " " + url;
    break;
  default: p = document.images;
    for (i = 0;
      i < p.length;
      i++) if (p[i].width > 100) {
        url = p[i].src + " " + url;
        break;
      }
}if (!text) {
  at = document.getElementsByTagName("article");
  if (at.length) text = at[0].innerText;
  else {
    p = document.getElementsByTagName("p");
    if (p.length) text = p[a].innerText + "\n";
  }
} link = "[" + url + "]\n\n" + text;
url = HOME + encodeURIComponent(title) + "?body=" + encodeURIComponent(link);
open(url, "_blank");
function child(x) {
  d++;
  var a = x.getName().text() + "\n";
  var b = x.getNotes().text();
  if (b.trim().length > 0) a += "-- Note Start --\n" + b + "-- Note End --\n";
  var c = x.getVisibleChildren();
  for (var i = 0;
    i < c.length;
    i++) {
      for (var j = 0;
        j < d;
        j++) a += " ";
    a += child(c.eq(i));
  } d--;
  return a;
}
