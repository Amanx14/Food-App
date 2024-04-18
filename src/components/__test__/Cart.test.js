import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import MOCK_DATA from '../mockData/mockResMenu.json';
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import { Provider } from "react-redux";
import '../../utils/appStore';
import appStore from "../../utils/appStore"; 

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA),
    });
})

test('It should load our restaurant menu component', async () => {
    await act(async () => render(<Provider store={appStore} > <RestaurantMenu /> </Provider>));

    const accordianHeader = screen.getByText('Veg Pizza'); 
    fireEvent.click(accordianHeader); 
    

    const food = screen.getAllByTestId('foodItems');
    expect(Home).toBeInTheDocument();
});