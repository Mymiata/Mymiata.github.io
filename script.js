// Sample equipment data
const equipmentData = [
  { name: "Hot Press", comment: "" },
  { name: "Electrochemical Station", comment: "" },
  { name: "LTS300 - 300 mm Translation Stage", comment: "" },
];

// Populate the equipment list dynamically
const equipmentList = document.getElementById("equipment-list");

equipmentData.forEach((equipment) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${equipment.name}</td>
    <td>${equipment.comment || "No comments"}</td>
  `;
  equipmentList.appendChild(row);
});

// Initialize the calendar
document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "timeGridWeek,timeGridDay",
    },
    events: [
      // Sample events (replace with real data or integrate Google Calendar API)
      {
        title: "Hot Press Reservation",
        start: "2024-11-26T09:30:00",
        end: "2024-11-26T11:00:00",
      },
      {
        title: "Electrochemical Station Maintenance",
        start: "2024-11-26T13:00:00",
        end: "2024-11-26T15:00:00",
      },
    ],
    editable: true, // Allow drag and drop
    selectable: true, // Allow clicking to select a time range
    dateClick: function (info) {
      const title = prompt("Enter reservation title:");
      if (title) {
        calendar.addEvent({
          title,
          start: info.dateStr,
          allDay: false,
        });
      }
    },
  });

  calendar.render();
});
