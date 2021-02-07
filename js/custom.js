// ticket counting and costing
function ticketHandler(type, ticketField){
    
    var ticketCount  = document.getElementById(ticketField).value;
    var count = parseInt(ticketCount);
    var tCount =0;
    if(type == true){
        tCount = count + 1;        
    }
    if(type == false && count > 0){
        tCount = count - 1;
    }    
    tCount= document.getElementById(ticketField).value = tCount;
    // var price = ticketPrice(ticketField, tCount);
    var ticketPrice;
    if(ticketField == "f-class"){
        ticketPrice = 150*tCount;
        document.getElementById("f-total").innerText = ticketPrice;
    }else{
        ticketPrice = 100*tCount;
        document.getElementById("e-total").innerText = ticketPrice;
    }
    var fTicket = document.getElementById("f-total").innerText;
    var eTicket = document.getElementById("e-total").innerText;
    var fTotal = parseInt(fTicket);
    var eTotal = parseInt(eTicket);
    var totalPrice = fTotal + eTotal;
    console.log(totalPrice);
    document.getElementById("subtotal").innerText = totalPrice;
    var vat = totalPrice*(10/100);
    document.getElementById("vat").innerText = vat;
    var total = totalPrice + vat;
    document.getElementById("total").innerText = total;
}

function ticketPrice(tClass, quentity){
    var fClassPrice=0;
    var eClassPrice=0;
    if(tClass == "f-class"){
        return fClassPrice = 150*quentity;
    }else{
         return eClassPrice = 100*quentity;
    }
}