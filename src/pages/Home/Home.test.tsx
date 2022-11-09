import React from 'react'
import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe("Page: Home", () => {

	beforeAll(() => {
		render(<Home />);
	})

	it("should render", () => {
		const elem = screen.getByTestId("home-main");

		expect(elem).toBeInTheDocument();
	});


})