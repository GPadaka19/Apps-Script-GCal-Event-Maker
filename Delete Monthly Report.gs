function deleteMonthlyReportEvents() {
  var calendar = CalendarApp.getDefaultCalendar();
  var eventTitle = "Monthly Report Kampus Merdeka";
  
  // Delete event on 5 November 2024
  var events1 = calendar.getEventsForDay(new Date('November 5, 2024'));
  for (var i = 0; i < events1.length; i++) {
    if (events1[i].getTitle() === eventTitle) {
      events1[i].deleteEvent();
      Logger.log('Deleted event on 5 November 2024');
    }
  }
  
  // Delete event on 5 Desember 2024
  var events2 = calendar.getEventsForDay(new Date('December 5, 2024'));
  for (var i = 0; i < events2.length; i++) {
    if (events2[i].getTitle() === eventTitle) {
      events2[i].deleteEvent();
      Logger.log('Deleted event on 5 Desember 2024');
    }
  }
  
  // Delete event on 31 Desember 2024
  var events3 = calendar.getEventsForDay(new Date('December 31, 2024'));
  for (var i = 0; i < events3.length; i++) {
    if (events3[i].getTitle() === eventTitle) {
      events3[i].deleteEvent();
      Logger.log('Deleted event on 31 Desember 2024');
    }
  }
}
