
import { calculateResult, MSSGS } from "../utils/calculate-result";

describe('calculateResult', () => {
    it('should return the correct result and message for valid expressions', () => {
        expect(calculateResult('1 + 2')).toEqual({ result: 3, message: '' });
        expect(calculateResult('10 - 5')).toEqual({ result: 5, message: '' });
    });

    it('should return a message for expressions with forbidden symbols', () => {
        expect(calculateResult('1 + @')).toEqual({
            result: 0,
            message: MSSGS.forbiddenSymbols,
        });
        expect(calculateResult('10 * 5')).toEqual({
            result: 0,
            message: MSSGS.forbiddenSymbols,
        });
        expect(calculateResult('10 * 5***=01298')).toEqual({
            result: 0,
            message: MSSGS.forbiddenSymbols,
        });
    });

    it('should return a message for expressions starting or ending with + or ending with -', () => {
        expect(calculateResult('+1 + 2')).toEqual({
            result: 0,
            message: MSSGS.startsOrEnds,
        });
        expect(calculateResult('10 - 5-')).toEqual({
            result: 0,
            message: MSSGS.startsOrEnds,
        });
    });

    it('should return a message for expressions with repeated symbols', () => {
        expect(calculateResult('1 +++ 2')).toEqual({
            result: 0,
            message: MSSGS.repeatedSymbols,
        });
        expect(calculateResult('10 - 5 -- 5')).toEqual({
            result: 0,
            message: MSSGS.repeatedSymbols,
        });
    });

    it('should return a message for expressions without numbers', () => {
        expect(calculateResult('+')).toEqual({ result: 0, message: MSSGS.noNumbers });
        expect(calculateResult('-')).toEqual({ result: 0, message: MSSGS.noNumbers });
    });
});
