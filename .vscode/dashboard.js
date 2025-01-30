document.querySelector('.swap-icon').addEventListener('click',function(){
let fromcity=document.querySelector("#from-city");
let tocity=document.querySelector("#to-city");
let temp = fromcity.value;
fromcity.value = tocity.value;
tocity.value = temp;
});

function toggleDropdown() {
    let dropdown = document.getElementById("travellerDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function applySelection() {
    let adults = parseInt(document.getElementById("adults").value);
    let children = parseInt(document.getElementById("children").value);
    let infants = parseInt(document.getElementById("infants").value);
    let travelClass = document.getElementById("travelClass").value;

    let totalTravellers = adults + children + infants;
    let selectionText = `${totalTravellers} Travellers, ${travelClass}`;
    
    document.getElementById("travellers").value = selectionText;
    document.getElementById("travellerDropdown").style.display = "none";
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("travellerDropdown");
    let input = document.getElementById("travellers");

    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

