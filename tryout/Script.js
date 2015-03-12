var txtName = "";
var txtOutput = "";
var name = "";

function welcome() 
{
    var txtName = document.getElementById("txtName");
    var txtOutput = document.getElementById("txtOutput");
    var name = txtName.value;
    txtOutput.value = "Welcome to my site, " + name + "!"
}