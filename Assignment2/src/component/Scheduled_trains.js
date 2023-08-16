import React from "react";

import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Scheduled_trains() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours;

  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

  const TrainScheduld = [
    {
      TrainName: "Rajdhani Express",
      seatAvailability_for_Ac: 120,
      train_number: 1,
      price_for_Ac: 700,
      seatAvailability_for_Sleeper: 160,
      price_for_Sleeper: 500,
      departure_time: "9:30pm",
    },
    {
      TrainName: "Amritsar Express",
      seatAvailability_for_Ac: 100,
      price_for_Ac: 500,
      train_number: 2,
      seatAvailability_for_Sleeper: 190,
      price_for_Sleeper: 200,
      departure_time: " 11:00 pm",
    },
    {
      TrainName: "Garib Rath",
      seatAvailability_for_Ac: 300,
      price_for_Ac: 800,
      train_number: 3,
      seatAvailability_for_Sleeper: 200,
      price_for_Sleeper: 500,
      departure_time: " 11:12pm",
    },
    {
      TrainName: "Vande Bharat",
      seatAvailability_for_Ac: 350,
      price_for_Ac: 900,
      train_number: 3,
      seatAvailability_for_Sleeper: 90,
      price_for_Sleeper: 600,
      departure_time: "8:00pm",
    },
  ];

  return (
    <MainContainer>
      <TimerContainer>
        <h5>Current Time</h5>
        <p>{formattedTime}</p>
      </TimerContainer>


      <TrainDetailContainer>
        {TrainScheduld.map((traindetail) => {
          return (
            <div
              className="card"
              style={{
                width: "17rem",
                margin: "1.12rem",
                border: "2px solid #010817",
              }}
              key={traindetail.train_number}
            >
              <img
                src="./assests/TrainImage.jpg"
                className="card-img-top"
                alt="Image not found"
                style={{
                  height: "19rem",
                  padding: "0.3rem",
                  borderRadius: "4%",
                }}
              />
              <div
                className="card-body"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <h5 className="card-title">{traindetail.TrainName}</h5>
                <p>
                  Departure time : <mark> {traindetail.departure_time}</mark>
                </p>
              </div>

              <ul
                className="list-group list-group-flush"
                style={{ backgroundColor: "#001545", color: "white" }}
              >
                <h6 style={{ margin: "1rem" }}>Sleeper</h6>
                <li className="list-group-item">
                  Seat Availability : {traindetail.seatAvailability_for_Sleeper}
                </li>
                <li className="list-group-item">
                  Price : {traindetail.price_for_Sleeper}
                </li>
              </ul>
              <ul
                className="list-group list-group-flush"
                style={{ backgroundColor: "#001545", color: "white" }}
              >
                <h6 style={{ margin: "1rem" }}>AC</h6>
                <li className="list-group-item">
                  Seat Availability : {traindetail.seatAvailability_for_Ac}
                </li>
                <li className="list-group-item">
                  Price : {traindetail.price_for_Ac}
                </li>
              </ul>
            </div>
          );
        })}
      </TrainDetailContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: black;
  justify-content: center;
`;

const TimerContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1%;
  padding: 0.3%;
`;

const TrainDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
