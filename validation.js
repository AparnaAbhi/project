function validation()
{
var email=document.getElementById("email").value;
var mailformat=/^([a-zA-Z0-9]+)@([a-z0-9]+).([a-z]{2,20})$/;
var phone=document.getElementById("email").value;
var nbrformat=/^([6-9])([0-9]{9})$/;
if(mailformat.test(email))
{
	
}
else if(nbrformat.test(phone))
{
	
}
else
{
	alert("Invalid email or number")
}
var pswd=document.getElementById("pswd").value;
var pswrdformat=/^([a-zA-Z0-9]+)$/;
if(pswrdformat.test(pswd))
{
	window.open('project.html')
}
else
{
	alert("Invalid Password");
	
	}

}
function pse(){
var pswd=document.getElementById("pswd");
var eye=document.getElementById("ey");
var oeye=document.getElementById("v-eye");
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