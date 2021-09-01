/**
 * TODO:
 *  - For things that can't be linked, use <ExpandAltOutlined /> to signal that clicking will open a modal https://ant.design/components/modal/
 *     in order to give a more complex writeup and some pictures
 *  - Tooltip for modal and linkable items, possibly <QuestionCircleOutlined /> which displays a modal with an example card with tooltips or explanations
 *  - Footer
 *  - Responsive top bar
 *
 */

import "./ProjectGrid.scss";
import Masonry from "masonry-layout";
import ImagesLoaded from "imagesloaded";

import { useEffect } from "react";
import { LinkOutlined } from "@ant-design/icons";
import CodeDaySD from "../images/SanDiego.svg";
import Foresight from "../images/foresightsports.png";
import Scoresaver from "../images/scoresaver.svg";
import Hashicorp from "../images/HashiCorp_Logo_no_text.png";
import Bennu from "../images/bennu.gif";
import KatSite from "../images/kat-site.png";

type GridElementImageProps = {
  image_url: string;
  image_alt: string;
  title: string;
  text: string;
  link?: string;
  org?: string;
};

type GridElementProps = {
  title: string;
  text: string;
  link?: string;
  org?: string;
};

function SmallElement({ title, text, link, org }: GridElementProps) {
  if (link === undefined) {
    return (
      <div className={"OneWide GridElement"}>
        <div className={"GridElementInternal"} role={"gridcell"}>
          <div className={"title"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
          </div>
          <div className={"description"}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"OneWide GridElement"} role={"gridcell"}>
      <a
        className={"Link GridElementInternal"}
        href={link}
        rel={"noreferrer"}
        target={"_blank"}
        tabIndex={0}
      >
        <div className={"title"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

function SmallElementPic({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
      <div className={"OneWide Pic GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}

            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"OneWide Pic GridElement "}>
      <a
        className={"GridElementInternal Link"}
        href={link}
        target={"_blank"}
        rel={"noreferrer"}
        tabIndex={0}
      >
        <div className={"image"}>
          <img src={image_url} alt={image_alt} />
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

function MediumElement({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
      <div className={"Medium GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a
      className={"Medium GridElement Link"}
      href={link}
      target={"_blank"}
      rel={"noreferrer"}
      tabIndex={0}
    >
      <div className={"GridElementInternal"}>
        <div className={"image"}>
          <img src={image_url} alt={image_alt} />
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}

function LargeElementPic({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
      <div className={"FourByOne GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"FourByOne GridElement"}>
      <a
        className={"GridElementInternal Link"}
        href={link}
        target={"_blank"}
        rel={"noreferrer"}
        tabIndex={0}
      >
        <div className={"image"}>
          <img src={image_url} alt={image_alt} />
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

export function ProjectGrid() {
  useEffect(() => {
    var elem = document.querySelector("#project-grid");

    if (elem) {
      const msnry = new Masonry(elem, {
        itemSelector: ".GridElement",
        gutter: 0,
        columnWidth: ".GridSizer",
        percentPosition: true,
      });

      ImagesLoaded(elem).on("progress", () => {
        setTimeout(() => msnry.layout?.(), 200);
      });
    }
  });

  return (
    <div id={"project-grid-background"} style={{ paddingBottom: 20 }}>
      <div id={"project-grid-parent"} aria-label={"My Projects"}>
        <div id={"project-header"} aria-label={"Projects Header"}>
          <h2>&lt;/&gt; My Projects</h2>
          <p>
            A gallery of some of my most interesting projects. Look for{" "}
            <LinkOutlined />, click those projects for more information!
          </p>
        </div>
        <div id={"project-grid"} aria-label={"Projects Grid"}>
          <div className={"GridSizer"} />
          <SmallElement
            title={"ElaticMatch"}
            org={"CodeDay"}
            text={`A set of tools, including a custom suggestion and weighting system, as well as a custom matching
              algorithm that I wrote and used to match around 350 students to the best-fitting mentors in the CodeDay
              Labs summer internship program in 2020.`}
            link={"https://github.com/codeday/labs-elastic-match"}
          />
          <SmallElement
            title={"John Peter"}
            org={"CodeDay"}
            text={`John Peter is a Discord bot used for moderation and server management for Virtual CodeDay. It has a very
              extensive featureset with a number of custom moderation and authentication tools and has been used for 
              multiple CodeDay events, impacting well over 1,000 students.`}
            link={"https://github.com/codeday/johnpeter-discord"}
          />
          <SmallElement
            title={"Distest"}
            org={"Random Projects"}
            text={`Distest is a testing library I wrote for Discord bots that allows for full integration tests of bots,
              improving the discord bot development workflow significantly. As far as I know, it's the only tool
              available for this sort of testing. Unfortunately, this has been deprecated in favor of other, more full
              featured libraries.`}
            link={"https://github.com/JakeCover/distest"}
          />
          <SmallElementPic
            image_url={CodeDaySD}
            image_alt={"CodeDay San Diego Logo"}
            org={"CodeDay"}
            title={"CodeDay San Diego"}
            text={`A 24 hour hackathon occurring around the world a few times a year. I volunteered for and then later ran
              the San Diego event where I grew to love hackathons and leaned a lot about leadership and event logistics
              in the process!`}
            link={"https://event.codeday.org/sandiego"}
          />
          <LargeElementPic
            image_url={Foresight}
            image_alt={"Foresight Sports Logo"}
            title={"Foresight Sports"}
            text={`Foresight Sports creates advanced augmented reality sports experiences. I created multiple games using
              Unity that took data from their launch monitor technology and translated it into a seamless experience.`}
          />
          <SmallElementPic
            image_url={Scoresaver}
            image_alt={"Scoresaver Logo"}
            title={"ScoreSaver"}
            org={"Random Projects"}
            text={`A Chrome extension to help you download BeatSaber songs directly from ScoreSaber. No more searching for
              mapper names on BeatSaver, just download the newest ranked songs directly!`}
            link={"https://github.com/JakeCover/ScoreSaverExtention"}
          />
          <SmallElement
            title={"Assorted Discord Bots"}
            org={"Random Projects"}
            text={`I've made quite a number of discord bots over time! Some of them, like ReplyBot, which added a reply
              functionality to Discord years before they finally implemented it first-party, have been obsoleted
              nowadays, others like DiscordChannelMirror just do simple things for my own use, and many more have been
              lost to time and past me's lack of understanding of the importance of backup. I digress, however I really
               do love writing these sorts of applications!`}
          />
          <MediumElement
            image_url={Hashicorp}
            image_alt={"HashiCorp Logo"}
            title={"Hashicorp Stack Sysadmin"}
            org={"CodeDay, Random Projects"}
            text={`I've setup and used a stack consisting of Nomad, Consul, and Vault along with Traefik both at CodeDay,
              where it runs almost every service we have, as well as at home, where I use it to run over 25 services on
              a cluster of old machines. I strongly recommend it as it's a very easy way utilize old hardware, even when
              each machine may not be that powerful powerful and not all that complex to get started with at any scale,
              from one personal server to large corporate backends.`}
          />
          <SmallElement
            title={"Personal Website"}
            org={"Random Projects"}
            text={`You're looking at it! There's not a whole lot to this, it's just a React site hosted on GitHub Pages,
                but I didn't know React before starting on this so I'm pretty proud of it.`}
            link={"https://github.com/JakeCover/PersonalWebsite_Static"}
          />
          <SmallElement
            title={"Nomad Job Templates Tool"}
            link={"https://github.com/JakeCover/NomadJobTemplatesTool"}
            org={"Random Projects"}
            text={`A little custom tool to allow you to use jinga-esque text substitutions in Nomad jobfiles to help
              centralize the definition of service traefik tags. This mainly makes it easier to update and change
              networking configuration across many jobs easily.`}
          />
          <SmallElementPic
            image_url={KatSite}
            image_alt={"Kat's Logo"}
            title={"Shushicate"}
            org={"Random Projects"}
            text={`An art gallery website for my friend, made in svelte. The images are optimized and compressed at 
                compiletime, creating a few versions and allowing the browser to choose which to display using imageset.
                 The full resolution image is only sent when selecting an image, keeping the site performant.`}
            link={"https://www.shushicate.com/"}
          />
          <SmallElement
            title={"OVRTools"}
            org={"Random Projects"}
            link={"https://github.com/OVRTools"}
            text={`This one's a bit more work in progress than some of the others here. It is a set of tools to help people
              develop OpenVR plugins more easily and independently from Unity. It will eventually grow to include
              multiple additional input methods and other tools to allow users to interact with other OVR plugins more
              easily.`}
          />
          <MediumElement
            image_url={Bennu}
            image_alt={"A B logo"}
            title={"Bennu"}
            org={"Work Experience"}
            text={`Bennu made various engineering management and performance analysis tools for other software companies. 
                Here, I mainly implemented the crawler for Jira Server, adding a whole new application we could offer to
                customers. I also worked on internal tooling and optimized our test runtime by 50% before the startup 
                closed from beneath me in the middle of the summer of 2021.`}
            link={"https://www.bennu.io/"}
          />
          <SmallElement
            title={"CopyMoji"}
            org={"BetterDiscord"}
            text={`An extension for the alternate discord client BetterDiscord that changes the functionality of copying
              emoji to copy the actual emoji characters rather than their names from the discord client.`}
            link={
              "https://github.com/JakeCover/BetterDiscordExtensions/tree/main/plugins/CopyMoji"
            }
          />
          <SmallElement
            title={"What's That Number"}
            org={"Random Projects"}
            text={`A service that allows for the reversing of arbitrary decimals back to fractions of irrational numbers.
                Basically, it's able to reverse 3.1415 to π, but more interestingly reverse 0.385694 to √2 * 3 / 11!
                It can't solve all problems and it isn't mathematically provable or anything, but it's optimized to
                give you the right answer for most things you'll actually run into and tell you when you've gotten 
                nothing.`}
            link={"https://jakecover.github.io/WhatsThatNumberExtension/"}
          />
        </div>
      </div>
    </div>
  );
}
