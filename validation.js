function validate() {
    firstName = document.mainForm.firstName.value;
    lastName = document.mainForm.lastName.value;
    messageTxt = document.mainForm.textArea.value;
    if (firstName == "") {
        document.getElementById("fN").style.border = "red solid 3px";
    } else {
        document.getElementById("fN").style.border = "black solid 1px";
    }
    if (lastName == "") {
        document.getElementById("lN").style.border = "red solid 3px";
    } else {
        document.getElementById("lN").style.border = "black solid 1px";
    }
    if (document.getElementById("M").checked || document.getElementById("F").checked) {
        document.getElementById("gen").style.border = "black hidden 1px";
    } else {
        document.getElementById("gen").style.border = "red solid 3px";
    }
    if (messageTxt == "") {
        document.getElementById("tA").style.border = "red solid 3px";
    } else {
        document.getElementById("tA").style.border = "black solid 1px";
    }
    if (!firstName == "" && lastName !== "" && messageTxt !== "" &&
        document.getElementById("M").checked || document.getElementById("F").checked) {
        document.getElementById("nameOf").innerHTML = firstName;
        document.getElementById("BNR").style.visibility = "visible"
        console.log("First name:", firstName);
        console.log("Last name:", lastName);
        if (document.getElementById("M").checked) {
            console.log("Gender: male")
        } else {
            console.log("Gender: female")
        }
        console.log("Your message:", messageTxt);
    } else {
        document.getElementById("nameOf").innerHTML = "";
        document.getElementById("BNR").style.visibility = "hidden"
    }
}
