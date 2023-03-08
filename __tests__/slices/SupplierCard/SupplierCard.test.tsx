import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SupplierCard, { SupplierCardProps } from "../../../slices/SupplierCard";

describe("Home", () => {
  it("renders a heading", () => {
    const props: SupplierCardProps = {
      slice: {
        items: [],
        primary: {
          image: { link_type: "linkType" },
          rating: 2,
          tagline: [{ type: "heading1", text: "Lorem Ipsum", spans: [] }],
          title: [],
        },
        slice_type: "supplier_card",
        variation: "default",
        version: "",
        slice_label: null,
      },
      context: {},
      index: 1,
      slices: [],
    };

    const component = render(<SupplierCard {...props} />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
