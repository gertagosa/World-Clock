function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let losParisElement = document.querySelector("#paris");
  let losParisDateElement = losParisElement.querySelector(".date");
  let losParisTimeElement = losParisElement.querySelector(".time");

  let losParisTime = moment().tz("Europe/Paris");

  losParisDateElement.innerHTML = losParisTime.format("MMMM Do YYYY");
  losParisTimeElement.innerHTML = losParisTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
