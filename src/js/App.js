export default class App {
  static init() {
    App.addListeners();
  }

  static addListeners() {
    this.input = document.getElementById('card-input');
    this.button = document.getElementById('validate');
    this.cardIcons = document.getElementById('card-icons');

    this.button.addEventListener('click', () => {
      if (this.input.value !== '' && App.validateCard(this.input.value)) {
        const origin = this.checkCardOrigin(this.input.value);
        if (origin) {
          this.grayOut();
          document.getElementById(origin).classList.remove('gray');
        }
        this.input.value = '';
      }
    });
  }

  static validateCard(num) {
    const string = num.toString().split('');
    const last = string[string.length - 1];
    string.splice(string.length - 1, 1);
    let sum = 0;
    for (let i = string.length - 1; i >= 0; i -= 1) {
      if (i % 2 === 0) {
        string[i] *= 2;
        if (string[i] > 9) string[i] -= 9;
      }
      sum += +string[i];
    }
    return (sum + +last) % 10 === 0;
  }

  static checkCardOrigin(num) {
    const string = num.toString();
    if (string.startsWith('4')) {
      return 'visa';
    }

    if (string.startsWith('34') || string.startsWith('37')) {
      return 'ae';
    }

    for (let i = 622126; i <= 622925; i += 1) {
      if (string.startsWith(`${i}`)) {
        return 'discover';
      }
    }
    if (string.startsWith('6011')) {
      return 'discover';
    }
    for (let i = 644; i <= 649; i += 1) {
      if (string.startsWith(`${i}`)) {
        return 'discover';
      }
    }
    if (string.startsWith('65')) {
      return 'discover';
    }

    for (let i = 3528; i <= 3589; i += 1) {
      if (string.startsWith(`${i}`)) {
        return 'jcb';
      }
    }

    if (string.startsWith('5018')
      || string.startsWith('5020')
      || string.startsWith('5038')
      || string.startsWith('5893')
      || string.startsWith('6304')
      || string.startsWith('6759')
      || string.startsWith('6761')
      || string.startsWith('6762')
      || string.startsWith('6763')) {
      return 'maestro';
    }

    for (let i = 51; i <= 55; i += 1) {
      if (string.startsWith(`${i}`)) {
        return 'mc';
      }
    }
    for (let i = 222100; i <= 272099; i += 1) {
      if (string.startsWith(`${i}`)) {
        return 'mc';
      }
    }

    if (string.startsWith('2')) {
      return 'mir';
    }

    return null;
  }

  static grayOut() {
    const targets = [...this.cardIcons.children];
    targets.forEach((e) => {
      e.classList.add('gray');
    });
  }
}
