import React from 'react'

function Footer() {
  return (
    <footer className="py-3 bg-dark">
      <div className="container">
        <div className="row ml-2 mr-2 text-white">
          <div className="col-md-4">
            <h1>Informacje</h1>
            REGON 362197812<br/>
            KRS 0000570371<br/>
            NIP 7272797074
          </div>
          <div className="col-md-4">
            <h1>Kontakt</h1>
            <i className="fa fa-phone" aria-hidden="true"></i> +48 602 649 275<br/>
            <i className="fa fa-envelope" aria-hidden="true"></i> coslychac@postaremu.org
          </div>
          <div className="col-md-4">
            <h1>Społeczność</h1>
            <a href="https://www.facebook.com/fundacja.postaremu/">Facebook</a><br/>
            <a href="https://twitter.com/PoStaremu">Twitter</a><br/>
            <a href="https://www.instagram.com/postaremu/">Instagram</a><br/>
            <a href="https://www.youtube.com/channel/UCFVPaWfhll-YcxUEh9MQNYA">YouTube</a>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Po Staremu @ 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
