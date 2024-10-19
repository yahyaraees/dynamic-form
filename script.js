const skillsList = document.getElementById("skills-list");
const resumeForm = document.getElementById("resume-form");

const newSkill = (skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  return li;
};

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Form submission ko rokna
  const skillInput = document.getElementById("skill-input");
  const skill = skillInput.value;
  if (skill) {
    skillsList.appendChild(newSkill(skill));
    skillInput.value = ""; // Input field ko clear karna
  }
});
