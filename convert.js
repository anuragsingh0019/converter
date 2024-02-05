function convertToWords() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(numberInput) || numberInput === '') {
      resultElement.textContent = 'Please enter a valid number.';
      return;
    }
  
    const words = convertNumberToWords(Number(numberInput));
    resultElement.textContent = `In words: ${words}`;
  }
  
  function convertNumberToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
    if (number === 0) return 'Zero';
  
    let result = '';
  
    if (number >= 1000) {
      result += convertNumberToWords(Math.floor(number / 1000)) + ' Thousand ';
      number %= 1000;
    }
  
    if (number >= 100) {
      result += units[Math.floor(number / 100)] + ' Hundred ';
      number %= 100;
    }
  
    if (number > 0) {
      if (result !== '') result += 'and ';
  
      if (number < 10) {
        result += units[number];
      } else if (number < 20) {
        result += teens[number - 10];
      } else {
        result += tens[Math.floor(number / 10)];
        if (number % 10 > 0) {
          result += '-' + units[number % 10];
        }
      }
    }
  
    return result.trim();
  }
  