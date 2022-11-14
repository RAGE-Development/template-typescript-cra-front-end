/* eslint-disable @typescript-eslint/no-empty-function */
import type { Matcher } from "@testing-library/react";
import mediaQuery from 'css-mediaquery';

/**
 * Getting the deepest element that contain string / match regex even when it split between multiple elements
 *
 * @example
 * For:
 * <div>
 *   <span>Hello</span><span> World</span>
 * </div>
 *
 * screen.getByText('Hello World') // ❌ Fail
 * screen.getByText(textContentMatcher('Hello World')) // ✅ pass
 */
export function textContentMatcher(textMatch: string | RegExp): Matcher {
	const hasText = (typeof textMatch === 'string')
		? (node: Element) => node.textContent === textMatch
		: (node: Element) => textMatch.test(node.textContent || '');

	return (_content: string, node: Element | null) => {
		if (!node) return false;

		if (!hasText(node)) {
			return false;
		}

		const childrenDontHaveText = Array.from(node?.children || []).every((child) => !hasText(child));

		return childrenDontHaveText
	};
}

/**
 * Creating a mock for the window height and width using emulated media queries
 */
export function createMatchMedia(width: number) {
	return (query: string): MediaQueryList => {
		const mql: MediaQueryList = {
			matches: mediaQuery.match(query, {
				width,
			}),
			media: query,
			addListener: () => { },
			addEventListener: () => { },
			removeListener: () => { },
			dispatchEvent: () => false,
			removeEventListener: () => { },
			onchange: () => { },

		} as MediaQueryList;
		return mql
	};
}
