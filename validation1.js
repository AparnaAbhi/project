function validation1()
{
var fname=document.getElementById("fname").value;
var fnameformat=/^([a-zA-Z]+)$/;	
var lname=document.getElementById("lname").value;
var lnameformat=/^([a-zA-Z]+)$/;
if(fname.match(fnameformat)&&lname.match(fnameformat))
{
	
}
else 
{
	alert("Invalid name")
}	
var email=document.getElementById("email").value;
var mailformat=/^([a-zA-Z0-9]+)@([a-z0-9]+).([a-z]{2,20})$/;
var phone=document.getElementById("email").value;
var nbrformat=/^([6-9])([0-9]{9})$/;
if(mailformat.test(email))
{
	
}
else if(nbrformat.test(email))
{
	
}
else 
{
	alert("Invalid number")
}
var pswd=document.getElementById("pswd").value;
var pswrdformat=/^([a-zA-Z0-9]+)$/;
if(pswrdformat.test(pswd))
{
	
}
else
{
	alert("Invalid Password");
}
var pswrd=document.getElementById("pswrd").value;
if(pswd==pswrd&&pswrdformat.test(pswd))
{
	
	alert("successfully registered")
	window.open('project.html')
}
else
{
   	
	 alert("Registration Failed")
}
}

function pse(){
var pswd=document.getElementById("pswd");
var eye=document.getElementById("eye");
var oeye=document.getElementById("o-eye");
if(pswd.type=='text')
{
	pswd.type='Password'
	oeye.style.display='none'
	eye.style.display='block'
	
}
else
{
	pswd.type='text'
	eye.style.display='none'
	oeye.style.display='block'

}
}