module.exports = function multiply(first, second) {
  return first.split('').reduceRight((p, a, i) => 
      second.split('').reduceRight((p, b, j) => {
        const mul = a * b 
        const p1 = i + j;
        const p2 = p1 + 1;
        const sum = mul + zer(p[p2]);
                
        p[p1] = Math.floor(sum / 10);
        p[p2] = sum % 10;
                
        return p;
      }, p)
    , []).join('').replace(/^0+(?=\d)/, '');
  }

function zer(v) {
  return v || 0;
}