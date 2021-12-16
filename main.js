const dropdown = document.getElementById("dropdowncontent");
const dropdownButton = document.getElementById("dropdownbutton");
const dropdownParent = document.getElementById("dropdownbox");

const showDropdown = () => {
    if (dropdown.style.visibility === "visible"){
        dropdown.style.visibility = "hidden";
        // dropdown.style.opacity = "0";
        dropdown.style.height = "0%";
        dropdownParent.style.display ="none";

    }else{
    dropdown.style.visibility = "visible";
    // dropdown.style.opacity = "1";
    dropdown.style.height = "100%"
    dropdownParent.style.display="flex";
    }
}

dropdownButton.addEventListener("click", showDropdown)