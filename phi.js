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