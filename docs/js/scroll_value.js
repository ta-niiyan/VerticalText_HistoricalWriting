<script>
console.log( window ) ;

addEventListener( "scroll", getInfo ) ;

getInfo() ;

function getInfo () {
  scroll_value = window.outerHeight /scroolY;
	document.getElementById( "result" ).textContent = "" ;

  appendText( "outerHeight" + outerHeight + "\n" ) ;
	appendText( "scrollY: " + scrollY + "\n" ) ;
	appendText( "pageYOffset: " + pageYOffset + "\n" ) ;
  appendText( scroll_value );
}

function appendText ( text ) {
	document.getElementById( "result" ).appendChild( document.createTextNode( text ) ) ;
}
</script>
