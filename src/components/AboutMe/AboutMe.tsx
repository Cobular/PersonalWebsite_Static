import "./AboutMe.scss";
import { Tooltip } from "antd";
import { Age } from "./Age";
import { LastFmLi } from "./LastFmLi";


export function AboutMe() {
  function EmailHandler() {
    const email = "Y29udGFjdEBqYWtlY292ZXIubWU=";
    window.prompt("Thanks for being a human! Here's my email:", atob(email));
  }

  return (
    <div id={"about-me-parent"}>
      <div id={"about-me"} className={"about-me-card"}>
        <h1>Hi! I'm Jake!</h1>

        <div id={"info-parent"}>
          <div id={"specific-info"}>
            <h2> A bit about me:</h2>
            <ul>
              <li>
                <b>Occupation:</b> Student
              </li>
              <li>
                <b>Location:</b> Southern California
              </li>
              <li>
                <b>Pronouns</b>: They/Them
              </li>
              <Age />
              <LastFmLi />
            </ul>
          </div>
          <div id={"fun-info"}>
            <h2>Find Me:</h2>
            <ul>
              <li>
                Email: <button onClick={EmailHandler}>Click This</button>
              </li>
              <li>
                Twitter:{" "}
                <Tooltip title={":("}>
                  <a
                      href={"https://github.com/JakeCover"}
                      target="_blank"
                      rel="noreferrer"
                  >
                    @cobular_
                  </a>
                </Tooltip>
              </li>
              <li>
                GitHub:{" "}
                <a
                    href={"https://github.com/JakeCover"}
                    target="_blank"
                    rel="noreferrer"
                >
                  JakeCover
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a
                    href={"https://t.me/cobular"}
                    target="_blank"
                    rel="noreferrer"
                >
                  @cobular
                </a>
              </li>
              <li>Elsewhere: Probably @cobular</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
