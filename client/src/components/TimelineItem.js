import React, { useEffect } from "react";
import { ItemCenter, TimelineContent } from "../styles/Timeline.styles";

const TimelineItem = ({ item }) => {
  return (
    <ItemCenter>
      <div className="timeline-dot"></div>
      <div className="timeline-date">{item.year}</div>
      <TimelineContent data-aos="zoom-in">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </TimelineContent>
    </ItemCenter>
  );
};

export default TimelineItem;
