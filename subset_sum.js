const array = [17, 2, 8, 34, 4, 0.5, 42, 6, 3, 7, 15, 14, 9]
const sum = 15

let result = null

const subset_sum = (array, soma, resultado_parcial) => {

  resultado_parcial = resultado_parcial || []
  soma_temp = resultado_parcial.reduce((a, b) => a + b, 0)

  if (soma_temp > soma) return null

  if (soma_temp === soma) {
    if (!result) result = []
    result.push(resultado_parcial)
  }

  for (let i = 0; i < array.length; i++) {
    numeroAtual = array[i]
    sobra = array.slice(i + 1)
    subset_sum(sobra, soma, resultado_parcial.concat([numeroAtual]))
  }

  return result
}

const startTime = process.hrtime()
const res = subset_sum(array, sum)
const diff = process.hrtime(startTime)

console.log(`Result:`, res)
console.log(`Time: ${(diff[0] * 1e9 + diff[1]) / 1000000} ms`)
