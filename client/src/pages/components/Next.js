import React from "react";
import "./Next.css";

const Next = () => {
  return (
    <>
      <div className="forecast-container">
        <h1 className="future-forecast-title">Future Forecast</h1>

        <div className="main-div">
          <div className="next-5-d">
            <h2>Next 5 Days</h2>
            <ul>
              <li className="day-one">Mock day one</li>
              <li className="day-two">Mock day two</li>
              <li className="day-three">Mock day three</li>
              <li className="day-four">Mock day four</li>
              <li className="day-five">Mock day five</li>
            </ul>
          </div>
          <div className="next-12-h">
            <h2>Next 12 Hours</h2>
            <ul>
              <li className="hour-one">Mock hour one</li>
              <li className="hour-two">Mock hour two</li>
              <li className="hour-three">Mock hour three</li>
              <li className="hour-four">Mock hour four</li>
              <li className="hour-five">Mock hour five</li>
              <li className="hour-six">Mock hour six</li>
              <li className="hour-seven">Mock hour seven</li>
              <li className="hour-eight">Mock hour eight</li>
              <li className="hour-nine">Mock hour nine</li>
              <li className="hour-ten">Mock hour ten</li>
              <li className="hour-eleven">Mock hour eleven</li>
              <li className="hour-twelve">Mock hour twelve</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Next;
