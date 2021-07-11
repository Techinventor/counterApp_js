let init= 0;
function operation(op){

    
if((op === 'inc') && (init<50)){
    init+=1;
    
    initial.textContent= init;

}
else if(op === 'dec' && init>0){
    init-=1;

    initial.textContent= init;

}else{

    alert('OUT OF BOUND!');
}

}


function add(){
operation('inc')
}

function low(){
operation('dec')
}


    addBtn.addEventListener('click', add);

    lowBtn.addEventListener('click', low);
