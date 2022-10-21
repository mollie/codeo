import { fileToBase64 } from "./utils";
import { Toast } from './toast';

const names = {
  'bohdan-emilio-jeremiah': 'Bohdan, Emilio & Jeremiah',
  'fiona-juleiny': 'Fiona & Juleiny',
  'nayeli-umeyme': 'Nayeli & Umeyme',
  'rahiana-youssra': 'Rahiana & Youssra',
  'cahide-sharon': 'Cahide & Sharon',
}

class PhotoUploader {
  name = null;
  input = null;
  preview = null;

  constructor() {
    this.name = this.getName();

    if (!this.name) {
      this.triggerNamePicker();
    }

    this.init();
  }

  init() {
    this.input = document.querySelector('.photo-uploader input');
    this.preview = document.querySelector('.preview');

    const form = document.querySelector('.photo-uploader form');
    const cancel = document.querySelector('.button-cancel');

    cancel.addEventListener('click', (e) => {
      e.preventDefault();

      this.clearForm();

    });

    this.input.addEventListener('change', () => {
      const reader = new FileReader();
      
      reader.addEventListener('load', (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        this.preview.appendChild(img);
        this.preview.classList.remove('is-hidden');
      });
      
      reader.readAsDataURL(this.input.files[0]);
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      form.classList.add('is-submitting');

      const file = await fileToBase64(this.input.files[0]);

      await fetch(`https://xenn.at/codeo/images/${this.name}`, {
        method: 'POST',
        body: JSON.stringify({
          image: file
        }),
      }).then(res => res.json());

      new Toast({
        message: 'Je foto is geupload',
        type: 'success'
      });

      form.classList.remove('is-submitting');
      this.clearForm();
    });
  }

  triggerNamePicker() {
    document.querySelector('.photo-uploader').classList.add('is-hidden');

    let namePicker = document.querySelector('.name-picker');

    namePicker.classList.remove('is-hidden');

    namePicker.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
  
      let name = document.querySelector('.name-picker select');
  
      this.setName(name.value);
    });
  }

  hideNamePicker() {
    document.querySelector('.name-picker').classList.add('is-hidden');
    document.querySelector('.photo-uploader').classList.remove('is-hidden');
  }

  clearForm() {
    this.input.value = null;

    this.preview.innerHTML = '';
    this.preview.classList.add('is-hidden');
  }

  getName() {
    return localStorage.getItem('name');
  }

  setName(name) {
    localStorage.setItem('name', name);

    console.log(`Set name to ${name}`);

    this.hideNamePicker();
  }

}

new PhotoUploader();