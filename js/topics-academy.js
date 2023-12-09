function updateRangeSpan(input) {
	const span = document.querySelector('.topics-academy__top-range-span')
	const div = document.querySelector('.topics-academy__top-range-div')
	const options = Array.from(input.list.options)
	const percent = ((input.value - input.min) / (input.max - input.min)) * 100
	span.style.width = percent + '%'
	div.innerHTML = ''
	console.log(input.value)
	options.forEach(function (option) {
		const label = option.label
		const position = (option.value / input.max) * 100

		const mark = document.createElement('div')
		mark.className = 'mark'
		mark.style.left = `calc(${position}%)` // Змінено для центрування рисочки

		const markLabel = document.createElement('div')
		markLabel.className = 'mark-label'
		markLabel.style.left = `calc(${position}% + 2px)`
		markLabel.textContent = label

		div.appendChild(mark)
		div.appendChild(markLabel)
	})
}

document.addEventListener('DOMContentLoaded', function () {
	updateRangeSpan(document.querySelector('input[type="range"]'))
})
document.addEventListener('DOMContentLoaded', function () {
	const filterContent = document.querySelector(
		'.topics-academy__wrapper.top-filter'
	)
	const filterContentTransition = document.querySelector(
		'.topics-academy__top-filter'
	)
	const filterButton = document.querySelector('.topics-academy__top-filter')
	filterButton.addEventListener('click', () => {
		filterContent.classList.toggle('db-block')
		filterContentTransition.classList.toggle('db-block')
	})
})
