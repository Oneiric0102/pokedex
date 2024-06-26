import React from "react";
import styled from "@emotion/styled/macro";

import { mapColorToHex } from "../utils";
import useAbilities from "../hooks/useAbilities";

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Base = styled.div`
  margin-top: 32px;
`;

const ListItem = styled.li`
  display: flex;
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`;

const Abilities = ({ abilities, color }) => {
  const results = useAbilities(abilities);

  const getEffectEntry = (effectEntries) => {
    // 영문 반환
    return (
      effectEntries.find((effectEntry) => effectEntry.language.name === "en") ||
      effectEntries[0]
    );
  };

  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>Abilities</Title>
      <List>
        {results.map(
          ({ data }, idx) =>
            data && (
              <ListItem key={idx}>
                <Label>{data.data.name}</Label>
                <Description>
                  {getEffectEntry(data.data.effect_entries).effect}
                </Description>
              </ListItem>
            )
        )}
      </List>
    </Base>
  );
};

export default Abilities;
