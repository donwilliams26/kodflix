import React from "react";
import TvItem from "./tvItem";
import getTechnologies from "./technologies-get";

export default function Technologies() {
  return (
    <div>
      <div className="container">
        {getTechnologies().map(tvitem => (
          <TvItem
            key={tvitem.id}
            id={tvitem.id}
            name={tvitem.name}
            logo={tvitem.logo}
          />
        ))}
      </div>
    </div>
  );
}
