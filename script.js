const opportunities = [
  {
    title: "Community Garden Volunteer",
    cause: "environment",
    time: "weekend",
    description: "Help maintain local gardens and grow food for the community."
  },
  {
    title: "Online Math Tutor",
    cause: "education",
    time: "short",
    description: "Tutor middle school students in math through virtual sessions."
  },
  {
    title: "Animal Shelter Assistant",
    cause: "animals",
    time: "medium",
    description: "Help care for rescued animals and assist with adoptions."
  },
  {
    title: "Hospital Welcome Desk",
    cause: "health",
    time: "medium",
    description: "Guide visitors and help patients navigate the hospital."
  }
];

function displayOpportunities(list) {
  const container = document.getElementById("opportunities");
  container.innerHTML = "";

  list.forEach(function (op) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${op.title}</h3>
      <p>${op.description}</p>
      <p><strong>Cause:</strong> ${op.cause}</p>
      <p><strong>Time:</strong> ${op.time}</p>
    `;

    container.appendChild(card);
  });
}

function filterOpportunities() {
  const cause = document.getElementById("causeFilter").value;
  const time = document.getElementById("timeFilter").value;

  let filtered = opportunities;

  if (cause !== "all") {
    filtered = filtered.filter(function (op) {
      return op.cause === cause;
    });
  }

  if (time !== "all") {
    filtered = filtered.filter(function (op) {
      return op.time === time;
    });
  }

  displayOpportunities(filtered);
}

displayOpportunities(opportunities);