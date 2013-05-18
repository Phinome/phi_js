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