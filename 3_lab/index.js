
function str_del() {
    // Отримуємо виділений текст
    const selection = window.getSelection().toString();
    const str = document.getElementById("elem").textContent;
    const start = str.indexOf(selection);
    const end = start + selection.length;
    const result = str.slice(0, start) + str.slice(end);
    document.getElementById("elem").textContent = result;
}

function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj[key] = true;
    return obj[key];
}


function removeProperty(obj, key) {
    delete obj[key];
}


function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}


function getLengthOfWord(word) {
    return word.length;
}

function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}


function isGreaterThan(num1, num2) {
    return num2 > num1;
}


function isEven(num) {
    return num % 2 === 0;
}

function isSameLength(word1, word2) {
    return word1.length === word2.length;
}


function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}

function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}

console.log(getProperty({name: "Joe"}, "name"));
console.log(addProperty({}, "active"));
console.log(getFullName("Юра", "Павлюк"));
console.log(isEvenAndGreaterThanTen(14));
console.log(computeAreaOfATriangle(10, 5));


