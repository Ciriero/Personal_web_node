import React from "react";
import { WrapperTimeline, TimelineCenter } from "../styles/Timeline.styles";
import { timeline } from "../data/timeline";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <WrapperTimeline id="timeline">
      <div className="timeline-title">
        <h2>Timeline</h2>
        <div className="underline udl"></div>
      </div>
      <TimelineCenter>
        {timeline.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </TimelineCenter>
    </WrapperTimeline>
  );
};

export default Timeline;
