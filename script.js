const kanjis = [
    { kanji: "火", meaning: "Fire" },
    { kanji: "山", meaning: "Mountain" },
    { kanji: "日", meaning: "day" },
    { kanji: "月", meaning: "Month" },
    { kanji: "水", meaning: "Water" },
    { kanji: "風", meaning: "Wind" },
    { kanji: "空", meaning: "Void" },
    { kanji: "大", meaning: "Big" },
    { kanji: "小", meaning: "Small" },
    { kanji: "中", meaning: "Middle" },
    { kanji: "上", meaning: "Above" },
    { kanji: "下", meaning: "Below" },
    { kanji: "左", meaning: "Left" },
    { kanji: "右", meaning: "Right" },
    { kanji: "男", meaning: "Man" },
    { kanji: "女", meaning: "Women" },
    { kanji: "木", meaning: "Tree" },
    { kanji: "金", meaning: "Gold" },
    { kanji: "魚", meaning: "Fish" },
    { kanji: "車", meaning: "Car" },
    { kanji: "雨", meaning: "Rain" },
    { kanji: "電", meaning: "Electricity" },
    { kanji: "手", meaning: "Hand" },
    { kanji: "目", meaning: "Eye" },
    { kanji: "口", meaning: "Mouth" },
    { kanji: "耳", meaning: "Ear" },
    { kanji: "花", meaning: "Flower" },
    { kanji: "犬", meaning: "Dog" },
    { kanji: "水", meaning: "Water" },
    { kanji: "土", meaning: "Earth" },
    { kanji: "鳥", meaning: "Bird" },
    { kanji: "虫", meaning: "Insect" },
    { kanji: "猫", meaning: "Cat" },
];

let currentKanjiIndex = 0;

function displayKanji() {
    const kanjiDisplay = document.getElementById("kanjiDisplay");
    kanjiDisplay.innerText = kanjis[currentKanjiIndex].kanji;
}

function shuffleOptions() {
    const shuffledOptions = [...kanjis];
    const correctOption = shuffledOptions.splice(currentKanjiIndex, 1)[0];
    shuffledOptions.sort(() => Math.random() - 0.5);
    shuffledOptions.length = 3;
    const randomPosition = Math.floor(Math.random() * 4);
    shuffledOptions.splice(randomPosition, 0, correctOption);
    return shuffledOptions;
}

function displayOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
   
    const shuffledOptions = shuffleOptions();  

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.meaning;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(option) {
    const kanjiList = document.getElementById("kanjiList");
    const kanjiItem = kanjiList.children[currentKanjiIndex];
    const isCorrect = option.meaning === kanjis[currentKanjiIndex].meaning;

    if (isCorrect) {
        kanjiItem.classList.add("active");
    } else {
        kanjiList.children.forEach(item => item.classList.remove("active"));
    }

    currentKanjiIndex = (currentKanjiIndex + 1) % kanjis.length;
    displayKanji();
    displayOptions();
}

function createKanjiList() {
    const kanjiList = document.getElementById("kanjiList");
    kanjis.forEach((kanji, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = kanji.kanji;
        listItem.addEventListener("click", () => {
            currentKanjiIndex = index;
            displayKanji();
            displayOptions();
        });
        kanjiList.appendChild(listItem);
    });
}
createKanjiList();
displayKanji();
displayOptions();
