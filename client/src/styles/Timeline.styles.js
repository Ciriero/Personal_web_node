import styled from "styled-components";

export const WrapperTimeline = styled.section`
  background-color: ${({theme}) => theme.bgtimeline};
  transition: var(--transitionMode);
  padding: 6rem 1rem;
  .timeline-title {
    text-align: center;
    margin-bottom: 5rem;
    h2 {
      color: ${({theme}) => theme.timelinetitle}
    }
  }
  .udl {
    margin: 0 auto;
  }
`;

export const TimelineCenter = styled.div`
  max-width: 1100px;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: var(--clr-grey-3);
    left: 7px;
  }
  @media screen and (min-width: 800px) {
    ::before {
      left: calc(50% - 1px);
    }
  }
`;

export const ItemCenter = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  width: 100%;
  :last-child {
    margin-bottom: 0;
  }
  :nth-child(odd) {
    padding-right: 0px;
    text-align: left;
    padding-left: 37px;
  }
  :nth-child(even) {
    padding-left: calc(50% + 30px);
    padding-left: 37px;
  }
  .timeline-dot {
    height: 1rem;
    width: 1rem;
    background-color: #f55050;
    box-shadow: 0 0 0 3px #f48484;
    position: absolute;
    border-radius: 50%;
    top: 10px;
    left: 0;
  }
  .timeline-date {
    font-size: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.timelinetitle};
    margin: 0.4rem 0 1rem;
  }
  @media screen and (min-width: 800px) {
    :nth-child(odd) {
      padding-right: calc(50% + 30px);
      text-align: right;
      padding-left: 0rem;
    }
    :nth-child(even) {
      padding-left: calc(50% + 30px);
    }
    .timeline-dot {
      left: calc(50% - 8px);
    }
  }
`;

export const TimelineContent = styled.div`
  background-color: ${({theme}) => theme.cardtimeline}; 
  padding: 1.9rem;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
  h3 {
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin: 0 0 0.7rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 22px;
    font-style: italic;
    color: ${({theme}) => theme.texttimeline}
  }
`;
