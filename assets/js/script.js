
$(document).ready(function() {

  /* make image paragraph styling possible */
  $("img").each(function() {
    var par = $(this).parent()
    var parpar = $(this).parent().parent()
    if (par.is("p")) {
      par.before('<div class="clearfix"></div>')
      par.addClass('img')
    }
    if (par.is("a")) {
      if (parpar.is("p")) {
        parpar.before('<div class="clearfix"></div>')
        parpar.addClass('img')
      }
    }
  })

  $("video").each(function() {
    var vid = $(this)
    var p = vid.next()
    if (p.is("p")) {
      div = vid.before('<div class="video"></div>')
      vid.appendTo(div)
      p.appendTo(div)
    }
  })

  /* add top-ul for CSS styling and "span" wrap top li texts */
  $("ul").each(function() {
    if (!$(this).parent().is("li")) {
      if ($(this).has("li").has("ul").length) {
        $(this).addClass("top-ul")
        $(this).children("li").each(function() {
          if (!$(this).contents().first().is("ul")) {
            $(this).contents().first().wrap('<span class="top-li"></span>')
          }
        })
      }
    }
  })
})

