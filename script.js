const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;

    message.textContent =
        `تم حجز الموعد بنجاح يا ${name} مع ${doctor} يوم ${date} ❤️`;

    form.reset();
});
