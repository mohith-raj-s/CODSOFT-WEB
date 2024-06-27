function append(x){
    document.getElementById("inputbar").value+=x;
}
function cls(){
    document.getElementById("inputbar").value="";
}
function result(){
    let x=document.getElementById("inputbar").value;
    if(x[x.length-1] == "+" ||
       x[x.length-1] == "-" ||
       x[x.length-1] == "*"||
       x[x.length-1] == "/"){
        alert("Invalid : Missing Operand");
    }
    else{
        let result=eval(x);
        document.getElementById("inputbar").value=result;
    }
    
}