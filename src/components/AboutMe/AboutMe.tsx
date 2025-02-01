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
            <p>I'm a <b>Software Engineer</b> at <b>Microsoft</b><br />who keeps the cloud happy at <b>Azure Networking</b><br />and went to school at <b>UCLA</b> 🐻</p>
            
            <br></br>
            <p>I'm <Age /> and <LastFmLi /></p>

            <p style={{marginLeft: "4ch"}}>Thanks for stopping by!</p>
          </div>
          <div id={"fun-info"} aria-label={"Contacts"}>
            <h2>Find Me:</h2>
            <ul>
              <li>
                Email: <button onClick={EmailHandler}>Click This</button>
              </li>
              <li>
                Blog: <a href={"https://blog.cobular.com"}>blog.cobular.com</a>
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
