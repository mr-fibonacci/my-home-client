import React from "react";

interface ListingsProps {
  mode: "buy" | "rent";
}
const Listings: React.FunctionComponent<ListingsProps> = (props) => {
  const { mode } = props;
  return (
    <div>
      Listings! Here you'll find the most suitable properties to {mode}.
    </div>
  );
};

export default Listings;
