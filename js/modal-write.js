var button = document.querySelector(".write-button");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".button-close");
var form = popup.querySelector(".modal-form");
var nameModal = popup.querySelector("[name=name]");
var emailModal = popup.querySelector("[name=email]");
var mail = popup.querySelector("textarea");
var isStorageSupport = true;
var storageName = "";
var storageEmail= "";

try {
    storageName = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageName) {
        nameModal.value = storageName;
    } else {
        nameModal.focus();
    }
    if (storageEmail) {
        emailModal.value = storageEmail;
    } else {
        emailModal.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameModal.value || !emailModal.value || !mail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameModal.value);
            localStorage.setItem("email", emailModal.value);
        }
    }
});