document.addEventListener('DOMContentLoaded', function () {
	// Отримуємо всі елементи списку
	const rightListItems = document.querySelectorAll('.academy-what__right-li')

	// Отримуємо всі блоки, які вам потрібно відслідковувати при скролі
	const sections = document.querySelectorAll('.academy-what__block')

	// Функція для визначення, який блок є активним при скролі
	function getActiveSection() {
		for (let i = sections.length - 1; i >= 0; i--) {
			const rect = sections[i].getBoundingClientRect()
			if (rect.top >= 0 && rect.top <= window.innerHeight) {
				return sections[i].id
			}
		}
		return null
	}

	// Функція для оновлення класів елементів списку
	function updateActiveLink() {
		const activeSectionId = getActiveSection()
		rightListItems.forEach(item => {
			const linkId = item.querySelector('a').getAttribute('href').substring(1)
			if (linkId === activeSectionId) {
				item.classList.add('active')
			} else {
				item.classList.remove('active')
			}
		})
	}

	// Додаємо обробник подій scroll
	window.addEventListener('scroll', updateActiveLink)

	// Викликаємо функцію один раз при завантаженні сторінки для встановлення початкового стану
	updateActiveLink()
})
