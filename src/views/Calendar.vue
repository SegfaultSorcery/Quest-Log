<!-- https://fullcalendar.io/docs/vue -->
<!-- https://fullcalendar.io/docs/event-object -->
<template>
    <div>
        <FullCalendar :options="calendarOptions" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'; // Import ref from Vue
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    firstDay: 1,
    events: [
        {
            title: 'event1', 
            start: '2024-09-18',
            end: '2024-09-20',
            color:  "red",
            allDay: true
        },
        {
            title: 'event1', 
            start: '2024-09-18',
            end: '2024-09-20'
        }
    ]
});
</script>

