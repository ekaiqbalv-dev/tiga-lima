const calculateTigaLima = (maxValue) => {
  for (let i = 1; i <= maxValue; i++) {
    const isDivisibleByThree = i % 3 == 0
    const isDivisibleByFive = i % 5 == 0

    if (!isDivisibleByThree && !isDivisibleByFive) {
      console.log(i)
      continue
    }

    let printValue = ''
    if (isDivisibleByThree) {
      printValue += 'Tiga'
    }
    if (isDivisibleByFive) {
      printValue += 'Lima'
    }
    console.log(printValue)
  }
}

calculateTigaLima(20);
