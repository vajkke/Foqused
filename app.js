//buttons
const dailyBtn = document.querySelector(".time-daily");
const weeklyBtn = document.querySelector(".time-weekly");
const monthlyBtn = document.querySelector(".time-monthly");

// display
//current values
const workValue = document.querySelector(".work-value");
const playValue = document.querySelector(".play-value");
const studyValue = document.querySelector(".study-value");
const exerciseValue = document.querySelector(".exercise-value");
const socialValue = document.querySelector(".social-value");
const selfCareValue = document.querySelector(".selfCare-value");

// past day/week/month values
const pastWorkValue = document.querySelector(".work-past-value");
const pastPlayValue = document.querySelector(".play-past-value");
const pastStudyValue = document.querySelector(".study-past-value");
const pastExerciseValue = document.querySelector(".exercise-past-value");
const pastSocialValue = document.querySelector(".social-past-value");
const pastSelfCareValue = document.querySelector(".selfCare-past-value");

// yesterday/last week/last month
const timeWorkDisplay = document.querySelector(".work-previous-time");
const timePlayDisplay = document.querySelector(".play-previous-time");
const timeStudyDisplay = document.querySelector(".study-previous-time");
const timeExerciseDisplay = document.querySelector(".exercise-previous-time");
const timeSocialDisplay = document.querySelector(".social-previous-time");
const timeSelfCareDisplay = document.querySelector(".selfCare-previous-time");

const allTimeDisplays = [
  timeWorkDisplay,
  timePlayDisplay,
  timeStudyDisplay,
  timeExerciseDisplay,
  timeSocialDisplay,
  timeSelfCareDisplay,
];

const dailyValues = {
  work: ["5hrs", "4hrs 30min"],
  play: ["2hrs", "1hr"],
  study: ["35min", "40min"],
  exercise: ["1hr", "0hr"],
  social: ["30min", "1hr"],
  selfcare: ["30min", "0hr"],
};

const weeklyValues = {
  work: ["32hrs", "36hrs"],
  play: ["10hrs", "8hrs"],
  study: ["4hrs", "7hrs"],
  exercise: ["4hrs", "5hrs"],
  social: ["5hrs", "10hrs"],
  selfcare: ["2hrs", "2hrs"],
};

const monthlyValues = {
  work: ["136hrs", "140hrs"],
  play: ["36hrs", "40hrs"],
  study: ["22hrs", "25hrs"],
  exercise: ["18hrs", "20hrs"],
  social: ["30hrs", "30hrs"],
  selfcare: ["8hrs", "8hrs"],
};

const appFunction = () => {
  dailyBtn.addEventListener("click", () => {
    weeklyBtn.style.opacity = "0.7";
    monthlyBtn.style.opacity = "0.7";
    dailyBtn.style.opacity = "1";

    allTimeDisplays.forEach(
      (timeDisplay) => (timeDisplay.innerHTML = "Yesterday")
    );

    //current values
    workValue.innerHTML = dailyValues.work[0];
    playValue.innerHTML = dailyValues.play[0];
    studyValue.innerHTML = dailyValues.study[0];
    exerciseValue.innerHTML = dailyValues.exercise[0];
    socialValue.innerHTML = dailyValues.social[0];
    selfCareValue.innerHTML = dailyValues.selfcare[0];

    // yesterday values
    pastWorkValue.innerHTML = dailyValues.work[1];
    pastPlayValue.innerHTML = dailyValues.play[1];
    pastStudyValue.innerHTML = dailyValues.study[1];
    pastExerciseValue.innerHTML = dailyValues.exercise[1];
    pastSocialValue.innerHTML = dailyValues.social[1];
    pastSelfCareValue.innerHTML = dailyValues.selfcare[1];
  });

  weeklyBtn.addEventListener("click", () => {
    dailyBtn.style.opacity = "0.7";
    monthlyBtn.style.opacity = "0.7";
    weeklyBtn.style.opacity = "1";

    allTimeDisplays.forEach(
      (timeDisplay) => (timeDisplay.innerHTML = "Last week")
    );

    //current values
    workValue.innerHTML = weeklyValues.work[0];
    playValue.innerHTML = weeklyValues.play[0];
    studyValue.innerHTML = weeklyValues.study[0];
    exerciseValue.innerHTML = weeklyValues.exercise[0];
    socialValue.innerHTML = weeklyValues.social[0];
    selfCareValue.innerHTML = weeklyValues.selfcare[0];

    // last week values
    pastWorkValue.innerHTML = weeklyValues.work[1];
    pastPlayValue.innerHTML = weeklyValues.play[1];
    pastStudyValue.innerHTML = weeklyValues.study[1];
    pastExerciseValue.innerHTML = weeklyValues.exercise[1];
    pastSocialValue.innerHTML = weeklyValues.social[1];
    pastSelfCareValue.innerHTML = weeklyValues.selfcare[1];
  });

  monthlyBtn.addEventListener("click", () => {
    dailyBtn.style.opacity = "0.7";
    weeklyBtn.style.opacity = "0.7";
    monthlyBtn.style.opacity = "1";

    allTimeDisplays.forEach(
      (timeDisplay) => (timeDisplay.innerHTML = "Last month")
    );

    //current values
    workValue.innerHTML = monthlyValues.work[0];
    playValue.innerHTML = monthlyValues.play[0];
    studyValue.innerHTML = monthlyValues.study[0];
    exerciseValue.innerHTML = monthlyValues.exercise[0];
    socialValue.innerHTML = monthlyValues.social[0];
    selfCareValue.innerHTML = monthlyValues.selfcare[0];

    // last month values
    pastWorkValue.innerHTML = monthlyValues.work[1];
    pastPlayValue.innerHTML = monthlyValues.play[1];
    pastStudyValue.innerHTML = monthlyValues.study[1];
    pastExerciseValue.innerHTML = monthlyValues.exercise[1];
    pastSocialValue.innerHTML = monthlyValues.social[1];
    pastSelfCareValue.innerHTML = monthlyValues.selfcare[1];
  });
};

appFunction();
