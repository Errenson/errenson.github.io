(function () {
marked.setOptions({
	breaks: true
})
kWrite={}
function leftbarKeyGen(a) {
	return function() {
		var li = $('leftbar li[keycue=' + a + ']')
		var liFocus = $('li.focus')
		if(liFocus) $cr(liFocus,'focus')
		$ca(li,'focus')

		var ulName=['','人生管理','工具','Programming']
		State.gpath=ulName[li.parentElement.id.substr(-1)]+'/'+li.innerText
		page('/' + li.innerText)
	}
}
for (var i = Setting.lbKey.length; i--;) {
	var a = Setting.lbKey[i]
	kWrite[a] = leftbarKeyGen(a)
}
kWrite.w=function() { document.body.scrollTop-=500 }
kWrite.s=function() { document.body.scrollTop+=500 }
kWrite.b=function() { page('/') }
var isScroll=false
kWrite.g=function() {
	isScroll = !isScroll
	autoScroll()
}
function autoScroll() {
	if(isScroll){
		window.scrollBy(0,1)
    setTimeout(autoScroll,60)
	}
}
//open links
kWrite.a= function(e) {
		var a = $$('a')
		console.log(a);
		if (a) {
			$each(a, function(link, i) {
				link.setAttribute('keycue', Setting.linkKey[i])
				link.setAttribute('target', '_blank')
			})
			key.setScope('link')
		}
	}
kLink = {}

function cmdClick(e) {
	var evt = document.createEvent("MouseEvents");
	//the tenth parameter of initMouseEvent sets ctrl key
	evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null)
	e.dispatchEvent(evt)
}
function linkKeyGen(a) {
	return function() {
		var li = $('a[keycue=' + a + ']')
		cmdClick(li)
			// key.setScope('write')
	}
}
for (var i = Setting.linkKey.length; i--;) {
	var a = Setting.linkKey[i]
	kLink[a] = linkKeyGen(a)
}
kLink.esc = function() {
	key.setScope('write')
	var a = $$('a')
	if (a) {
		$each(a, function(link) {
			link.removeAttribute('keycue')
		})
	}
}

keyevents(kWrite, 'write')
keyevents(kLink, 'link')
function keyevents(map, scope) {
	if (scope) {
		for (prop in map) {
			key(prop, scope, map[prop])
		}
	} else {
		for (prop in map) {
			key(prop, map[prop])
		}
	}
}

})()
