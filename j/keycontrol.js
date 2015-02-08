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

		var ulName=['','工具','Programming']
		State.gpath=ulName[li.parentElement.id.substr(-1)]+'/'+li.innerHTML
		page('/' + li.innerHTML)
	}
}
for (var i = Setting.lbKey.length; i--;) {
	var a = Setting.lbKey[i]
	kWrite[a] = leftbarKeyGen(a)
}
kWrite.w=function() { document.body.scrollTop-=500 }
kWrite.e=function() { document.body.scrollTop+=500 }
kWrite.r=function() { page('/') }
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
kWrite.v= function(e) {
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

if (a && $('h1').innerText) {//not firefox..
	var evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null)
} else{
var evt = new MouseEvent("click")
}
function linkKeyGen(a) {
	return function() {
		var li = $('a[keycue=' + a + ']')
		li.dispatchEvent(evt)
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
