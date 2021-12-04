const carta = 'bici   coche balón _playstation bici coche peluche'

/**
 * 
 * @param {String} letter 
 * @returns 
 */
export default function listGifts(letter) {
  const gifts = letter.split(' ');
  const filteredGifts = gifts.filter((gift)=> !gift.startsWith('_'));
  const counts = {};
  filteredGifts.forEach((gif) => {
    if (gif != ''){
      counts[gif.trim()] = (counts[gif] || 0) + 1;
    }
    
  });
  return counts;
 }

 console.log(listGifts(carta));

 /*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/