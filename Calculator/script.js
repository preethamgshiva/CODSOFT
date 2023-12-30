function display(val){
    document.getElementById('result').value+=val
    return val
}

function empty(){
    document.getElementById("result").value= "";
}

function solve(){
    let val_1 = document.getElementById('result').value;
    let temp = eval(val_1);
    document.getElementById('result').value = temp;
    return temp;
}