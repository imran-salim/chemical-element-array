import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react";

import { ChemicalElement } from '../stories/ChemicalElement';

describe("ChemicalElement", () => {
    it("renders", () => {
        render(<ChemicalElement />);
        expect(screen.getByText("O")).toBeDefined();
    });
});
