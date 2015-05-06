$(function(){

  all_links = [
  "http://shapecatcher.com/",
  "http://htmlarrows.com/",
  "http://unicode-table.com/en/",
  "http://copypastecharacter.com/",
  "http://www.fileformat.info/info/unicode/char/a.htm",
  "http://jrgraphix.net/r/Unicode/2600-26FF",
  "http://panmental.de/symbols/info.htm",
  "http://unicodeemoticons.com/cool_text_icons_and_pictures.htm"
 ]

  for (var i = 0, l = all_links.length; i < l; i++) {
    $('ul.uni__list').append('<li class="list__item"><a href="'+ all_links[i] +'">'+ all_links[i].replace('http:\/\/','') +'</a></li>')
  }
});