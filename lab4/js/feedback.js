class Feedback {
  constructor(name, email, consent) {
    this.name = name;
    this.email = email;
    this.consent = consent;
  }

  print() {
    console.group('Обращение в кофейню «Тёплый угол»');
    console.log(`Имя: ${this.name}`);
    console.log(`Электронная почта: ${this.email}`);
    console.log(`Согласие на обработку данных: ${this.consent ? 'да' : 'нет'}`);
    console.groupEnd();
  }
}

const form = document.querySelector('#feedback-form');
const status = document.querySelector('#feedback-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const feedback = new Feedback(
    form.elements.name.value.trim(),
    form.elements.email.value.trim(),
    form.elements.consent.checked
  );

  feedback.print();
  status.textContent = 'Данные выведены в консоль браузера.';
});
