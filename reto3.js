const carta1 = "bici coche (balón) bici coche peluche" // -> ✅
const carta2 = "(muñeca) consola bici" // ✅

const carta3 ="bici coche (balón bici coche" // -> ❌
const carta4 = "peluche (bici [coche) bici coche balón" // -> ❌
const carta5 = "(peluche {) bici" // -> ❌
const carta6 = "() bici" // ❌

/**
 *
 * @param {String} text
 */
function containParentheses(text) {
  return text.includes('(') && text.includes(')');
}

/**
 *
 * @param {String} letter
 * @returns
 */
export default function isValid(letter) {
  if (containParentheses) {
    const startParentheses = letter.indexOf('(');
    const endParentheses = letter.indexOf(')');
    console.log(startParentheses);
    console.log(endParentheses);
    if (startParentheses == endParentheses-1){
      return false;
    } else if (startParentheses < endParentheses) {
      const gift = letter.substring(startParentheses+1, endParentheses);
      console.log(gift);
      if (
        gift === '',
        gift.includes('(') ||
        gift.includes(')') ||
        gift.includes('{') ||
        gift.includes('}') ||
        gift.includes('[') ||
        gift.includes(']')
      ) {
        return false;
      } else {
        return true;
      }
    } else  {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isValid(carta6));
