State = {}
Setting = {}
Setting.lbKey = 'asdqwerzxcvjkl;'
Setting.linkKey = 'asdfqwerzxcvjkl;uiop,.m/0123456789'
Links=[]
$ = function(s) {
	return document.querySelector(s)
}
$$ = function(s) {
	return document.querySelectorAll(s)
}
$isStr = function(v) {
	return typeof v == 'string'
}

//class
$ca = function(a, b) {
	if ($isStr(a)) a = $(a)
	a.classList.add(b)
}
$cr = function(a, b) {
	if ($isStr(a)) a = $(a)
	a.classList.remove(b)
}

//element
$e = function(tag, text, id, clas, attr) {
		id = id ? ' id=' + id : ''
		clas = clas ? ' class=' + clas : ''
		attr = attr ? ' ' + attr : ''
		return '<' + tag + id + clas + attr + '>' + text
	}
	//element Li with Class
$elc = function(text, clas, attr) {
		return $e('li', text, '', clas, attr)
	}
//functional
$each = function(array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, array[i], i)
	}
}
//ajax generator
$agen = function(method, fn,accept) {
	return function(url, data) {
		return function(callback) {
			var request = new XMLHttpRequest()
			request.onload = function() {
				if(callback){
					res = fn ? fn(request.responseText) : request.responseText
					callback(res)
				}
			}
			request.open(method, url)
			if(accept){
				request.setRequestHeader('Accept',accept)
			}
			request.send(JSON.stringify(data))
		}
	}
}
$agh = $agen('get',undefined,'application/vnd.github.VERSION.html')
$agr = $agen('get',undefined,'application/vnd.github.VERSION.raw')
$agj = $agen('get',JSON.parse)