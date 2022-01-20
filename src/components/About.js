import React from "react";
import "./Styles/About.css";

export const About = () => {
  return (
    <>
      <div className="body">
        <div className="column-one">
          <div className="title">
            <h1>Vad kul att du är här!</h1>
          </div>
          <div className="description">
            <p>
              <p className="intro-description">
                Jag är Adam Kjellberg. Född och uppvuxen i Stenungsund, norr om
                Göteborg.&#x1F4CD;
              </p>
              <br></br>
              <p className="year-stamp">2014 - 2017</p>
              Under min gymnasietid utbildade jag mig till elektriker med på
              Nösnäsgymnasiet, El & Energiprogrammet.
              <br></br>
              <p className="year-stamp">2017 - 2021</p>
              Min tid som elektriker har jag varit på större komplexa
              byggnationer, både nybyggnationer och stamrenoveringar av bl a.
              lägenheter och kontorsbyggnader.
              <br></br>
              <br></br>
              Jag har även varit på diverse mindre byggnationer där jag haft
              ansvaret att få agera ledarmontör och elsäkerhetsledare.
              <br></br>
              <p className="year-stamp">2021 -</p>
              Augusti 2021 började jag studera till .NET-Utvecklare på
              IT-Högskolan Göteborg, då jag under sommaren 2020 fick testat på
              och började smått lära mig programmera med HTML, CSS och lite C#.
              <br></br>
              Läs mer om min utbildning
              <a
                className="edu-link"
                href="https://www.iths.se/courses/netutvecklare/"
                target="blank"
              >
                {" "}
                här.
              </a>
              <br></br>
              <br></br>
              <p className="ending">Fortsättning följer!&#x1F44B;</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
