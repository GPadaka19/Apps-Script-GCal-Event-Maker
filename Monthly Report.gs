function createMonthlyReportAllDayEventsWithReminders() {
  var calendar = CalendarApp.getDefaultCalendar();
  var eventTitle = "Monthly Report Kampus Merdeka";
  var eventLink = "https://kampusmerdeka.kemdikbud.go.id/mahasiswa/monthly-report/12078461";
  
  // Event 1: 5 November 201440 (All-day event)
  var event1 = calendar.createAllDayEvent(eventTitle,
                                          new Date('November 5, 2024'),
                                          {description: 'Monthly report for Kampus Merdeka. Link: ' + eventLink});
  event1.addPopupReminder(4320); // 3 days before
  
  // Event 2: 5 Desember 201440 (All-day event)
  var event2 = calendar.createAllDayEvent(eventTitle,
                                          new Date('December 5, 2024'),
                                          {description: 'Monthly report for Kampus Merdeka. Link: ' + eventLink});
  event2.addPopupReminder(4320); // 3 days before
  
  // Event 3: 31 Desember 201440 (All-day event)
  var event3 = calendar.createAllDayEvent(eventTitle,
                                          new Date('December 31, 2024'),
                                          {description: 'Monthly report for Kampus Merdeka. Link: ' + eventLink});
  event3.addPopupReminder(4320); // 3 days before
  
  Logger.log('3 all-day events created with reminders for title: ' + eventTitle);
}
