import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should render my header component woth a login button", () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />;
            </ Provider>
        </BrowserRouter>
    );


    const loginButton = screen.getByRole("button", {name : "Login"});

    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
});

it("Should render my header component woth a login button name Cart - (0)", () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />;
            </ Provider>
        </BrowserRouter>
    );


    // const loginButton = screen.getByText("Cart - (0)");
    const loginButton = screen.getByText(/Cart/);

    expect(loginButton).toBeInTheDocument();
});

test("Should change login to logout", () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />;
            </ Provider>
        </BrowserRouter>
    );


    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});