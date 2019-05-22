import cover from "./images/championships.jpeg";
import depapel from "./images/casa.jpg";
import gamers from "./images/gamer.jpg";
import hacker from "./images/mrrobot.jpg";
import ender from "./images/enders.jpg";
import letscook from "./images/breakingbad.jpg";

export default function getTechnologies() {
  return [
    { id: "Casa de Papel", name: "CASA de Papel", logo: depapel },
    { id: "Gamer", name: "GAMER", logo: gamers },
    { id: "Mr. Robot", name: "MR. ROBOT", logo: hacker },
    { id: "Championship", name: "CHAMPIONSHIP", logo: cover },
    { id: "Ender's Game", name: "ENDER'S GAME", logo: ender },
    { id: "Breaking Bad", name: "BREAKING BAD", logo: letscook }
  ];
}
