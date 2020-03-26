import React from "react";
import { storiesOf } from "@storybook/react";
import { Pane } from "evergreen-ui";

import { SearchItem } from "./SearchItem";

const links = {
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQEyx: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 1 },
    status: "understandingState",
    content: "data:,QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQEyx"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE2x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 2 },
    status: "availableDownload"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE3x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 3 },
    status: "impossibleLoad"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE4x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 4 },
    status: "downloaded"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE5x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 5 },
    status: "sparkApp"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE6x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 6 },
    status: "legacy"
  },
  QmeaYGKqdJHCstEPsS4iepvT5y6JZyuAKu87kFwz1yQE7x: {
    rank: "0.000576",
    grade: { from: 0.000001, to: 0.001, value: 7 },
    status: "legacys"
  }
};

const Application = props => {
  const { openMenu, toggleMenu, newApp } = props;

  return (
    <Pane
      height="100vh"
      width="100vw"
      backgroundColor="#000"
      display="flex"
      alignItems="center"
    >
      <Pane padding="2em" width="100%">
        {Object.keys(links).map(key => (
          <SearchItem
            key={key}
            hash={key}
            rank={links[key].rank}
            grade={links[key].grade}
            status={links[key].status}
            contentIpfs={links[key].content}
          >
            {links[key].status !== "success" ? (
              key
            ) : (
              <iframe style={{ width: '100%', border: 'none' }} src={links[key].content} />
            )}
          </SearchItem>
        ))}
      </Pane>
    </Pane>
  );
};

storiesOf("Molecules|searchSnippet", module).add("searchSnippet", () => (
  <Application />
));
