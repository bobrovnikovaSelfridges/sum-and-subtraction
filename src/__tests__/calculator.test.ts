
import { calculateResult } from "../utils/calculate-result";

describe("calculateResult function", () => {
    const expressions = [
        // valid
        ["2+3", 5],
        ["10-5", 5],
        ["2+3-4", 1],
        ["-2", -2],

        // invalid
        ["2++3", 0],
        ["10-5", 0],
        ["2+3-4", 0],
        ["-2", 0],
    ];

    it.each(expressions)(
        'should calculate "%s" correctly and return { result: %p, message: "" }',
        (expression, expected) => {
            expect(calculateResult(expression.toString())).toEqual({ result: expected, message: "" });
        }
    );
});
