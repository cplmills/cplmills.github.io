function showDelivery(){
    radios = document.getElementsByName("pickup-location");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            showForm = document.querySelector("#fs_delivery");
            requireDelivery = document.getElementsByName("delivery-address")[0];
            console.log(requireDelivery);
            if (radios[i].value == "Delivery"){
                showForm.style.display = "block";
                requireDelivery.required = true;
            } else {
                showForm.style.display = "none";
                requireDelivery.removeAttribute('required','');
            }
          break;
        }
    }
}