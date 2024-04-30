// src/components/About.tsx

import React from "react";
import styled from "@emotion/styled/macro";

import PokedexData from "./PokedexData";
import Abilities from "./Abilities";
import { mapTypeToHex } from "../utils";

const Base = styled.article`
  padding: 20px;
`;

const FlavorText = styled.p`
  margin: 0 auto;
  word-break: break-word;
  font-size: 14px;
  color: #374151;
`;

const TypeWrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

const TypeImage = styled.img`
  height: 12px;
`;

const TypeLabel = styled.span`
  margin-left: 4px;
  color: #fff;
  font-size: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const About = ({
  isLoading,
  isMythical,
  isLegendary,
  types,
  weight,
  flavorText,
  growthRate,
  genderRate,
  color,
  height,
  baseExp,
  abilities,
}) => {
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return (
    <Base>
      <FlavorText>{flavorText}</FlavorText>
      {isLoading ? (
        <ImageWrapper>
          <Image src="/loading.gif" />
        </ImageWrapper>
      ) : (
        <>
          {
            // 포켓몬 타입 정보
            types && (
              <TypeList>
                {types.map(({ type }, idx) => (
                  <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
                    <TypeImage src={`/assets/${type.name}.svg`} />
                    <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
                  </TypeWrapper>
                ))}
              </TypeList>
            )
          }
          <PokedexData
            weight={weight}
            height={height}
            genderRate={genderRate}
            growthRate={growthRate}
            baseExp={baseExp}
            rarity={rarity}
            color={color}
          />
          {abilities && <Abilities abilities={abilities} color={color} />}
        </>
      )}
    </Base>
  );
};

export default About;
