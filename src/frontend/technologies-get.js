import cover from "./images/championships.jpeg";
import depapel from "./images/casa.jpg";
import gamers from "./images/gamer.jpg";
import hacker from "./images/mrrobot.jpg";
import ender from "./images/enders.jpg";
import letscook from "./images/breakingbad.jpg";

export default function getTechnologies() {
  return [
    { id: "Casa de Papel", name: "CASA de Papel", logo: depapel },
    {
      id: "Gamer",
      name: "GAMER",
      logo: gamers,
      details:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React"
    },
    { id: "Mr. Robot", name: "MR. ROBOT", logo: hacker },
    { id: "Championship", name: "CHAMPIONSHIP", logo: cover },
    { id: "Ender's Game", name: "ENDER'S GAME", logo: ender },
    { id: "Breaking Bad", name: "BREAKING BAD", logo: letscook }
  ];
}
