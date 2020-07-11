
function CheckName()
{
    var regex = /^[a-zA-Z ]{2,30}$/;
    var ctrl =  document.getElemetnById(sign-form.YourName.value);

    if (regex.test(ctrl.value)) {
        return true;
    }
    else {

        alert("You have entered an invalid Fame!");
                return false;
    }
}