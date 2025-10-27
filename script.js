const button = document.querySelector("#btnNow");
button.addEventListener("click" , calculateAmount);

const buttonTip = document.querySelector("#btn");
buttonTip.addEventListener("click", showTip);

function showTip(e){
    e.preventDefault();
    tips.style.display="block";
}

function calculateAmount(e){
    e.preventDefault();

    const package =Number(document.querySelector("#package").value);
    const people =Number(document.querySelector("#people").value);
    const meal = Number(document.querySelector("#meal").value);
    const events =Number(document.querySelector("#events").value);
    const tips =Number(document.querySelector("#tips").value);

    if(package==="" || people<1 || people==="" || meal==="" || events===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in required fields!',
            
          })
    }

    let children = (people*package);
    let result = children + meal + events;
    let totalTip =(result*tips);
    let sum = result + totalTip;
    let totalPerChild = (sum/people);
    
    document.querySelector("#dividedBill").textContent = totalPerChild.toFixed(2);
    document.querySelector("#dividedTip").textContent = totalTip.toFixed(2);
    document.querySelector("#billAndTip").textContent = sum.toFixed(2);

}

gsap.from("h1",{duration:2,opacity:0,})
gsap.from("#choose",{delay:0.8,duration:2,opacity:0,scale:2})
gsap.from("#btnNow",{delay:1.2,duration:2,opacity:0,rotation:720})