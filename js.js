const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const perimeterOutput = document.getElementById('perimeter');
const areaOutput = document.getElementById('area');
const diagonalOutput = document.getElementById('diagonal');

// Функція для розрахунку прямокутника
function calculateRectangle() {
    // Отримуємо значення з текстових полів і перетворюємо їх на числа
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    // Перевірка на валідацію
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Будь ласка, введіть коректні числа для довжини та ширини.");
        return;
    }

    // Розрахунок периметру, площі та діагоналі
    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    // Оновлюємо відповідні написи
    perimeterOutput.textContent = perimeter.toFixed(2);
    areaOutput.textContent = area.toFixed(2);
    diagonalOutput.textContent = diagonal.toFixed(2);
}

// Додаємо обробник події для полів введення
lengthInput.addEventListener('input', calculateRectangle);
widthInput.addEventListener('input', calculateRectangle);




const user1Input = document.getElementById('user1-input');
const user2Input = document.getElementById('user2-input');
const chatMessages = document.getElementById('chat-messages');

// Обробники подій для надсилання повідомлень користувачів
user1Input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage(user1Input.value, 'Користувач 1');
        user1Input.value = '';
    }
});

user2Input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage(user2Input.value, 'Користувач 2');
        user2Input.value = '';
    }
});

function sendMessage(messageText, user) {
    if (messageText.trim() === '') {
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.textContent = `${user}: ${messageText}`;
    chatMessages.appendChild(messageElement);
}


////////TRANSLITERATION
const ukrainianText = document.getElementById('ukrainian-text');
const latinText = document.getElementById('latin-text');

ukrainianText.addEventListener('input', transliterate);

function transliterate() {
    const text = ukrainianText.value;
    const transliteratedText = transliterateText(text);
    latinText.value = transliteratedText;
}

function transliterateText(text) {
    const transliterationTable = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
        'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
        'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E',
        'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'Yi', 'Й': 'Y',
        'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
        'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '', 'Ю': 'Yu', 'Я': 'Ya',
        ' ': ' '
    };

    return text.replace(/[а-яґєіїА-ЯҐЄІЇ ]/g, match => transliterationTable[match]);
}




const birthDateInput = document.getElementById('birth-date');
const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('result');

calculateButton.addEventListener('click', calculateDayOfWeek);

function calculateDayOfWeek() {
    const birthDate = new Date(birthDateInput.value);
    if (isNaN(birthDate)) {
        result.textContent = "Введіть коректну дату народження.";
        return;
    }

    const dayOfWeek = getDayOfWeek(birthDate);
    result.textContent = `Ви народились в ${getDayName(dayOfWeek)}.`;
}

function getDayOfWeek(date) {
    const daysOfWeek = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    return daysOfWeek[date.getUTCDay()];
}

function getDayName(dayOfWeek) {
    return dayOfWeek;
}

