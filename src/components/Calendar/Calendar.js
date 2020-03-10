import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateCalendar } from '../../actions';

function FormatDateTime(dateTime) {
  const roman = [ "I", "II", "III", "IV", "V", "VI", 
                  "VII", "VIII", "IX", "X", "XI", "XII"];
  return dateTime.getDate() + ' ' 
  + roman[dateTime.getMonth()] + ' ' 
  + dateTime.getFullYear();
}

function TileHeader(props) {
  const dateTime = new Date(props.time);
  return (
    <div className="card-head px-4">
      {FormatDateTime(dateTime)}
    </div>
  );
}

function TileThumb(props) {
  return (
    <img className="card-img-top" src={props.url}/>
  );
}

function TileBody(props) {
  return (
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.desc}</p>
    </div>
  );
}

function TileFooter(props) {
  return (
    <div className="card-footer">
      <a href={props.url}>Czytaj więcej...</a>
    </div>
  );
}

function EventTile(props) {
  return (
    <div className="col-sm-4 my-4">
      <div className="card">
        <TileHeader time={props.startDate}></TileHeader>
        <TileThumb url={props.imageUrl}></TileThumb>
        <TileBody title={props.title} desc={props.desc}></TileBody>
        <TileFooter url={props.eventUrl}></TileFooter>
      </div>
    </div>
  );
}

function Calendar(props) {
  const [myData, setData] = useState(null);

  const handleSetData = data => {
    console.log(data);
  };

  const eventTiles = props.calendar.events ? props.calendar.events.map(event => <EventTile {...event}/>) : null;
  
  return (
    <div className="container">
      <div className="row">
        {eventTiles}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    calendar: state.calendar
  };
}

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
