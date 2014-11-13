(function() {
  var routes = {
    '/:article': showArticle,
    '/': index
  }

  function* index(c) { // c:context
    key.setScope('write')
    document.title='Erren\'s static blog'
    if (!c.state.ul1) {
      c.state.ul1 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/时间管理')
      c.state.ul2 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/环境搭建')
      c.state.ul3 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/Programming')
      c.state.article =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/readme')
        //show leftbar
      addLeftbar(c.state.ul1, 1)
      addLeftbar(c.state.ul2, 2)
      addLeftbar(c.state.ul3, 3)
        //enable keyboard navigation
      $each($$('leftbar li'), function(li, index) {
        li.setAttribute('keyCue', Setting.lbKey[index]);
      })
      c.save()
    }
    //show readme.md
    $('article').innerHTML = marked(c.state.article)
    document.body.scrollTop=0
  }

  function addLeftbar(arr, num) {
    $each(arr, function(obj) {
      $('#ul-' + num).innerHTML += $elc(obj.name.slice(0, -3))
    })
  }

  function* showArticle(c) {
    document.body.scrollTop=0
    document.title = c.path.substr(1)
    if (!c.state.a) {
      c.state.a =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/contents/' + State.gpath + '.md')
      c.save()
    }
    $('article').innerHTML = marked(c.state.a)
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
