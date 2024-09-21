//https://qcalendar.netlify.app/developing/qcalendarday-week/week-slot-day-body 
// Still missing some functions 
<template>
  <div class="subcontent"> <navigation-bar
      @today="onToday"
      @prev="onPrev"
      @next="onNext"
    />

    <div class="row justify-center">
      <div style="display: flex; max-width: 800px; width: 100%; height: 400px;">
        <q-calendar-day
          :weekdays="[1,2,3,4,5,6,0]"
          :interval-minutes="15"
          :interval-count="96"
          :interval-height="15"
          :style="indigo"
          ref="calendar"
          v-model="selectedDate"
          view="week"
          animated
          bordered
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-interval="onClickInterval"
          @click-head-intervals="onClickHeadIntervals"
          @click-head-day="onClickHeadDay"
          >
          <template #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }">
            <template
              v-for="event in getEvents(timestamp.date)"
              :key="event.id"
            >
              <div
                v-if="event.time !== undefined"
                class="my-event"
                :class="badgeClasses(event, 'body')"
                :style="badgeStyles(event, 'body', timeStartPos, timeDurationHeight)"
              >
                <span class="title q-calendar__ellipsis">
                  {{ event.title }}
                  <q-tooltip>{{ event.details }}</q-tooltip>
                </span>
              </div>
            </template>
          </template>
        </q-calendar-day>
      </div>
    </div>
  </div>
</template>
<script setup>
    import { ref } from 'vue'; // Import ref from Vue
    import {parseDate} from '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.esm.js'

    const CURRENT_DAY = new Date();
    function getCurrentDay (day) {
      const newDay = new Date(CURRENT_DAY)
      newDay.setDate(day)
      const tm = parseDate(newDay)
      return tm.date
    }

    const events = [
        {
          id: 1,
          title: '1st of the Month',
          details: 'Everything is funny as long as it is happening to someone else',
          date: getCurrentDay(1),
          bgcolor: 'orange'
        },
        {
          id: 2,
          title: 'Sisters Birthday',
          details: 'Buy a nice present',
          date: getCurrentDay(4),
          bgcolor: 'green',
          icon: 'fas fa-birthday-cake'
        },
        {
          id: 3,
          title: 'Meeting',
          details: 'Time to pitch my idea to the company',
          date: getCurrentDay(10),
          time: '10:00',
          duration: 120,
          bgcolor: 'red',
          icon: 'fas fa-handshake'
        },
        {
          id: 4,
          title: 'Lunch',
          details: 'Company is paying!',
          date: getCurrentDay(10),
          time: '11:30',
          duration: 90,
          bgcolor: 'teal',
          icon: 'fas fa-hamburger'
        },
        {
          id: 5,
          title: 'Visit mom',
          details: 'Always a nice chat with mom',
          date: getCurrentDay(20),
          time: '17:00',
          duration: 90,
          bgcolor: 'grey',
          icon: 'fas fa-car'
        },
        {
          id: 6,
          title: 'Conference',
          details: 'Teaching Javascript 101',
          date: getCurrentDay(22),
          time: '08:00',
          duration: 540,
          bgcolor: 'blue',
          icon: 'fas fa-chalkboard-teacher'
        },
        {
          id: 7,
          title: 'Girlfriend',
          details: 'Meet GF for dinner at Swanky Restaurant',
          date: getCurrentDay(22),
          time: '19:00',
          duration: 180,
          bgcolor: 'teal',
          icon: 'fas fa-utensils'
        },
        {
          id: 8,
          title: 'Fishing',
          details: 'Time for some weekend R&R',
          date: getCurrentDay(27),
          bgcolor: 'purple',
          icon: 'fas fa-fish',
          days: 2
        },
        {
          id: 9,
          title: 'Vacation',
          details: 'Trails and hikes, going camping! Don\'t forget to bring bear spray!',
          date: getCurrentDay(29),
          bgcolor: 'purple',
          icon: 'fas fa-plane',
          days: 5
        }
      ];

    const indigo = {
          '--calendar-scrollbar-track': '#7986cb',
          '--calendar-scrollbar-thumb': '#1a237e',
          '--calendar-scrollbar-thumb-hover': '#3949ab',
          '--calendar-scrollbar-track-dark': '#7986cb',
          '--calendar-scrollbar-thumb-dark': '#1a237e',
          '--calendar-scrollbar-thumb-hover-dark': '#3949ab',
          '--calendar-border': '#7986cb 1px solid',
          '--calendar-border-dark': '#e8eaf6 1px solid',
          '--calendar-border-section': '#9fa8da 1px dashed',
          '--calendar-border-section-dark': '#9fa8da 1px dashed',
          '--calendar-border-current': '#7986cb 2px solid',
          '--calendar-border-current-dark': '#3d5afe 2px solid',
          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',
          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',
          '--calendar-color': '#1a237e',
          '--calendar-color-dark': '#e8eaf6',
          '--calendar-background': '#e8eaf6',
          '--calendar-background-dark': '#1a237e',
          '--calendar-current-color': '#027BE3',
          '--calendar-current-color-dark': '#3d5afe',
          '--calendar-current-background': '#00000000',
          '--calendar-current-background-dark': '#1a237e',
          '--calendar-disabled-date-color': '#e8eaf6',
          '--calendar-disabled-date-color-dark': '#bebebe',
          '--calendar-disabled-date-background': '#9fa8da',
          '--calendar-disabled-date-background-dark': '#121212',
          '--calendar-active-date-color': '#e8eaf6',
          '--calendar-active-date-color-dark': '#ffff66',
          '--calendar-active-date-background': '#3d5afe',
          '--calendar-active-date-background-dark': '#7986cb',
          '--calendar-outside-color': '#1a237e',
          '--calendar-outside-color-dark': '#bebebe',
          '--calendar-outside-background': '#00000000',
          '--calendar-outside-background-dark': '#121212',
          '--calendar-selected-color': '#027BE3',
          '--calendar-selected-color-dark': '#027BE3',
          '--calendar-selected-background': '#cce7ff',
          '--calendar-selected-background-dark': '#cce7ff',
          '--calendar-mini-selected-color': 'unset',
          '--calendar-mini-selected-color-dark': '#027BE3',
          '--calendar-mini-selected-background': 'unset',
          '--calendar-mini-selected-background-dark': '#cce7ff',
          '--calendar-mini-selected-label-color': '#027BE3',
          '--calendar-mini-selected-label-color-dark': '#cce7ff',
          '--calendar-mini-selected-label-background': '#cce7ff',
          '--calendar-mini-selected-label-background-dark': '#027BE3',
          '--calendar-range-color': '#027BE3',
          '--calendar-range-color-dark': '#027BE3',
          '--calendar-range-background': '#cce7ff',
          '--calendar-range-background-dark': '#cce7ff',
          '--calendar-mini-range-color': '#cce7ff',
          '--calendar-mini-range-color-dark': '#027BE3',
          '--calendar-mini-range-background': 'unset',
          '--calendar-mini-range-background-dark': 'unset',
          '--calendar-mini-range-label-color': '#cce7ff',
          '--calendar-mini-range-label-color-dark': '#027BE3',
          '--calendar-mini-range-label-background': '#cce7ff',
          '--calendar-mini-range-label-background-dark': '#cce7ff',
          '--calendar-mini-range-connector-color': '#cce7ff',
          '--calendar-mini-range-connector-color-dark': '#ffff66',
          '--calendar-mini-range-hover-color': '#027BE3',
          '--calendar-mini-range-hover-color-dark': '#ffff66',
          '--calendar-mini-range-firstlast-color': '#cce7ff',
          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',
          '--calendar-mini-range-firstlast-background': 'unset',
          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',
          '--calendar-mini-range-firstlast-label-color': '#cce7ff',
          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',
          '--calendar-mini-range-firstlast-label-background': '#027BE3',
          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',
          '--calendar-intervals-width': '56px',
          '--calendar-work-week-width': '30px',
          '--calendar-mini-work-week-width': '30px',
          '--calendar-work-week-font-size': '1.0em',
          '--calendar-head-font-weight': '600'
        };
</script>
