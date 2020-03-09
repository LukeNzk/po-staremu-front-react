import React from 'react';

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
        <TileHeader time={props.time}></TileHeader>
        <TileThumb url={props.img}></TileThumb>
        <TileBody title={props.title} desc={props.desc}></TileBody>
        <TileFooter url={props.url}></TileFooter>
      </div>
    </div>
  );
}

function Calendar() {
  const myData = {
    "events": [
      {
        "time": "2019-01-20T14:32",
        "place": "POS",
        "title": "Kolędniczy potańc po staremu",
        "url": "https://www.facebook.com/events/199109267695571/",
        "img": "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/47441220_2269027789838005_8568996476108144640_o.jpg?_nc_cat=104&_nc_ohc=uc3yFr0ENoMAX8-D-V_&_nc_ht=scontent-frt3-1.xx&oh=8e14369a143ce77a9ef05bd58f854b44&oe=5E8F85E7",
        "desc": "Nauka tradycyjnych kolęd, warsztaty tańca dla początkujących"
      },
      {
        "time": "2019-01-20T14:32",
        "place": "POS",
        "title": "Kolędniczy potańc po staremu",
        "url": "https://www.facebook.com/events/199109267695571/",
        "img": "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/47441220_2269027789838005_8568996476108144640_o.jpg?_nc_cat=104&_nc_ohc=uc3yFr0ENoMAX8-D-V_&_nc_ht=scontent-frt3-1.xx&oh=8e14369a143ce77a9ef05bd58f854b44&oe=5E8F85E7",
        "desc": "Nauka tradycyjnych kolęd, warsztaty tańca dla początkujących"
      }
    ]
  };

  const eventTiles = myData.events.map((eventData) => <EventTile {...eventData}/>);
  return (
    <div className="container">
      <div className="row">
        {eventTiles}
      </div>
    </div>
  );
}

export default Calendar;
