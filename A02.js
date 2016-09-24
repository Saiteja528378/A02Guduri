function calculate() {
        var java = document.getElementById('Java').value;
    var web = document.getElementById('Web').value;
    var database = document.getElementById('Database').value;
    var result = document.getElementById('price');
    var myResult = (20*java+(30*web)+(150*database));
    result.value = myResult;
}
function buy()
{
    var java = document.getElementById('Java').value;
    var web = document.getElementById('Web').value;
    var database = document.getElementById('Database').value;
    var myResult = document.getElementById('price').value;
        if(myResult>0)
    {
     document.getElementById("final").innerHTML = "Thanks for Shopping...!";
    }
     else
     {
     document.getElementById("final").innerHTML = "Please select your order";
     }
}