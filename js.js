let text_field = document.getElementById('number');
const array = [7,8,9,'+',4,5,6,'-',1,2,3,'/',0,'c','=','*','Back']
let btn1 = document.createElement('div');
btn1.type='div';
for(let i=0; i<17; i++){
    let btn = document.createElement('input');
    btn.type = 'button';
    if(i == 4 || i == 8 || i == 12 || i == 16){
       let br = document.createElement('br');
       document.body.appendChild(br);
    }

    
    btn.value = array[i];
    btn.setAttribute('class','value');
    document.body.appendChild(btn);
    if(i==16){
        btn.style.width = '20%';
        btn.style.marginLeft = '1%';
        btn.onclick = function() {back()}
    } 
    else if(i == 14) {
        btn.onclick = function() {result()}
    }
    else if(i == 13) {
        btn.onclick = function() {clear()}
    }
    else{
        btn.style.backgroundColor = 'red';
        btn.onclick = function() {inputValue(btn)}
    }
}

function inputValue(btn){
    //console.log(btn.value);
    text_field.value += btn.value;
    
}

function result(){
    let sv = text_field.value ;
    text_field.value = eval(sv);
}
function clear(){
    text_field.value = "";
}
function back(){
    console.log(text_field.value.length);
    text_field.value = text_field.value.slice(0, -1);
}
