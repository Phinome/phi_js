(function (window) {
	var phis = window.phis = window.phis || {} , e = null;
	phis = {
		init : function () {
			try {
				console.log('OK');
				return true;
			} catch(e) {
				console.error('failed');
			}
		},
	
		addloadEvent : function(func)
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
		},
		
		insertAfter : function(newElement , targetElement)
		{
			var parent = targetElement.parentNode;
			if( parent.lastChild == targetElement )
			{
				parent.appendChild( newElement );
			} else 
			{
				parent.insertBefore( newElement , targetElement.nextSibling );
			}
		},
		
		getHttpObject : function()
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
		},
		
		//Hijax : 渐近增强地使用Ajax。使用JavaScript去拦截默认动作而不是一开始就使用JavaScript。
		
		getNextElement : function( node )
		{
			if( node.nodeType == 1 ) {
				return node;
			}
			if( node.nextSibling ) {
				return getNextElement( node.nextSibling );
			}
			return null;
		}
		
		stripeTables : function( colors ) {
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
		
		heightLightRows : function() {
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
		
		addClass :function( element , value ) {
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
		
		styleElementSibling : function( tag , theClass ) {
			if ( !document.getElementsByTagName)	return false;
			var elems = document.getElementsByTagName( tag );
			var elem;
			var elemsLength = elems.length;
		
			for( var i=0; i<= elemsLength; i++ ) {
				elem = getNextElement( elems[i].nextSibling );
				addClass( elem , theClass );
			}
		}
		
		moveElement : function( elementID , finaX , finaY , interval ) {
			if( !document.getElementById )	return false;
			if( !document.getElementById( elementID ) )	return false;
			
			var elem = document.getElementById( elementID );
			if ( elem.movement )
			{
				clearTimeout( elem.movement );
			}
		
			if ( !elem.style.top )
			{
				elem.style.top = 0 + "px";
			}
			if ( !elem.style.left )
			{
				elem.style.left = 0 +"px";
			}
		
			var posX = parseInt( elem.style.left );
			var posY = parseInt( elem.style.top );
			var dist = 0;
		
			if ( posX == finaX && posY == finaY)
			{
				return true;
			}
			
			if ( posX < finaX )
			{
				dist = Math.ceil( (finaX -posX) /10 );
				posX = posX + dist; 
			}
			if ( posX > finaX )
			{
				dist = Math.ceil( (finaX -posX) /10 );
				posX = posX - dist; 
			}
			if ( posY < finaY )
			{
				dist = Math.ceil( ( finaY - posY )/ 10 );
				posY = posY + dist;
			}
			if ( posY > finaY )
			{
				dist = Math.ceil( ( finaY - posY )/ 10 );
				posY = posY - dist;
			}
			elem.style.left = posX + "px";
			elem.style.top = posY + "px";
		
			var repeat = "moveElement('" + elementID + "' , "+finaX+" , "+finxY+" , "+interval+")";
			elem.movement = setTimeout( repeat , interval );
		}
		
		//统计出现次数最多的字符
		counterStr : function( str ) {
			var maxLenght = 0;//命名一个变量放置字母出现的最高次数并初始化为0  
			var result = ''; //命名一个变量放置结果输入
			while( str != '' ) { //循环迭代开始，并判断字符串是否为空 
				oldStr = str;//将原始字符串保存
				getStr = str.substr( 0 , 1 );//取得字符串的第一个字符
				eval( "str = str.replace(/"+getStr+"/g , '' )" );//剔除第一个元素
				if( oldStr.length - str.length > maxLength ) {//判断原始的字符串长度减去替代后字符串长度是否大于之前出现的最大的字符串长度
						maxLength = oldStr.length - str.length;//两字符串长度相减得到最大的字符串长度
						result = getStr + " = " + maxLength;//返回最大的字符串结果（字母、出现次数）
				}
			}
			return result;
		}
	}	
	return phis;
}(window));
