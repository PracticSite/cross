
document.getElementById("btn_reg").addEventListener("click", function(event){
    regs_valid=document.getElementsByClassName("reg");
    regs_valid_i = document.getElementsByClassName("regi");
    for(var i = 0; i<regs_valid.length; i++){
        regs_valid[i].style.color="black"
        if(regs_valid_i[i].value==""){
            regs_valid[i].style.color="red"
        }
        
    }
});