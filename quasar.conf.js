css: [
  'app.sass',
  '~quasar-ui-qcalendar/src/css/calendar-day.sass'
],

build: {
  transpile: true,
  transpileDependencies: [
    /quasar-ui-qcalendar[\\/]src/
  ]
}
