import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([]);

  const bookingData = [
    {
      id: 1,
      roomId: "A101",
      startTime: "2019-09-28 13:00:00",
      endTime: "2019-09-28 14:00:00",
      title: "Lunch with Petr",
    },
    {
      id: 2,
      roomId: "A101",
      startTime: "2019-09-28 14:00:00",
      endTime: "2019-09-28 15:00:00",
      title: "Sales Weekly Meeting",
    },
    {
      id: 3,
      roomId: "A101",
      startTime: "2019-09-28 16:00:00",
      endTime: "2019-09-28 18:00:00",
      title: "Anastasia Website Warroom",
    },
    {
      id: 4,
      roomId: "A101",
      startTime: "2019-09-29 13:00:00",
      endTime: "2019-09-29 14:00:00",
      title: "One-on-One Session",
    },
    {
      id: 5,
      roomId: "A101",
      startTime: "2019-09-29 16:00:00",
      endTime: "2019-09-29 18:00:00",
      title: "UGC Sprint Planning",
    },
    {
      id: 6,
      roomId: "A102",
      startTime: "2019-09-30 09:00:00",
      endTime: "2019-10-04 18:00:00",
      title: "5-Day Design Sprint Workshop",
    },
    {
      id: 7,
      roomId: "Auditorium",
      startTime: "2019-09-19 09:00:00",
      endTime: "2019-09-23 19:00:00",
      title: "Thai Tech Innovation 2019",
    },
    {
      id: 8,
      roomId: "A101",
      startTime: "2019-09-28 10:00:00",
      endTime: "2019-09-28 13:00:00",
      title: "Raimonland project",
    },
    {
      id: 9,
      roomId: "A102",
      startTime: "2019-09-30 18:00:00",
      endTime: "2019-09-30 20:00:00",
      title: "Management Meetinng",
    },
    {
      id: 10,
      roomId: "A101",
      startTime: "2019-10-04 14:00:00",
      endTime: "2019-10-06 11:00:00",
      title: "3-day workshop Corgi costume",
    },
  ];

  // Create a function that accept room, startTime, endTime and return if the room is available for booking.
  // The room is available if there’re no other current bookings during requested start - end time.

  const checkAvailability = (roomId, startTime, endTime) => {
    return !bookingData.some((booking) => {
      return (
        booking.roomId === roomId &&
        ((startTime < booking.endTime && startTime >= booking.startTime) ||
          (endTime > booking.startTime && endTime <= booking.endTime) ||
          (startTime <= booking.startTime && endTime >= booking.endTime))
      );
    });
  };

  // Create a function that return all current bookings that occur today, this week  and next week for a room.

  const getBookingForWeek = (roomId, weekNo = 1) => {
    
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0); 

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + weekNo * 7 - 1);
    endDate.setHours(23, 59, 59, 999); 

    const isWithinRange = (startTime, endTime, startRange, endRange) => {
      const start = new Date(startTime);
      const end = new Date(endTime);
      return (
        (start >= startRange && start <= endRange) ||
        (end >= startRange && end <= endRange) ||
        (start <= startRange && end >= endRange)
      );
    };

    return bookingData.filter((booking) => {
      return (
        booking.roomId === roomId &&
        isWithinRange(booking.startTime, booking.endTime, startDate, endDate)
      );
    });
  };


  return <></>;
}

export default App;
