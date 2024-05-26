// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import LocomotiveScroll from 'locomotive-scroll';

import i18next from 'i18next';
import enTranslations from './../../files/lang/en.json';
import uaTranslations from './../../files/lang/ua.json';
//========================================================================================================================================================

// Функция для сохранения выбранного языка в localStorage
function saveUserLanguage(language) {
	localStorage.setItem('userLanguage', language);
 }
 
 // Функция для получения выбранного языка из localStorage
 function getUserLanguage() {
	return localStorage.getItem('userLanguage');
 }
 
 // Определение языка браузера пользователя
 const userLanguage = navigator.language || navigator.userLanguage;
 
 // Определение языка по умолчанию (например, английский)
 const defaultLanguage = 'en-US';
 
 // Функция для проверки доступности переводов для языка
 function isLanguageAvailable(language) {
	return language === 'en-US' || language === 'uk'; // Добавьте другие языки при необходимости
 }
 
 // Получаем выбранный язык из localStorage
 const savedLanguage = getUserLanguage();
 
 // Определение языка для использования
 const languageToUse = isLanguageAvailable(savedLanguage) ? savedLanguage : isLanguageAvailable(userLanguage) ? userLanguage : defaultLanguage;
 
 // Инициализация i18next
 i18next.init({
	lng: languageToUse,
	resources: {
	  en: {
		 translation: enTranslations
	  },
	  uk: {
		 translation: uaTranslations
	  }
	}
 });
 
 function translateElements() {
	document.getElementById('name').textContent = i18next.t('name');
	document.getElementById('downloadBtn').textContent = i18next.t('downloadBtn');
	// document.getElementById('button').textContent = i18next.t('buttonText');
	// <h1 id="greeting" class="text"></h1>
	// <h2 id="button" class="text"></h2>
	// Устанавливаем атрибут lang на <html> элементе в соответствии с выбранным языком
	document.documentElement.lang = i18next.language;
 }
 
 // Вызов функции для перевода элементов при загрузке страницы
 translateElements();
 
 document.getElementById('uaButton').addEventListener('click', () => {
	 removeTextAnimation();
		setTimeout(() => {
		 changeLanguageAndSave('uk');
		 viewTextAnimation();
	 }, 400);
 });
 
 document.getElementById('enButton').addEventListener('click', () => {
	 removeTextAnimation();
	 setTimeout(() => {
		 changeLanguageAndSave('en-US');
		 viewTextAnimation();
  }, 400);
 });
 
 // Функция для изменения языка и сохранения его в localStorage
 function changeLanguageAndSave(language) {
	i18next.changeLanguage(language, translateElements);
	saveUserLanguage(language);
 }
 
 function translateAnimation() {
	
 }
 function removeTextAnimation(){
	 document.documentElement.classList.add('translate');

 }
 function viewTextAnimation(){
	 document.documentElement.classList.remove('translate');
 }
 
 

//========================================================================================================================================================


document.documentElement.classList.add('lock');



Pace.on('progress', function(progress) {
	
	var counterElement = document.querySelector('.loader__counter');
	if (counterElement) {
	 counterElement.textContent = Math.round(progress) + '%';
	}
 });

 Pace.on('done', function() {
	
	setTimeout(() => {
		initScroll();

	}, 300);
	setTimeout(() => {
		document.documentElement.classList.add('loaded');
	document.documentElement.classList.remove('lock');
	}, 300);
	setTimeout(() => {
		// document.querySelector('.loader').remove();
	}, 3000);
 });
 function initScroll() {
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true
  }); 
 }


console.log("\n\n%cHi! \n\n%cI'm Oleksii, a creative developer.\n\nIf you're looking for a professional to turn your ideas into visual and technical brilliance, I'm ready to take on your project. Let's make your website unique and exceptional together!\n\nThank you for your time. \n\nWarm Regards, \n%c@whoisleshalight \n\n\n", "color: #fff000; font-size:25px;", "", "font-weight: bold;")
