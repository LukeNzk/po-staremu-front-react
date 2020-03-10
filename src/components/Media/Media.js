import React from 'react';
import logoBlack from '../../img/logo-blk.png';
import logoBlue from '../../img/logo-b.png';
import logoOrange from '../../img/logo-og.png';

function LogoImage(props) {
  return (
    <img className="col-sm-4" src={props.imgSrc}></img>
  );
}

function Media() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2 class="mt-4">MEDIA</h2>
        </div>
      </div>
      <div className="row">
        <LogoImage imgSrc={logoBlack}/>
        <LogoImage imgSrc={logoBlue}/>
        <LogoImage imgSrc={logoOrange}/>
      </div>
    </div>
  );
}

export default Media;
