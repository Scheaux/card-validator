export default class App {
  static init() {
    App.addListeners();
  }

  static addListeners() {
    this.input = document.getElementById('card-input');
    this.button = document.getElementById('validate');

    this.button.addEventListener('click', () => {
      if (this.input.value !== '' && App.validateCard(this.input.value)) {
        const origin = this.checkCardOrigin(this.input.value);
        document.getElementById(origin).classList.remove('gray');
      }
    });
  }

  static validateCard(num) {
    let oddSum = 0;
    let evenSum = 0;
    const numToString = num.toString().split('');
    for (let i = 0; i < numToString.length; i += 1) {
      if (i % 2 === 0) {
        if (numToString[i] * 2 >= 10) {
          evenSum += ((numToString[i] * 2) - 9);
        } else {
          evenSum += numToString[i] * 2;
        }
      } else {
        oddSum += parseInt(numToString[i], 10);
      }
    }
    return (oddSum + evenSum) % 10 === 0;
  }

  static checkCardOrigin(num) {
    switch (num.toString()[0]) {
      case '4':
        return 'visa';
      case '2':
        return 'mir';
      case '51':
      case '52':
      case '53':
      case '54':
      case '55':
        return 'mc';
      case '34':
      case '37':
        return 'ae';
      case '6':
        return 'discover';

      default:
        return null;
    }
  }
}
