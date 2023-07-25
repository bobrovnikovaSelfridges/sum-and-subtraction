const hasNumberRegex = /\d/;
const hasForbiddenSymbolsRegex = /[^0-9+-]/g
const startsOrEndsWithPlusOrEndsWithMinus = /^(\+.*|.*-)$/;

export const MSSGS = {
    forbiddenSymbols: "Remove forbidden symbols. Use only +, - and numbers.",
    repeatedSymbols: "Remove repeated symbols.",
    noNumbers: "Please use numbers for calculation",
    startsOrEnds: "Shouldn't start or end with + or end with -"
}

export const calculateResult = (expression: string) => {
    const hasNumber = hasNumberRegex.test(expression);
    const hasForbiddenSymbols = hasForbiddenSymbolsRegex.test(expression);
    const isStartsOrEndsWithPlusOrMinus = startsOrEndsWithPlusOrEndsWithMinus.test(expression)

    if (hasForbiddenSymbols) {
        return {
            result: 0,
            message: MSSGS.forbiddenSymbols
        }
    }
    if (isStartsOrEndsWithPlusOrMinus) {
        return {
            result: 0,
            message: MSSGS.startsOrEnds
        }
    }


    const hasRepeatedSymbolRegex = /([^\d\s])\1/g.test(expression)
    if (hasRepeatedSymbolRegex) {
        return {
            result: 0,
            message: MSSGS.repeatedSymbols
        }
    }

    if (!hasNumber) {
        return {
            result: 0,
            message: MSSGS.noNumbers
        }
    }
    return {
        result: parseInt(eval(expression)),
        message: ''
    }

};
