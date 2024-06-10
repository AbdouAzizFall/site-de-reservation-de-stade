function initializeCalendar() {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = generateCalendarHTML();

    // Ajouter des événements de clic sur les créneaux disponibles
    const availableSlots = document.querySelectorAll('.available');
    availableSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            displayReservationForm(slot.dataset.date, slot.dataset.time);
        });
    });
}

function generateCalendarHTML() {
    // Générer du HTML pour afficher le calendrier avec des créneaux horaires
    let html = '<div><h2>Calendrier des Disponibilités</h2><ul>';

    // Exemple de créneaux horaires (à remplacer par des données dynamiques)
    const slots = [
        { date: '2024-06-15', time: '10:00', available: true },
        { date: '2024-06-15', time: '14:00', available: false },
        { date: '2024-06-16', time: '10:00', available: true },
        { date: '2024-06-16', time: '14:00', available: true },
    ];

    slots.forEach(slot => {
        const slotClass = slot.available ? 'available' : 'reserved';
        html += `<li class="${slotClass}" data-date="${slot.date}" data-time="${slot.time}">
                    ${slot.date} à ${slot.time} - ${slot.available ? 'Disponible' : 'Réservé'}
                 </li>`;
    });

    html += '</ul></div>';
    return html;
}
