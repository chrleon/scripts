function fitRange(n, inmin, inmax, outmin, outmax) {
  // use max - min to always subtract the largest number from the smallest
  let inrange = Math.max(inmin, inmax) - Math.min(inmax, inmin)
  let outrange = Math.max(outmin,outmax) - Math.min(outmax,outmin)
  // get the fraction
  let nratio = (n - inmin) / inrange
  let result = nratio * outrange
  return result
}
console.log(fitRange(1, 0, 100, 0, 1))
