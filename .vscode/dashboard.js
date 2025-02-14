


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



let GetflightDetails = async () => {
  
      let res = await fetch("http://localhost:3000/admin", { method: "GET" });
      let data = await res.json();
      console.log(data);
      displayflightdetails(data);
     
    };


let displayflightdetails = (data) => {
  let flightsection = document.querySelector("#frontt");
  flightsection.innerHTML = ""; // Clear previous data

  data.forEach((flight) => {
      flightsection.innerHTML += `
          <div class="card">
              <p>Flight Name: ${flight.flightname}</p>
              <p>Flight Number: ${flight.flightnum}</p>
              <p>Arrival Time: ${flight.arrivaltime}</p>
              <p>Departure Time: ${flight.deptime}</p>
              <p>Arrival City: ${flight.arrcity}</p>
              <p>Departure City: ${flight.depcity}</p>
              <p>Stop Time: ${flight.stoptime}</p>
              <p>Price: ${flight.price}</p>
              <button onclick="bookFlight('${flight.flightnum}')">Book Flight</button>
          </div>
      `;
  });
};

// Define bookFlight function
let bookFlight = (flightNum) => {
  alert(`Booking flight number: ${flightNum}`);
};

window.onload = () => {
  GetflightDetails();
 
};


