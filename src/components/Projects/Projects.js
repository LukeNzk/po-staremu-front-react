import React from 'react';
import DostepnaLogo from '../../img/potanc2021/kulturadost.png';
import MkidnLogo from '../../img/MKiDN_kolor.png';

function LogoImage(props) {
  return (
    <img className="col-sm-4" src={props.imgSrc}></img>
  );
}

function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 class="mt-4">PROJEKTY</h1>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-12">
          <h3 class="mt-1">POTAŃC PO STAREMU 2021</h3>
          <p>
            "Potańc Po Staremu" to cykl imprez towarzyszących Festiwalowi Łódź Fabrykancka. Projekt ten jest poświęcony dawnej muzyce Łodzi w kontekście szeroko pojętej kultury miejskiej jako elementu spajającego różnorodne i wielonarodowe środowisko dawnej Łodzi. Głównym celem cyklu imprez "Potańc Po Staremu" będzie ułatwienie dostępu do kultury, skierowanie oferty do szerokiego grona odbiorców z różnych grup społecznych. Realizacja wydarzeń w przestrzeniach miejskich oraz on-line zapewni włączenie osób mających utrudniony dostęp do kultury i nie zaangażowanych w życie kulturalne.
            W ramach Projektu odbyły się następujące wydarzenia:
          </p>
          <p>
            1. Potańc Po Staremu - Tańce miejskie.
            15 godzin warsztatów tańców miejskich podczas cyklu pięciu spotkań. Uczestnicy uczyli się slow-foxów, tang, fokstrotów, polek i walczyków i innych tańców wywodzących się z kultury wiejskiej. Instruktorami byli: Piotr Zgorzelski, Grzegorz Ajdacki oraz Przemysław Bogusławski.
          </p>
          <p>
            2. Panel dyskusyjny „Czy Łódź ma swój folklor?".
            Panel dyskusyjny poprowadził Piotr Krauze, zaś prelegentami byli mgr Aldona Plucińska, dr Przemysław Owczarek oraz dr Jarosław Eichsteadt. Wydarzenie odbyło się przy wsparciu Fundacji Imienia Stanisława Pomian - Srzednickiego w lokalu przy ulicy Namiotowej 43 w Łodzi. Wsparcia merytorycznego udzielił nam partner projektu – Łódzki Dom Kultury oraz Poleski Ośrodek Sztuki.
          </p>
          <p>
            3. Potańc w zabytkowym autobusie.
            Przejazd po ulicach Łodzi z Kapelą Hałasów na pokładzie.
          </p>
          <p>
            4. Miejskie Taneczne Zabawy z cyklu „Robotniczy Potańc”.
            Podczas zabaw tanecznych uczestnicy mogli bawić się do muzyki granej na żywo, obejmującej zarówno polskie odmiany tańców miejskich (Fokstrot, Tango, Walczyk) jak i muzykę tradycyjną z okolicznych regionów wiejskich (Oberki, Polki, Kujawiaki). Gościliśmy takie zespoły jak: Nicponie, Orkiestra Taneczna Bonanza, Napięcie, Kożuch, Janusz Prusinowski Kompania, Kapela Hałasów, Jeremi Kowalski oraz Jan Szymański z kapelą.
          </p>
          <p>
            5. Warsztaty tańca miejskiego dla dzieci.
            Pięć spotkań, podczas których dzieci pod okiem Przemysława Bogusławskiego nauczyły się rytmiki i podstawowych kroków tańców miejskich. Warsztaty odbyły się w Szkole Kompas przy ul. Obywatelskiej 57 w Łodzi oraz w Społecznej Szkole Podstawowej nr 1 Społecznego Towarzystwa Oświatowego przy ul. Czerwonej 8 w Łodzi .
          </p>
          <p>
            6. Koncert Janusz Prusinowski Kompania i Kapeli Hałasów.
            Wydarzenie, organizowane przez Akademię Muzyczną im. Grażyny i Kiejstuta Bacewiczów w Łodzi i Marka Kądzielę. Kapela Hałasów zagrała dzięki wsparciu Fundacji Po Staremu, z kolei Janusz Prusinowski, dzięki Akademii Muzycznej, zagrał na Potańcówce w Art. Inkubatorze, która odbyła się po koncercie.
          </p>
          <p>
            7. Roztańczone przystanki.
            Dwie krótkie potańcówki podczas przystanków na drodze przejazdu zabytkowego autobusu- na Placu Wolności oraz przy Pomniku
            Jednorożca w Łodzi. Do tańca zagrał Jacek Hałas oraz gościnnie Marcin Chrzanowski.
          </p>
        </div>


      </div>
      <div className="row">
        <div class="col-sm-12">
          <i><b>Dofinansowano ze środków Ministra Kultury i Dziedzictwa Narodowego pochodzących z Funduszu Promocji Kultury - państwowego funduszu celowego.</b></i>

          <p>
            <LogoImage imgSrc={DostepnaLogo} />
            <LogoImage imgSrc={MkidnLogo} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
