import { fireEvent, render, screen } from "@testing-library/react";
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

		const headerElement = screen.getByRole("heading", {
			name: "My Calculator",
		});

		expect(headerElement).toBeInTheDocument();
	});

	it("should have a h1 tag as the main header element", () => {
		render(<App />);
		const headerElementType = screen.getByText(/My Calculator/i);
		expect(headerElementType).toContainHTML("h1");
	});
});

describe("Calculator button tests", () => {
	it("should display 4 when the user enters 2+2", () => {
		render(<App />);
		const btnTwo = screen.getByText("2");
		const btnAdd = screen.getByText("+");
		const btnEqual = screen.getByText("=");

		fireEvent.click(btnTwo);
		fireEvent.click(btnAdd);
		fireEvent.click(btnTwo);
		fireEvent.click(btnEqual);

		const display = screen.getByTestId("display");

		expect(display).toHaveTextContent("4");
	});

	it("should display 3 when a user enters 6/2", () => {
		render(<App />);

		const btnSix = screen.getByText("6");
		const btnTwo = screen.getByText("2");
		const btnDivide = screen.getByText("/");
		const btnEqual = screen.getByText("=");

		fireEvent.click(btnSix);
		fireEvent.click(btnDivide);
		fireEvent.click(btnTwo);
		fireEvent.click(btnEqual);

		const display = screen.getByTestId("display");

		expect(display).toHaveTextContent("3");
	});

	it("should display 12 when a user enters 3*4", () => {
		render(<App />);

		const btnThree = screen.getByText("3");
		const btnFour = screen.getByText("4");
		const btnMultiply = screen.getByText("*");
		const btnEqual = screen.getByText("=");

		fireEvent.click(btnThree);
		fireEvent.click(btnMultiply);
		fireEvent.click(btnFour);
		fireEvent.click(btnEqual);

		const display = screen.getByTestId("display");

		expect(display).toHaveTextContent("12");
	});

	it("should display 2 when a user enters 4-2", () => {
		render(<App />);

		const btnFour = screen.getByText("4");
		const btnTwo = screen.getByText("2");
		const btnSubtract = screen.getByText("-");
		const btnEqual = screen.getByText("=");

		fireEvent.click(btnFour);
		fireEvent.click(btnSubtract);
		fireEvent.click(btnTwo);
		fireEvent.click(btnEqual);

		const display = screen.getByTestId("display");

		expect(display).toHaveTextContent("2");});

	it("should clear the display when c is pressed", () => {
		render(<App />);

		const btnThree = screen.getByText("3");
		const btnClear = screen.getByText("c");

		fireEvent.click(btnThree);
		fireEvent.click(btnThree);
		fireEvent.click(btnThree);
		fireEvent.click(btnClear);

		const display = screen.getByTestId("display");

		expect(display).toBeEmptyDOMElement();
	});
});
