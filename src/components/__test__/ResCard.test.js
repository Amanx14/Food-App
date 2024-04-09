import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";

it("Should render Restaurant card components with props data", ()=> {
    render(<RestaurantCard />);
});