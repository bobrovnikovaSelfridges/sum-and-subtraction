const hasNumberRegex = /\d/;
const hasForbiddenSymbolsRegex = /[^0-9\+\-]/
const startsOrEndsWithPlusOrEndsWithMinus = /^(\+.*|.*-|.*\+)$/;

export const MSSGS = {
    forbiddenSymbols: "Remove forbidden symbols. Use only +, - and numbers.",
    repeatedSymbols: "Remove repeated symbols.",
    noNumbers: "Please use numbers for calculation",
    startsOrEnds: "Shouldn't start or end with + or end with -"
}

export const calculateResult = (expression: string) => {
    const noSpacesExpression = expression.replace(/\s/g, '');
    const hasNumber = hasNumberRegex.test(noSpacesExpression);
    const hasForbiddenSymbols = hasForbiddenSymbolsRegex.test(noSpacesExpression);
    console.log({ hasForbiddenSymbols, noSpacesExpression })
    const isStartsOrEndsWithPlusOrMinus = startsOrEndsWithPlusOrEndsWithMinus.test(noSpacesExpression)

    if (!hasNumber) {
        return {
            result: 0,
            message: MSSGS.noNumbers
        }
    }

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


    const hasRepeatedSymbolRegex = /([^\d\s])\1/g.test(noSpacesExpression)
    if (hasRepeatedSymbolRegex) {
        return {
            result: 0,
            message: MSSGS.repeatedSymbols
        }
    }

    return {
        result: parseInt(eval(noSpacesExpression)),
        message: ''
    }

};
