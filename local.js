let signup=()=>{
    let signname=document.querySelector("#name").value
    let signemail=document.querySelector("#email").value
    let signmobile=document.querySelector("#mobile").value
    let signpassword=document.querySelector("#pass").value

    let signerrname=document.querySelector("#errname")
    let signerremail=document.querySelector("#erremail")
    let signerrmobile=document.querySelector("#errmobile")
    let signerrpass=document.querySelector("#errpass")

    if (signname==="") {
        signerrname.innerHTML="Enter your name"
        signerrname.style.color="red"
        document.querySelector("#name").placeholder="Enter your name"
        document.querySelector("#name").focus()
        return false;
    }
    else if (signemail==="") {
        signerremail.innerHTML="Enter email"
        signerremail.style.color="red"
        document.querySelector("#email").placeholder="Enter your email"
        document.querySelector("#email").focus()
        return false;
    }
    else if (!(signemail.includes('@') && signemail.includes('.com'))) {
        signerremail.innerHTML="Please enter a valid email"
        signerremail.style.color="red"
        document.querySelector("#email").placeholder="Please enter a valid email"
        document.querySelector("#email").focus()
        return false;
    }
    else if (signmobile==="") {
        signerrmobile.innerHTML="Please enter mobile number"
        signerrmobile.style.color="red"
        document.querySelector("#mobile").placeholder="Please enter mobile number"
        document.querySelector("#mobile").focus()
        return false;
    }
    else if (signmobile.length!=10) {
        signerrmobile.innerHTML="Please enter 10-digit number"
        signerrmobile.style.color="red"
        document.querySelector("#mobile").placeholder="Please enter 10-digit number"
        document.querySelector("#mobile").focus()
        return false;
    }
    else if (signpassword==="") {
        signerrpass.innerHTML="Please enter password"
        signerrpass.style.color="red"
        document.querySelector("#pass").placeholder="Please enter password"
        document.querySelector("#pass").focus()
        return false;  
    }
    else if (!(
        signpassword.match(/[1234567890]/) &&
        signpassword.match(/[!@#$%^&*()]/) &&
        signpassword.match(/[a-z]/) &&
        signpassword.match(/[A-Z]/)
      ))
      {
        signerrpass.innerHTML="Password should have at least one uppercase letter, one lowercase letter, one digit"
        signerrpass.style.color="red"
        document.querySelector("#pass").placeholder="Please enter valid password"
        document.querySelector("#pass").focus()
         return false;
    }

localStorage.setItem("name",signname)
localStorage.setItem("email",signemail)
localStorage.setItem("mobile",signmobile)
localStorage.setItem("pass",signpassword)

location.href="login.html"
return false;
}

let login=()=>{
   let loginname=document.querySelector("#logname").value
   let loginpass=document.querySelector("#logpass").value

   let localname=localStorage.getItem("name")
   let localpass=localStorage.getItem("pass")
  
   if (loginname==localname && loginpass==localpass) {
    location.href="index.html";
   }
   else
   {
    alert("Login Failed")
   }
   return false;

}

setInterval(() => {
    let show = document.querySelector("#clockk");
    let date = new Date();
    let hours = `<span class="hours">${date.getHours().toString().padStart(2,"0")}</span>`;
    let minutes = `<span class="minutes">${date.getMinutes().toString().padStart(2,"0")}</span>`;
    let seconds = `<span class="seconds">${date.getSeconds().toString().padStart(2,"0")}</span>`;
    show.innerHTML = `${hours} <span class="colon">: </span> ${minutes} <span class="colon">: </span> ${seconds}`;
  }, 1000);

document.querySelector('.swap-icon').addEventListener('click', function() {
    const fromCity = document.getElementById('from-city');
    const toCity = document.getElementById('to-city');
    const temp = fromCity.value;
    fromCity.value = toCity.value;
    toCity.value = temp;
});

document.getElementById('travellers').addEventListener('focus', function() {
   alert('Traveller options will be displayed here.');
});





var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  

  

  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  

  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}







  
  

  
  