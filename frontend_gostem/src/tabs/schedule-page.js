import React from "react";
import "./styles/schedule-page.css"
import Sidebar from './components/sidebar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const SchedulePage= () => {

  const renderEventContent = (eventInfo) => {
    const isMonthView = eventInfo.view.type === 'dayGridMonth';

    if (isMonthView) {
      return (
        <div className="event-content-month">
          <div className="event-title">{eventInfo.event.title}</div>
        </div>
      );
    }

    const startTime = eventInfo.event.start.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    const endTime = eventInfo.event.end.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    return (
      <div className="event-content">
        <div className="event-title">{eventInfo.event.title}</div>
        <div className="event-location">{eventInfo.event.extendedProps.location}</div>
        <div className="event-time">{startTime} - {endTime}</div>
      </div>
    );
  };

  return (
    <div className="schedule-page-container">
      <Sidebar />
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          initialView='timeGridWeek'
          slotMinTime={"07:00:00"}
          slotMaxTime={"20:00:00"}
          allDaySlot={false}
          expandRows={true}
          height='100%'
          headerToolbar={{
            left: 'today,prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
          }}
          buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week'
          }}
          eventColor="#afdcd5"
          eventTextColor="#000000"
          eventContent={renderEventContent}
          eventDisplay="block"
          events={[{ 
                title: 'ACT Prep', 
                start: '2025-02-25T09:00:00',
                end: '2025-02-25T11:00:00',
                extendedProps: {
                  location: 'Room 101',
                  tutors: ['Bobby', 'Abu', 'Aadil'],
                }
          }]}
          eventClick={(info) => {
            const startTime = info.event.start.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            });
            const endTime = info.event.end.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            });

            alert(
              `Class: ${info.event.title}\n` +
              `Location: ${info.event.extendedProps.location}\n` +
              `Tutors: ${info.event.extendedProps.tutors.join(', ')}\n` +
              `Time: ${startTime} - ${endTime}`
            );
            info.el.style.borderColor = '#afdcd5';
          }}
        />
      </div>
    </div>
  );
};

export default SchedulePage;