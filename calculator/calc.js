function append(x){
    document.getElementById("inputbar").value+=x;
}
function cls(){
    document.getElementById("inputbar").value="";
}
function result(){
    let x=document.getElementById("inputbar").value;
    let result=eval(x);
    document.getElementById("inputbar").value=result;
}