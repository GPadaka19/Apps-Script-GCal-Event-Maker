Google Calendar Event Automation using Google Apps Script
This repository contains Google Apps Script (.gs) code that automates the creation and management of events in Google Calendar. The script allows users to create all-day events with reminders and the ability to delete specific events.

Features
Create All-Day Events: Automatically create all-day events for specified dates with a custom title and description.
Add Reminders: Includes popup reminders 3 days and 1 day before the event.
Delete Events: Easily delete the previously created events by matching the event title and date.
Use Case
This script is useful for creating recurring or important events in Google Calendar, such as monthly reports, project deadlines, or scheduled meetings. In this specific example, the events created are titled "Monthly Report Kampus Merdeka" and include a link in the event description.

Example Event Creation:
The script will create the following events:

5 November 2024: "Monthly Report Kampus Merdeka"
5 December 2024: "Monthly Report Kampus Merdeka"
31 December 2024: "Monthly Report Kampus Merdeka"
Reminders:
3 days before the event: Popup reminder.
1 day before the event: Popup reminder.
How to Use
Open Google Apps Script from Google Drive or GCollab.
Copy and paste the code from createEvents.gs into your script editor.
Run the createMonthlyReportAllDayEventsWithReminders() function to create events.
To delete the events, run the deleteMonthlyReportEvents() function.
Script Files
createEvents.gs: Script to create all-day events with reminders.
deleteEvents.gs: Script to delete specific events based on the event title and date.
