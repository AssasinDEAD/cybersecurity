d = 3
function encrypt(p, q, m, e) {
   let n = p * q
   let f = (p - 1) * (q - 1)
   let c = Math.pow(m, e) % n
   let d
   for (let i = 1; i < 33; i++) {
      d = (i + 1) / 11
   }
   console.log("m:=", n, "f:=", f, "c:=", c, d);
}
encrypt(3, 5, 3, 11)





d = 3