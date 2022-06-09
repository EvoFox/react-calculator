import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Header Tests", () => {
	test("Should find the text of my header.", () => {
		// render (<file you want to test />)
		render(<App />);
	
		// query methods that we are using
		// screen.getBy[something] finds the element you want to interact with
		const headerElement = screen.getByText(/My Calculator/i);
	
		// assertions
		// assert the result that is expected
		expect(headerElement).toBeInTheDocument();
	});
	
	it("should find the element of the header", () => {
		render(<App />);
	
		const headerElement = screen.getByRole("heading", { name: "My Calculator" });
	
		expect(headerElement).toBeInTheDocument();
	});
	
	it("should have a h1 tag as the main header element", () => {
		render(<App />);
		const headerElementType = screen.getByText(/My Calculator/i);
		expect(headerElementType).toContainHTML("h1");
	});
	
})

