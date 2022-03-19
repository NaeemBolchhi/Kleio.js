/*!
 * Kleio.js v0.0.1
 * https://github.com/NaeemBolchhi/Kleio.js
 *
 * Created by NaeemBolchhi
 * https://naeembolchhi.github.io
 *
 * Released under GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Date: 2022-03-19 (YYYY-MM-DD)
 */
 
// Encoding a string. | kleioEncode('something');
function kleioEncode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
  }));
}

// Decoding a string. | kleioDecode('c29tZXRoaW5n');
function kleioDecode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}