


let details=async()=>{
 let flightname=document.querySelector("#flightname").value
 let flightnum=document.querySelector("#flightnum").value
 let arrivaltime=document.querySelector("#arrivaltime").value
 let deptime=document.querySelector("#deptime").value
 let arrcity=document.querySelector("#arrcity").value
 let depcity=document.querySelector("#depcity").value
 let stoptime=document.querySelector("#stoptime").value
 let price=document.querySelector("#price").value

 let url="http://localhost:3000/admin"

 await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
  
        flightname:flightname,
        flightnumber:flightnum,
        arrivaltime:arrivaltime,
        deptime:deptime,
        arrcity:arrcity,
        depcity:depcity,
        stoptime:stoptime,
        price:price
        
      })
  });
  return false;
};



