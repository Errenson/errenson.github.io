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

		var ulName=['','时间管理','环境搭建','Programming']
		State.gpath=ulName[li.parentElement.id.substr(-1)]+'/'+li.innerText
console.log(State.gpath);
		page('/' + li.innerText)
	}
}
for (var i = Setting.lbKey.length; i--;) {
	var a = Setting.lbKey[i]
	kWrite[a] = leftbarKeyGen(a)
}

//open links
kWrite.j= function(e) {
		var a = $$('a')
		console.log(a);
		if (a) {
			$each(a, function(link, i) {
				link.setAttribute('keycue', Setting.linkKey[i])
				link.setAttribute('target', '_blank')
			})
			key.setScope('link')
		}
		console.log(a);
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
		console.log(li);
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
	console.log(a);
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