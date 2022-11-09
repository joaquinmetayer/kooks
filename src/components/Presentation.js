import React from "react";
import logoGif from "../assets/logogif.gif";
import artistPh from "../assets/img/artist.jpeg";
import "./Presentation.css";

export default function About() {
  return (
    <>
      <div className="proyect">
        <img src={logoGif} alt={logoGif} className="logoGif" />
        <div>
          <h2>Project Presentation</h2>
          <p>
            What’s up, these are the kooks. Born and raised in El Porto, they’ve
            been surfing the world-famous break Shit Pipe since grom days. These
            guys have been taking a beating in the shore pound since they can
            remember so, as you can imagine, they know how to take a hit.
            Watching their home break get taken over by the steady stream of
            pollution is pissing the kooks off, and the recent take over by the
            greedy Lizard Queen has pushed it all to a boiling point. She’s
            taken her power from the righteous King Kook and is polluting the
            water with her money-hungry offshore drilling. Ready to take their
            beach, the kooks know the only way to save their wave is to restore
            power to King Kook, the question is how.
          </p>
        </div>
      </div>
      <div className="artist">
        <div>
          <h2>Artist Presentation</h2>
          <p>
            Born and raised in the Midwest, Terry grew up immersed in Saturday
            morning cartoons and collecting trading cards, falling into the
            world of visual creativity from a young age. Terry’s always been
            heavily influenced by West Coast skate and surf culture. While in
            community college, he decided to drop out to move to California in
            pursuit of becoming a pro skater. Interested in art, Terry started
            exploring painting and graffiti. While living and skating in San
            Diego, Terry was introduced to the world of DJing, and a new means
            of self-expression began for him. Terry’s DJ career brought him to
            NYC, where he started producing his own remixes and traveling the
            world. His remixes have received accolades from musical greats like
            Jay Z, Kanye West, Coldplay, and Drake. Years later, Terry grew
            tired of DJing and started exploring painting again. Since 2015
            Terry has wholly immersed himself back into his artwork.
          </p>
          <iframe
            width="100%"
            height="460"
            style={{ paddingTop: 10, marginBottom: 0 }}
            src="https://www.youtube.com/embed/6L0NgFIqKCQ"
            frameBorder="0"
          ></iframe>
        </div>
        <img src={artistPh} alt={artistPh} className="artistPh" />
      </div>
    </>
  );
}