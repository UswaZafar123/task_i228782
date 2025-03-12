const { getEvents, addEvent, getUpcomingEvents } = require('./events');

console.log("Current Events:", getEvents());

addEvent({
    name: "Doctor Appointment",
    description: "Annual health check-up",
    date: "2025-03-20",
    time: "02:00 PM",
    category: "Appointments",
    reminder: "2025-03-20T13:30:00Z"
});

console.log("Updated Events:", getUpcomingEvents());
