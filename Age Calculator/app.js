const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 31];

function agecalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthdate, birthyear;
    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);
    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear)
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return
    }
    birthyear = currentYear - birthDetails.year;
    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month
    }
    else {
        birthyear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if (currentDate >= birthDetails.date) {
        birthdate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthdate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthyear--
        }
    }
    displayResult(birthdate, birthMonth.birthyear);
}
function displayResult(bDate, bMonth, Byear) {
    document.getElementById("year").textContent = Byear;
    document.getElementById("Months").textContent = bMonth;
    document.getElementById("Days").textContent = bDate;
}
function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }

}


console.log(agecalculate());




































