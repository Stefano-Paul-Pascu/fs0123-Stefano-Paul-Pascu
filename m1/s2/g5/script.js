function numero(dato){ 
    document.getElementById("calcoli").value += dato;
 }
 
 function operazione() { 
 document.getElementById("calcoli").value = eval(document.getElementById("calcoli").value);
 }
 
 function cancella() { 
  document.getElementById("calcoli").value = "";
 } 