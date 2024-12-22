import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react";

import { ChemicalElement } from '../stories/ChemicalElement';

// interface ChemicalElementProps {
//     /**
//      * What is the name of this element?
//      */
//     name?: string;
//     /**
//      * What is the symbol of this element?
//      */
//     symbol?: string;
//     /**
//      * What is the atomic number of this element?
//      */
//     atomicNumber?: number;
//     /**
//      * What row does this element belong to?
//      */
//     period?: number;
//     /**
//      * What column does this element belong to?
//      */
//     group?: number;
//     /**
//      * What is the chemical group block of this element?
//      */
//     backgroundColor?: string;
//      /**
//      * Optional click handler
//      */
//     onClick?: () => void;
// }

describe("ChemicalElement", () => {
    it("renders", () => {
        render(<ChemicalElement />);
        expect(screen.getByText("O")).toBeDefined();
    });
});
