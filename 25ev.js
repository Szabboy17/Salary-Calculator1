function sal(){
    var basic,szja,tb,net;
    basic=document.getElementById("s").value;
    szja=basic*15/100;
    var age = 26;
    szjamentes=document.getElementById("age").value;
    if(szjamentes<age){
        szja=0;
    }
    tb=basic*18.5/100;
    net=parseInt(basic)-parseInt(szja)-parseInt(tb);
    document.getElementById("szja").value=szja;
    document.getElementById("tb").value=tb;
    document.getElementById("net").value=net;


}










function ClickHun(){
    if(ClickHun)
    window.location= "index.html"
};

function ClickEn(){
    
    document.getElementById("title").innerHTML = "Simple Hungarian Salaray Calcualtor";
    document.getElementById("name").innerHTML = "Name:";
    document.getElementById("grosssalary").innerHTML = "Gross salary:";
    document.getElementById("age").innerHTML = "Age:";

    document.getElementById("count").innerHTML = "Count!";

    document.getElementById("ptax").innerHTML = "Personal tax:";
    document.getElementById("htax").innerHTML = "Health and Pension insurance:";
    document.getElementById("netsal").innerHTML = "Net Salary:";
    document.getElementById("u25").innerHTML = "*Under the age of 25 you should not pay Personal tax.";
}
