
const user = "Gløer";

const messageForm = document.querySelector("#messageForm");
const messageText = document.querySelector("#messageText");
const messageDiv = document.querySelector("#messageDiv");

const db = firebase.firestore();
const chatten = db.collection("chatten");

messageForm.onsubmit = (evt) => {
    evt.preventDefault();

    chatten.add({
        from: user,
        text: messageText.value,
        time: firebase.firestore.FieldValue.serverTimestamp()
    });

}