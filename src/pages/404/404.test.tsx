import React from 'react'
import { render, screen } from "@testing-library/react";

import { NotFound } from './404';

describe("Page: 404", () => {

	beforeAll(() => {
		render(<NotFound />);
	})

	it("should render", () => {
		const elem = screen.getByTestId("not-found-main");

		expect(elem).toBeInTheDocument();
	});


})