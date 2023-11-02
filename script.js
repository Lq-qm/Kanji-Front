const kanjis = [
    { kanji: "火", meaning: "Fire" },
    { kanji: "山", meaning: "Mountain" },
    { kanji: "日", meaning: "Day" },
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
    { kanji: "帽子", meaning: "Hat" },
    { kanji: "靴", meaning: "Shoes" },
    { kanji: "靴下", meaning: "Socks" },
    { kanji: "帯", meaning: "Belt" },
    { kanji: "首", meaning: "Neck" },
    { kanji: "肩", meaning: "Shoulder" },
    { kanji: "背中", meaning: "Back" },
    { kanji: "胸", meaning: "Chest" },
    { kanji: "手", meaning: "Hand" },
    { kanji: "目", meaning: "Eye" },
    { kanji: "口", meaning: "Mouth" },
    { kanji: "耳", meaning: "Ear" },
    { kanji: "腕", meaning: "Arm" },
    { kanji: "手首", meaning: "Wrist" },
    { kanji: "脚", meaning: "Leg" },
    { kanji: "ひざ", meaning: "Knee" },
    { kanji: "足首", meaning: "Ankle" },
    { kanji: "顔", meaning: "Face" },
    { kanji: "歯", meaning: "Tooth" },
    { kanji: "舌", meaning: "Tongue" },
    { kanji: "鼻", meaning: "Nose" },
    { kanji: "頭", meaning: "Head" },
    { kanji: "髪", meaning: "Hair" },
    { kanji: "額", meaning: "Forehead" },
    { kanji: "眉毛", meaning: "Eyebrow" },
    { kanji: "睫毛", meaning: "Eyelash" },
    { kanji: "顎", meaning: "Chin" },
    { kanji: "頬", meaning: "Cheek" },
    { kanji: "頸", meaning: "Neck" },
    { kanji: "肩", meaning: "Shoulder" },
    { kanji: "腕", meaning: "Arm" },
    { kanji: "肘", meaning: "Elbow" },
    { kanji: "手首", meaning: "Wrist" },
    { kanji: "手", meaning: "Hand" },
    { kanji: "指", meaning: "Finger" },
    { kanji: "爪", meaning: "Nail" },
    { kanji: "脚", meaning: "Leg" },
    { kanji: "花", meaning: "Flower" },
    { kanji: "犬", meaning: "Dog" },
    { kanji: "土", meaning: "Earth" },
    { kanji: "鳥", meaning: "Bird" },
    { kanji: "虫", meaning: "Insect" },
    { kanji: "猫", meaning: "Cat" },
    { kanji: "電話", meaning: "Telephone" },
    { kanji: "本", meaning: "Book" },	
    { kanji: "学校", meaning: "School" },
    { kanji: "青", meaning: "Blue" },
    { kanji: "赤", meaning: "Red" },
    { kanji: "白", meaning: "White" },
    { kanji: "人", meaning: "Person" },
    { kanji: "田", meaning: "Field" },
    { kanji: "川", meaning: "River" },
    { kanji: "海", meaning: "Sea" },
    { kanji: "天", meaning: "Sky" },
    { kanji: "地", meaning: "Earth" },
    { kanji: "黒", meaning: "Black" },
    { kanji: "太陽", meaning: "Sun" },
    { kanji: "月", meaning: "Moon" },
    { kanji: "天", meaning: "Heaven" },
    { kanji: "田", meaning: "Rice Field" },
    { kanji: "星", meaning: "Star" },
    { kanji: "家", meaning: "House" },
    { kanji: "雲", meaning: "Cloud" },
    { kanji: "雪", meaning: "Snow" },
    { kanji: "心", meaning: "Heart" },
    { kanji: "愛", meaning: "Love" },
    { kanji: "国", meaning: "Country" },
    { kanji: "時", meaning: "Time" },
    { kanji: "間", meaning: "Space" },
    { kanji: "物", meaning: "Thing" },
    { kanji: "船", meaning: "Ship" },
    { kanji: "歌", meaning: "Song" },
    { kanji: "鍵", meaning: "Key" },
    { kanji: "家", meaning: "House" },
    { kanji: "人生", meaning: "Life" },
    { kanji: "友達", meaning: "Friend" },
    { kanji: "家族", meaning: "Family" },
    { kanji: "仕事", meaning: "Job" },
    { kanji: "学問", meaning: "Study" },
    { kanji: "音楽", meaning: "Music" },
    { kanji: "美術", meaning: "Art" },
    { kanji: "体育", meaning: "Physical Education" },
    { kanji: "食事", meaning: "Meal" },
    { kanji: "旅行", meaning: "Travel" },
    { kanji: "映画", meaning: "Movie" },
    { kanji: "料理", meaning: "Cooking" },
    { kanji: "天気", meaning: "Weather" },
    { kanji: "動物", meaning: "Animal" },
    { kanji: "植物", meaning: "Plant" },
    { kanji: "文化", meaning: "Culture" },
    { kanji: "言葉", meaning: "Language" },
    { kanji: "物", meaning: "Thing" },
    { kanji: "問題", meaning: "Problem" },
    { kanji: "答え", meaning: "Answer" },
    { kanji: "運転", meaning: "Driving" },
    { kanji: "旅客", meaning: "Passenger" },
    { kanji: "船", meaning: "Ship" },
    { kanji: "歌", meaning: "Song" },
    { kanji: "写真", meaning: "Photograph" },
    { kanji: "本棚", meaning: "Bookshelf" }, 
    { kanji: "時計", meaning: "Clock" },
    { kanji: "鍵", meaning: "Key" },
    { kanji: "帽子", meaning: "Hat" },
    { kanji: "傘", meaning: "Umbrella" },
    { kanji: "眼鏡", meaning: "Glasses" },
    { kanji: "電車", meaning: "Train" },
];

let currentKanjiIndex = 0;

function displayKanji() {
    const kanjiDisplay = document.getElementById("kanjiDisplay");
    kanjiDisplay.innerText = kanjis[currentKanjiIndex].kanji;
}

var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 1000);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
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
        kanjiItem.classList.add("wrong");
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
