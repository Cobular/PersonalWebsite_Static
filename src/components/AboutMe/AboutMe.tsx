import "./AboutMe.scss";
import { Tooltip } from "antd";
import { Age } from "./Age";
import { LastFmLi } from "./LastFmLi";

export function AboutMe() {
  function EmailHandler() {
    const email = "Y29udGFjdEBjb2J1bGFyLmNvbQ==";
    window.prompt("Thanks for being a human! Here's my email:", atob(email));
  }

  return (
    <div id={"about-me-parent"}>
      <div id={"about-me"} className={"about-me-card"}>
        <h1 aria-label={"Title"}>Hi! I'm Julie!</h1>

        <div id={"info-parent"} aria-label={"About Me"}>
          <div id={"specific-info"} aria-label={"Facts"}>
            <h2> A bit about me:</h2>
            <ul>
              <li>
                <b>Occupation:</b> Student
              </li>
              <li>
                <b>Location:</b> Southern California
              </li>
              <li>
                <b>Pronouns</b>: She/Her
              </li>
              <Age />
              <LastFmLi />
            </ul>
          </div>
          <div id={"fun-info"} aria-label={"Contacts"}>
            <h2>Find Me:</h2>
            <ul>
              <li>
                Email: <button onClick={EmailHandler}>Click This</button>
              </li>
              <li>
                Twitter:{" "}
                <Tooltip title={":("}>
                  <a
                    href={"https://twitter.com/cobular_"}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={0}
                  >
                    @cobular_
                  </a>
                </Tooltip>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href={"https://github.com/Cobular"}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={0}
                >
                  Cobular
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a
                  href={"https://t.me/codular"}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={0}
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
