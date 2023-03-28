// // // peqpmmzejkfaupfarraxrpoadeagmwyobawgphcjgjesfpevpibknmpklkwudarpounirammnegpiqkkyuifkpc

// $(document).ready(function () {
//    console.log("working....");
//    count = 0
//    $('#cypherTextBtn').on("click", function () {
//       let abc = $("#cypherText").val()
//       let find = abc.split('')
//       let a = abc.split('')
//       a.unshift("k", "l")
//       console.log(find, a);
//       let dc = []
//       for (i = 0; i < a.length; ++i) {
//          for (j = 0; j < a.length; ++j) {
//             if (j == i) {
//                count++
//             }
//          }
//       }
//       dc.push(count)
//       console.log(dc);
//       count = 0
//    })
// });
// function decryptVigenere(ciphertext) {
//    // First, we need to determine the length of the key
//    let keyLength = 0;
//    for (let i = 1; i <= ciphertext.length; i++) {
//       let substring1 = ciphertext.substring(0, i);
//       let substring2 = ciphertext.substring(i, i * 2);
//       let distance = hammingDistance(substring1, substring2);
//       if (distance / i > 0.6) {
//          keyLength = i;
//          break;
//       }
//    }
//    console.log("Key length: " + keyLength);

//    // Next, we need to determine the key itself
//    let key = "";
//    for (let i = 0; i < keyLength; i++) {
//       let column = "";
//       for (let j = i; j < ciphertext.length; j += keyLength) {
//          column += ciphertext.charAt(j);
//       }
//       let offset = findKeyCharacter(column);
//       key += String.fromCharCode(offset + 97);
//    }
//    console.log("Key: " + key);

//    // Finally, we can use the key to decrypt the ciphertext
//    let plaintext = "";
//    for (let i = 0; i < ciphertext.length; i++) {
//       let shift = (key.charCodeAt(i % keyLength) - 97 + 26) % 26;
//       let decryptedCharCode = (ciphertext.charCodeAt(i) - 97 - shift + 26) % 26 + 97;
//       plaintext += String.fromCharCode(decryptedCharCode);
//    }
//    console.log("Plaintext: " + plaintext);
// }

// // Helper function to calculate the Hamming distance between two strings
// function hammingDistance(str1, str2) {
//    let distance = 0;
//    for (let i = 0; i < str1.length; i++) {
//       if (str1.charAt(i) !== str2.charAt(i)) {
//          distance++;
//       }
//    }
//    return distance;
// }

// // Helper function to determine the most likely key character for a given column
// function findKeyCharacter(column) {
//    let frequencyCounts = new Array(26).fill(0);
//    for (let i = 0; i < column.length; i++) {
//       frequencyCounts[column.charCodeAt(i) - 97]++;
//    }
//    let maxCount = -1;
//    let maxIndex = -1;
//    for (let i = 0; i < frequencyCounts.length; i++) {
//       if (frequencyCounts[i] > maxCount) {
//          maxCount = frequencyCounts[i];
//          maxIndex = i;
//       }
//    }
//    return (26 - (maxIndex - 4 + 26) % 26) % 26;
// }

// decryptVigenere("trxgcqsltsf kpgmjtxq ad xzw avsuemuw zj hjzxwuemfy trxgcqsltsf syh afqsjelxagy wqkeiek qvge frsmelgjtdwv lguwdw, mkp, haknpgkfvw, vtwjmaxagy, qgvtjaulxagy, sj vpwljfglazr. lzp fsktg hjtruaapwk zj afqsjelxagy wwufvalj mfuwyvw nsfxthwfemsdtxq, ayxwycmlq, lrv sgeadlfadtxq. uzrxaoifltedaec jwqijk es lzp tjgeiultsf gq wwfdmlagi afqsjelxagy jjgx fwayk vadgdgdiv lz yfsfxzgcmrwo tsjemwk. elak nef tp euztinwo xzjzyyz prujjtlazr, sunikk nsflcsdk, lrv gelwj diumcmlq xiskfvwk. trlwrvalj vwxpvk lz xzw avglpglazr gx trxgcqsltsf xcse myemlssjakiv usefypw. lztw ak lgugxtdadlwv eljgfkz lsi mkp sx vtkallp karrslfvwk, sekz qyfuemgfd, efv zxzwc xwusrgdzkawd xzse ifkfvw lsi smelwfemuaec sfo euufvsuj sx ayjgjxelazr. snlmdsmmdaec jwqijk es wfdyjayk lzlx smelgjtdwv fwwjd lsnp euupwk lz mfxzvesemgf lrv kjwlwxw ozpr lzpc fwph lzpq. lztw usy fw snggeapaksiv lsvgmrl vadeklpv jwnsnwcc hdlrfayk, jwoyfvlrl kjwlwxw, sfo slzpv ewlwmjpw lzlx wfdyjw elw uzrlayyalj sx gaijsemgfd. mf sohaltsf lz xzwdi hjtruaapwk, trxgcqsltsf kpgmjtxq swwg ayzgdgik jtwc elrsypqwfe, mfuthwfe vwkasfkp, efv nsehwmsfni oael dshw sfo vwyfpsltsfk. pjxwnxanp mfxzvesemgf diumcmlq ciimtvwk l ggeavwzprkagi shavgsnl lzlx ugywavpvk lsi fwphk gq xzw zvysymrsemgf, elw jtwck lwkgnmslph oael ald shwcelazrk, syh lzp qwsdyjwd rwwoiv lz tjgeiul lksaywl lsskw cmkcd.")

// ciphertext = 'trxgcqsltsf kpgmjtxq ad xzw avsuemuw zj hjzxwuemfy trxgcqsltsf syh afqsjelxagy wqkeiek qvge frsmelgjtdwv lguwdw, mkp, haknpgkfvw, vtwjmaxagy, qgvtjaulxagy, sj vpwljfglazr. lzp fsktg hjtruaapwk zj afqsjelxagy wwufvalj mfuwyvw nsfxthwfemsdtxq, ayxwycmlq, lrv sgeadlfadtxq. uzrxaoifltedaec jwqijk es lzp tjgeiultsf gq wwfdmlagi afqsjelxagy jjgx fwayk vadgdgdiv lz yfsfxzgcmrwo tsjemwk. elak nef tp euztinwo xzjzyyz prujjtlazr, sunikk nsflcsdk, lrv gelwj diumcmlq xiskfvwk. trlwrvalj vwxpvk lz xzw avglpglazr gx trxgcqsltsf xcse myemlssjakiv usefypw. lztw ak lgugxtdadlwv eljgfkz lsi mkp sx vtkallp karrslfvwk, sekz qyfuemgfd, efv zxzwc xwusrgdzkawd xzse ifkfvw lsi smelwfemuaec sfo euufvsuj sx ayjgjxelazr. snlmdsmmdaec jwqijk es wfdyjayk lzlx smelgjtdwv fwwjd lsnp euupwk lz mfxzvesemgf lrv kjwlwxw ozpr lzpc fwph lzpq. lztw usy fw snggeapaksiv lsvgmrl vadeklpv jwnsnwcc hdlrfayk, jwoyfvlrl kjwlwxw, sfo slzpv ewlwmjpw lzlx wfdyjw elw uzrlayyalj sx gaijsemgfd. mf sohaltsf lz xzwdi hjtruaapwk, trxgcqsltsf kpgmjtxq swwg ayzgdgik jtwc elrsypqwfe, mfuthwfe vwkasfkp, efv nsehwmsfni oael dshw sfo vwyfpsltsfk. pjxwnxanp mfxzvesemgf diumcmlq ciimtvwk l ggeavwzprkagi shavgsnl lzlx ugywavpvk lsi fwphk gq xzw zvysymrsemgf, elw jtwck lwkgnmslph oael ald shwcelazrk, syh lzp qwsdyjwd rwwoiv lz tjgeiul lksaywl lsskw cmkcd.'



// $(document).ready(function () {
//    console.log("working....");
//    count = 0
//    $('#cypherTextBtn').on("click", function () {
//       let abc = $("#cypherText").val()
//       let arr1 = abc.split('')
//       let arr2 = abc.split('')
//       // arr2.unshift(" ", ' ', ' ')
//       compare = (a1, a2) => a1.filter(v => a2.includes(v)).length;

//       console.log(compare(arr1, arr2));
//       console.log(arr1);
//       console.log(arr2);
//    })
// });

// function getIC(text) {
//    let len = text.length;
//    let sum = 0;

//    for (let i = 0; i < 26; i++) {
//       let sub = text.replace(/[^a-zA-Z]/g, '').substr(i);
//       let count = 0;

//       for (let j = 0; j < sub.length; j++) {
//          if (sub.charCodeAt(j) >= 65 && sub.charCodeAt(j) <= 90) {
//             count++;
//          }
//       }

//       sum += count * (count - 1);
//    }

//    return sum / (len * (len - 1));
// }

// function getKeyLength(ciphertext) {
//    let text = ciphertext.toUpperCase();
//    let ic = getIC(text);
//    let avgIC = 0.065;
//    let keyLength = 0;
//    let minDiff = Number.MAX_SAFE_INTEGER;

//    for (let i = 1; i <= text.length; i++) {
//       let sub = '';

//       for (let j = 0; j < text.length; j++) {
//          if (j % i === 0) {
//             sub += text.charAt(j);
//          }
//       }

//       let subIC = getIC(sub);
//       let diff = Math.abs(ic - subIC);

//       if (diff < minDiff) {
//          minDiff = diff;
//          keyLength = i;
//       }
//    }

//    return keyLength;
// }

// function decryptVigenere(ciphertext) {
//    // Calculate the letter frequency of the ciphertext
//    let letterFrequency = {};
//    for (let i = 0; i < ciphertext.length; i++) {
//       let letter = ciphertext[i];
//       if (letterFrequency[letter]) {
//          letterFrequency[letter]++;
//       } else {
//          letterFrequency[letter] = 1;
//       }
//    }

//    // Sort the letter frequency in descending order
//    let sortedLetterFrequency = [];
//    for (let letter in letterFrequency) {
//       sortedLetterFrequency.push([letter, letterFrequency[letter]]);
//    }
//    sortedLetterFrequency.sort((a, b) => b[1] - a[1]);

//    // Guess the length of the key based on the index of coincidence
//    let keyLength = guessKeyLength(ciphertext);

//    // Divide the ciphertext into columns based on the guessed key length
//    let columns = [];
//    for (let i = 0; i < keyLength; i++) {
//       columns[i] = "";
//    }
//    for (let i = 0; i < ciphertext.length; i++) {
//       columns[i % keyLength] += ciphertext[i];
//    }

//    // Decrypt each column using single-column substitution
//    let key = "";
//    for (let i = 0; i < keyLength; i++) {
//       let column = columns[i];
//       let shift = (sortedLetterFrequency[0][0].charCodeAt(0) - 'e'.charCodeAt(0) + 26) % 26;
//       key += String.fromCharCode((shift + 26 - 'a'.charCodeAt(0)) % 26 + 'a'.charCodeAt(0));
//       let decryptedColumn = "";
//       for (let j = 0; j < column.length; j++) {
//          let letter = column[j];
//          let decryptedLetter = String.fromCharCode((letter.charCodeAt(0) - 'a'.charCodeAt(0) + 26 - shift) % 26 + 'a'.charCodeAt(0));
//          decryptedColumn += decryptedLetter;
//       }
//       columns[i] = decryptedColumn;
//    }

//    // Combine the decrypted columns to form the plaintext
//    let plaintext = "";
//    for (let i = 0; i < ciphertext.length; i++) {
//       plaintext += columns[i % keyLength][Math.floor(i / keyLength)];
//    }

//    return [key, plaintext];
// }

// function guessKeyLength(ciphertext) {
//    // Implement your own algorithm to guess the key length based on the index of coincidence
// }


// console.log(decryptVigenere('TRXGCQSLTSFKPGMJTXQADXZWAVSUEMUWZJHJZXWUEMFYTRXGCQSLTSFSYHAFQSJELXAGYWQKEIEKQVGEFRSMELGJTDWVLGUWDWMKPHAKNPGKFVWVTWJMAXAGYQGVTJAULXAGYSJVPWLJFGLAZRLZPFSKTGHJTRUAAPWKZJAFQSJELXAGYWWUFVALJMFUWYVWNSFXTHWFEMSDTXQAYXWYCMLQLRVSGEADLFADTXQUZRXAOIFLTEDAECJWQIJKESLZPTJGEIULTSFGQWWFDMLAGIAFQSJELXAGYJJGXFWAYKVADGDGDIVLZYFSFXZGCMRWOTSJEMWKELAKNEFTPEUZTINWOXZJZYYZPRUJJTLAZRSUNIKKNSFLCSDKLRVGELWJDIUMCMLQXISKFVWKTRLWRVALJVWXPVKLZXZWAVGLPGLAZRGXTRXGCQSLTSFXCSEMYEMLSSJAKIVUSEFYPWLZTWAKLGUGXTDADLWVELJGFKZLSIMKPSXVTKALLPKARRSLFVWKSEKZQYFUEMGFDEFVZXZWCXWUSRGDZKAWDXZSEIFKFVWLSISMELWFEMUAECSFOEUUFVSUJSXAYJGJXELAZRSNLMDSMMDAECJWQIJKESWFDYJAYKLZLXSMELGJTDWVFWWJDLSNPEUUPWKLZMFXZVESEMGFLRVKJWLWXWOZPRLZPCFWPHLZPQLZTWUSYFWSNGGEAPAKSIVLSVGMRLVADEKLPVJWNSNWCCHDLRFAYKJWOYFVLRLKJWLWXWSFOSLZPVEWLWMJPWLZLXWFDYJWELWUZRLAYYALJSXGAIJSEMGFDMFSOHALTSFLZXZWDIHJTRUAAPWKTRXGCQSLTSFKPGMJTXQSWWGAYZGDGIKJTWCELRSYPQWFEMFUTHWFVWKASFKPEFVNSEHWMSFNIOAELDSHWSFOVWYFPSLTSFKPJXWNXANPMFXZVESEMGFDIUMCMLQCIIMTVWKLGGEAVWZPRKAGISHAVGSNLLZLXUGYWAVPVKLSIFWPHKGQXZWZVYSYMRSEMGFELWJTWCKLWKGNMSLPHOAELALDSHWCELAZRKSYHLZPQWSDYJWDRWWOIVLZTJGEIULLKSAYWLLSSKWCMKCD'));

$(document).ready(function () {
   console.log("working....");
   count = 0

   $('#cypherTextBtn').on("click", function () {

      const maxChar = str => {
         const strObj = {}
         let maxCount = 0
         let maxChar = ""
         for (let char of str) {
            strObj[char] = strObj[char] + 1 || 1
         }
         for (let key in strObj) {
            if (strObj[key] > maxCount) {
               maxCount = strObj[key]
               maxChar = key
            }
         }
         return maxChar
      }


      let counters = []


      let abc = $("#cypherText").val()
      let arr1 = abc.split('')
      console.log(arr1);
      let arr2 = abc.split('')
      function countSameElements(array1, array2) {
         let count = 0;
         for (let i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
               count++;
            }
         }
         counters.push(count)
         return count;
      }

      while (counters.length < 16) {
         arr2.unshift(" ")
         countSameElements(arr1, arr2);
      }
      let matrix = []
      for (let i = 0; counters[i] < counters[i + 1]; i++) {
         console.log(counters);
         console.log(counters.indexOf(counters[counters.length - 1]) + 1);
      }

      matrix.push(arr1.filter((item, index) => !((index + 1) % 5)))
      matrix.push(arr1.filter((item, index) => !((index + 1) % 6)))
      matrix.push(arr1.filter((item, index) => !((index + 1) % 7)))
      matrix.push(arr1.filter((item, index) => !((index + 1) % 8)))
      console.log(maxChar(abc));
      console.log(matrix);;
   })
});

function decipherCaesar(ciphertext, shift) {
   shift = shift % 26;
   var plaintext = "";
   for (var i = 0; i < ciphertext.length; i++) {
      var c = ciphertext.charCodeAt(i);
      if (c >= 65 && c <= 90) {
         plaintext += String.fromCharCode((c - 65 - shift + 26) % 26 + 65);
      } else if (c >= 97 && c <= 122) {
         plaintext += String.fromCharCode((c - 97 - shift + 26) % 26 + 97);
      } else {
         plaintext += ciphertext.charAt(i);
      }
   }
   return plaintext;
}

let ddd = decipherCaesar("CQSL", 26)

console.log(ddd);
