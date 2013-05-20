function addloadEvent(func)
{
	var oldonLoad = window.onload;
	if( typeof window.onload != 'function' )
	{
		window.onload = func;
	} else
	{
		window.onload = function (){
			oldonLoad();
			func();
		}
	}
}

function insertAfter(newElement , targetElement)
{
	var parent = targetElement.parentNode;
	if( parent.lastChild == targetElement )
	{
		parent.appendChild( newElement );
	} else 
	{
		parent.insertBefore( newElement , targetElement.nextSibling );
	}
}

function getHttpObject()
{
	if ( typeof XMLHttpRequest == 'undefined')
		XMLHttpRequest = function(){		
			try
			{
				return new ActiveXObject( "Msxml2.XMLHTTP.6.0" );
			}
			catch ( e ){}
			try
			{
				return new ActiveXObject( "Msxml2.XMLHTTP.3.0" );	
			}
			catch (e){}
			try
			{
				return new ActiveXObject( "Msxml2.XMLHTTP" );
			}
			catch (e){}
			return false;
	}
	return new XMLHttpRequest();
}

Hijax : 渐近增强地使用Ajax。使用JavaScript去拦截默认动作而不是一开始就使用JavaScript。

function getNextElement( node )
{
	if( node.nodeType == 1 ) {
		return node;
	}
	if( node.nextSibling ) {
		return getNextElement( node.nextSibling );
	}
	return null;
}

function stripeTables( colors ) {
	if( !document.getElementsByTagName)		return false;
	var tables = document.getElementsByTagName( "table" );
	var tablesLength = tables.length;

	for(var i = 0; i <= tablesLength; i++) {
		var odd = false;
		var rows = document.getElementsByTagName( "tr" );
		var rowsLength = rows.length;
		for(var j = 0; j <= rowsLength; j++) {
			if( odd == true ) {
				rows[j].style.backgroundColor = colors;
				odd = false;
			} else
			{
				odd = true;
			}
		}
	}
}

function heightLightRows () {
	if( !document.getElementsByTagName )	return false;
	var rows = document.getElementsByTagName( "tr" );
	var rowsLength = rows.length;

	for(var i = 0; i <= rowsLength; i++) {
		rows[i].onmouseover = function () {
			this.style.fontWeight = 'bold';
		}
		rows.onmouseout = function() {
			this.style.fontWeight = 'normal';
		}
	}
}

function addClass ( element , value ) {
	if( !element.className )
	{
		element.className = value;
	} else
	{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function styleElementSibling ( tag , theClass ) {
	if ( !document.getElementsByTagName)	return false;
	var elems = document.getElementsByTagName( tag );
	var elem;
	var elemsLength = elems.length;

	for( var i=0; i<= elemsLength; i++ ) {
		elem = getNextElement( elems[i].nextSibling );
		addClass( elem , theClass );
	}
}