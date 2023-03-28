const crypto = require("crypto");
const zlib = require('zlib');
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
   modulusLength: 2048,
});
const md5 = text => {
   return crypto
      .createHash('md5')
      .update(text)
      .digest();
}

let plaintext = "INeedToEncryptThisText"

let hash = crypto.createHash('md5').update(plaintext).digest("hex")

console.log("THIS IS A HASH 1111", hash);

const encryptedData = crypto.publicEncrypt(
   {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
   },
   Buffer.from(hash)
);
console.log("encypted data 222", encryptedData.toString("base64"));


let concatinated = plaintext + "|" + encryptedData.toString("base64")

console.log("This IS concantinated ciphertext 3333", concatinated)


let unconcatinated = concatinated.split('|')


let deflated = zlib.deflateSync(concatinated).toString('base64');

console.log("THIS IS A COMPRESSED TEXT 4444", deflated);


const encrypt = (text, secretKey) => {
   secretKey = md5(secretKey);
   console.log(secretKey.toString('base64'));
   secretKey = Buffer.concat([secretKey, secretKey.slice(0, 8)]);

   const cipher = crypto.createCipheriv('des-ede3', secretKey, '');
   const encrypted = cipher.update(text, 'utf8', 'base64');

   return encrypted + cipher.final('base64');
};

const encrypted = encrypt(deflated, 'testkey');

console.log("Compressed CIPHERTEXT 5555", encrypted);


const encryptedSecretKey = crypto.publicEncrypt(
   {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
   },
   Buffer.from('testkey')
);
console.log("ENCRYPTED SECRETKEY 6666", encryptedSecretKey.toString("base64"));

let concantinatedFull = encryptedSecretKey.toString("base64") + "|" + encrypted.toString("base64")

console.log("END ENCRYPTION 7777", concantinatedFull);

console.log("START DECRIPTION 8888", concantinatedFull.split("|"));


const decryptedSecretKey = crypto.privateDecrypt(
   {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
   },
   encryptedSecretKey
);

console.log("decrypted secret key 99999", decryptedSecretKey.toString());


const decrypt = (encryptedBase64, secretKey) => {
   secretKey = md5(secretKey);
   secretKey = Buffer.concat([secretKey, secretKey.slice(0, 8)]); // properly expand 3DES key from 128 bit to 192 bit
   const decipher = crypto.createDecipheriv('des-ede3', secretKey, '');
   let decrypted = decipher.update(encryptedBase64, 'base64');
   decrypted += decipher.final();
   return decrypted;
};


console.log("Decrypted text: 11111", decrypt(encrypted, 'testkey'));


let inflated = zlib.inflateSync(Buffer.from(deflated, 'base64')).toString();

console.log("THIS IS A DECOMPRESSED TEXT 22222", inflated);


const decryptedData = crypto.privateDecrypt(
   {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
   },
   encryptedData
)

console.log("decrypted data: 33333", decryptedData.toString());


if (hash == decryptedData.toString()) {
   console.log('YOU FINALLY DID IT!!!!');
}