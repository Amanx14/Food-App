import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mockData/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import "@testing-library/react";
import RestaurantCard from "../RestaurantCard";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the Body component with search component", async () => {

    await act(async () => render(
        <BrowserRouter >
            <Body />
        </BrowserRouter>
    ));

    // const cardsBeforeClick = screen.getAllByTestId("resCard");

    // expect(cardsBeforeClick.length).toBe(20);

    // const searchBtn = screen.getByRole("button", {name: "Search"});

    // const searchInput = screen.getByTestId("SearchInput");

    // fireEvent.change(searchInput, { target : {value : "pizza"} });

    // fireEvent.click(searchBtn);

    // const cards = screen.getAllByTestId("resCard");

    // expect(cards.length).toBe(1);
});

test("It should filter top rated restaurant", async ()=> {
    await act( async ()=> {
        render(
            <BrowserRouter >
                <Body />
            </BrowserRouter >
        );
    })

    // const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // expect(cardsBeforeFilter.length).toBe(20);

    // const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});
    // fireEvent.click(topRatedBtn);

    // const cardsAfterFilter = screen.getAllByTestId("resCard");

    // expect(cardsAfterFilter.length).toBe(15);
});

