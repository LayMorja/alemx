//* Валидцаия форм
import JustValidate from 'just-validate';
import { flsModules } from '../modules.js';

if (document.querySelector('.form')) {
  const validation = new JustValidate('.form');
  validation
    .addField('#full-name', [
      {
        rule: 'minLength',
        value: 2,
        // errorMessage: 'Введите не менее 2 символов',
      },
      {
        rule: 'required',
        value: true,
        // errorMessage: 'Required field!',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        value: true,
        // errorMessage: 'Required field!',
      },
    ])
    .addField('#wallet', [
      {
        rule: 'required',
        value: true,
        // errorMessage: 'Required field!',
      },
    ])
    .addField('#alemx-username', [
      {
        rule: 'required',
        value: true,
        // errorMessage: 'Required field!',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        value: true,
        // errorMessage: 'Телефон обязателен',
      },
      // {
      // 	rule: 'function',
      // 	validator: function (cur, item) {
      // 		const phone = item['.input-tel']['elem'].inputmask.unmaskedvalue();
      // 		return phone.length === 10;
      // 	},
      // 	errorMessage: 'Введите корректный телефон',
      // },
    ])
    // .addField('.input-checkbox', [
    // 	{
    // 		rule: 'required',
    // 		errorMessage: '',
    // 	},
    // ])
    .onValidate((event) => {
      if (!event.isSubmitted) return;
      Object.values(event.fields).forEach((el) => {
        el.isValid
          ? el.elem.closest('label').classList.remove('error-label')
          : el.elem.closest('label').classList.add('error-label');
      });
    })
    .onFail((f) => {
      // console.log(f);
      Object.values(f).forEach((el) => {
        el.elem.closest('label').classList.add('error-label');
      });
    })
    .onSuccess((event) => {
      const form = event.target;
      let formData = new FormData(form);
      const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
      const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'POST';
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            flsModules.popup.open('#thanks');
          }
        }
      };

      xhr.open(formMethod, formAction, true);
      xhr.send(formData);
      event.target.reset();
    });
}
