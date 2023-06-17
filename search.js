function search()
{
var bname=document.getElementById("bn").value;
var bnameformat=/^([a-zA-Z]+)$/;	
var author=document.getElementById("au").value;
var authorformat=/^([a-zA-Z]+)$/;
if(bname.match(bnameformat)&&author.match(authorformat))
{
	window.open('end.pdf')
}
else
{
	alert("Invalid")
}
}