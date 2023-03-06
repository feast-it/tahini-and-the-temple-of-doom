import React from "react";
import { PrismicRichText, PrismicImage } from "@prismicio/react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid gray;
  border-radius: 4px;
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

/**
 * @typedef {import("@prismicio/client").Content.SupplierCardSlice} SupplierCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SupplierCardSlice>} SupplierCardProps
 * @param { SupplierCardProps }
 */
const SupplierCard = ({ slice }) => (
  <Card>
    <PrismicImage field={slice.primary.image} />
    <SectionContainer>
      <TextContainer>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.tagline} />
      </TextContainer>
      <span>{slice.primary.rating}</span>
    </SectionContainer>
  </Card>
);

export default SupplierCard;
