(function() {
  var routes = {
    '/:article': showArticle,
    '/': index
  }

  function* index(c) { // c:context
    //reset
    key.setScope('write')
    document.title = 'Erren\'s blog demo'
    document.body.scrollTop = 0
    var liFocus = $('leftbar li.focus')
    if (liFocus) $cr(liFocus, 'focus')
    //show leftbar
    if (!$('leftbar li')) {
      c.state.ul1 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/工具')
      c.state.ul2 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/Programming')
      addLeftbar(c.state.ul1, 1)
      addLeftbar(c.state.ul2, 2)
        //enable keyboard navigation
      $each($$('leftbar li'), function(li, index) {
        li.setAttribute('keyCue', Setting.lbKey[index]);
      })
      c.save()
    }
    //show readme.md
    if(!c.state.article){ 
      c.state.article =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/readme')
    }
    $('article').innerHTML = marked(c.state.article)
  }
  function addLeftbar(arr, num) {
    $each(arr, function(obj) {
      $('#ul-' + num).innerHTML += $elc(obj.name.slice(0, -3))
    })
  }

  function* showArticle(c) {
    document.body.scrollTop = 0
    var title = c.path.substr(1)
    document.title = title
    setFocusByText(title)
    if (!c.state.a) {
      c.state.a =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/contents/' + State.gpath + '.md')
      c.save()
    }
    $('article').innerHTML = marked(c.state.a)
  }

  function setFocusByText(text) {
    var li
    $each($$('leftbar li'), function(listitem) {
      if (listitem.innerText === text) {
        li = listitem
      }
    })
    var liFocus = $('leftbar li.focus')
    if (liFocus) $cr(liFocus, 'focus')
    $ca(li, 'focus')
  }

  // pass to page.js
  for (path in routes) {
    page(path, auco(routes[path]))
  }
  page()
    // auto coroutine
  function auco(g) {
    return function() {
      var i = g.apply(this, arguments)
      nextWith()

      function nextWith(returnValue) {
        var r = i.next(returnValue)
        if (!r.done) {
          r.value(nextWith)
        }
      }
    }
  }

})()
