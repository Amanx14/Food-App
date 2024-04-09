import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button on the component", () => {
        render(<Contact />);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument(); // Assertion
    });
});

