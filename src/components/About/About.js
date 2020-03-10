import React from 'react';
import icon1 from '../../img/icon-1.png';
import icon2 from '../../img/icon-2.png';
import icon3 from '../../img/icon-3.png';

function Paragraph(props) {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h2 className="mt-4">{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

function BulletPoint(props) {
  return (
      <div class="col-sm-4">
        <img src={props.icon}/>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </div>
  );
}

function BulletPoints() {
  return (
    <div class="row text-center">
      <BulletPoint title="ZNALEŹĆ" icon={icon1}>
        Fundacja Po Staremu zajmuje się odkrywaniem najcenniejszych elementów tradycji poprzez kontakt z osobami, 
        które je pamiętają, zapisy, filmy, czy nagrania audio. Poszukiwania są prowadzone od wielu lat.
      </BulletPoint>
      <BulletPoint title="NAUCZYĆ SIĘ" icon={icon2}>
        Fundacja Po Staremu przejmuje spuściznę naszych przodków, która wydaje się najbardziej zagrożona zapomnieniem, 
        a zarazem jest cenna dla przyszłych pokoleń. Odbywa się to głównie na zasadzie nauki bezpośrednio od 
        depozytariuszy kultury oraz rejestracji spotkań z nimi.
      </BulletPoint>
      <BulletPoint title="UPOWSZECHNIĆ" icon={icon3}>
        Fundacja Po Staremu za pomocą warsztatów, wydarzeń kulturalnych, koncertów i spotkań, przekazuje to, co udało 
        się nam przejąć w wyniku naszych poszukiwań. Organizujemy w mieście potańcówki z żywą muzyką i nauką tańca, 
        uczymy dzieci i pedagogów zabaw znanych już tylko naszym dziadkom, tworzymy warsztaty muzyczne, śpiewacze i taneczne.
      </BulletPoint>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <Paragraph title="O NAS">
        Badamy dziedzictwo naszych przodków, odświeżamy je i włączamy z powrotem w obieg. Interesują nas rzeczy cenne i prawdziwe,
        które zachowały się w naszej kulturze. Ciekawi nas wszystko to, co wciąż jest wartościowe i może przynosić korzyści społeczeństwu,
        naszym bliskim i nam samym.
      </Paragraph>
      <Paragraph title="MISJA">
        Misją Fundacji Po Staremu są poszukiwania cennych i wartościowych elementów spuścizny kulturowej po naszych przodkach (zwyczaje, 
        praktyki, umiejętności i wiedza), przejmowanie ich poprzez naukę i praktykę, a następnie upowszechnianie za pomocą warsztatów
        i wydarzeń kulturalnych. W ten sposób liczymy na ponowne włączenie w obieg najcenniejszych elementów.
      </Paragraph>
      <BulletPoints/>
    </div>
  );
}

export default About;
