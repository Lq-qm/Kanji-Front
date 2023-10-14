const kanjis = [
    { kanji: "火", meaning: "Fogo" },
    { kanji: "山", meaning: "Montanha" },
    { kanji: "日", meaning: "Dia" },
    { kanji: "月", meaning: "Mês" },
    { kanji: "水", meaning: "Água" },
    { kanji: "風", meaning: "Vento" },
    { kanji: "空", meaning: "Vazio" },
    { kanji: "大", meaning: "Grande" },
    { kanji: "小", meaning: "Pequeno" },
    { kanji: "中", meaning: "Meio" },
    { kanji: "上", meaning: "Acima" },
    { kanji: "下", meaning: "Abaixo" },
    { kanji: "左", meaning: "Esquerda" },
    { kanji: "右", meaning: "Direita" },
    { kanji: "男", meaning: "Homem" },
    { kanji: "女", meaning: "Mulher" },
    { kanji: "木", meaning: "Árvore" },
    { kanji: "金", meaning: "Ouro" },
    { kanji: "魚", meaning: "Peixe" },
    { kanji: "車", meaning: "Carro" },
    { kanji: "雨", meaning: "Chuva" },
    { kanji: "電", meaning: "Eletricidade" },
    { kanji: "手", meaning: "Mão" },
    { kanji: "目", meaning: "Olho" },
    { kanji: "口", meaning: "Boca" },
    { kanji: "耳", meaning: "Orelha" },
    { kanji: "花", meaning: "Flor" },
    { kanji: "犬", meaning: "Cachorro" },
    { kanji: "水", meaning: "Água" },
    { kanji: "土", meaning: "Terra" },
    { kanji: "鳥", meaning: "Pássaro" },
    { kanji: "虫", meaning: "Inseto" },
    { kanji: "猫", meaning: "Gato" },
];

let currentKanjiIndex = 0;

function displayKanji() {
    const kanjiDisplay = document.getElementById("kanjiDisplay");
    kanjiDisplay.innerText = kanjis[currentKanjiIndex].kanji;
}

function displayOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    const shuffledOptions = [...kanjis];
    shuffledOptions.splice(currentKanjiIndex, 1);
    shuffledOptions.sort(() => Math.random() - 0.5);
    shuffledOptions.length = 3;
    shuffledOptions.push(kanjis[currentKanjiIndex]);

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
