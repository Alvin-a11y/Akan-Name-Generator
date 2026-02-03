function calculateAkanName(event) {
  event.preventDefault();

  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.querySelector('input[name="gender"]:checked');

  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let CC = Math.floor(year / 100);
  let YY = year % 100;

  let dayOfWeek = Math.floor(
    ((4 * CC - 2 * CC - 1) +
    (5 * YY / 4) +
    (26 * (month + 1) / 10) +
    day) % 7
  );

  if (dayOfWeek < 0) {
    dayOfWeek += 7;
  }

  let akanName = gender.value === "male"
    ? maleNames[dayOfWeek]
    : femaleNames[dayOfWeek];

  document.getElementById("result").innerHTML =
    `You were born on <strong>${days[dayOfWeek]}</strong>.<br>
     Your Akan name is <strong>${akanName}</strong>.`;

  document.getElementById("akanForm").reset();
}

document.getElementById("akanForm").addEventListener("submit", calculateAkanName);
