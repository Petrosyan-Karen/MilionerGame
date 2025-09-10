class Question {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

 isCorrect(answer) {
    // Remove anything after the first " (" (including the space)
    let clean = answer.split(' (')[0];
    return clean === this.correctAnswer;
}
}

let questions = {
  en: [
   [ // Level 1
      new Question("What color is the sky on a clear day?", ["Blue", "Green", "Red", "Yellow"], "Blue"),
      new Question("Which animal is known as man's best friend?", ["Cat", "Dog", "Cow", "Sheep"], "Dog"),
      new Question("How many legs does a spider have?", ["6", "8", "4", "10"], "8"),
      new Question("What is 5 + 3?", ["7", "8", "9", "6"], "8"),
    ],
    [ // Level 2
      new Question("Which planet is closest to the Sun?", ["Venus", "Mercury", "Earth", "Mars"], "Mercury"),
      new Question("What is the capital of England?", ["London", "Paris", "Rome", "Berlin"], "London"),
      new Question("Which fruit is typically yellow?", ["Apple", "Banana", "Cherry", "Grapes"], "Banana"),
      new Question("How many days are there in a leap year?", ["364", "365", "366", "367"], "366"),
    ],
    [ // Level 3
      new Question("Who wrote 'Romeo and Juliet'?", ["Shakespeare", "Hemingway", "Tolstoy", "Dickens"], "Shakespeare"),
      new Question("Which gas do plants absorb for photosynthesis?", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "Carbon Dioxide"),
      new Question("What is the boiling point of water at sea level?", ["90°C", "100°C", "110°C", "120°C"], "100°C"),
      new Question("Which is the largest planet in the Solar System?", ["Earth", "Mars", "Jupiter", "Saturn"], "Jupiter"),
    ],
   [ // Level 4
      new Question("Which ocean is the largest?", ["Atlantic", "Indian", "Arctic", "Pacific"], "Pacific"),
      new Question("What is the main ingredient in bread?", ["Rice", "Flour", "Corn", "Oats"], "Flour"),
      new Question("Who painted the Mona Lisa?", ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], "Da Vinci"),
      new Question("Which bird can fly backwards?", ["Sparrow", "Eagle", "Hummingbird", "Crow"], "Hummingbird"),
    ],
    [ // Level 5
      new Question("Which country is famous for the Great Wall?", ["India", "China", "Japan", "Korea"], "China"),
      new Question("What is the square root of 49?", ["6", "7", "8", "9"], "7"),
      new Question("Which element has the chemical symbol 'O'?", ["Gold", "Oxygen", "Osmium", "Iron"], "Oxygen"),
      new Question("Which animal lays eggs?", ["Dog", "Cat", "Chicken", "Cow"], "Chicken"),
    ],
    [ // Level 6
      new Question("Who discovered gravity?", ["Newton", "Einstein", "Galileo", "Tesla"], "Newton"),
      new Question("Which is the largest mammal?", ["Elephant", "Blue Whale", "Giraffe", "Hippo"], "Blue Whale"),
      new Question("What is the square root of 64?", ["6", "7", "8", "9"], "8"),
      new Question("Which instrument has keys, pedals, and strings?", ["Guitar", "Piano", "Drum", "Flute"], "Piano"),
    ],
    [ // Level 7
      new Question("Which planet has rings?", ["Earth", "Mars", "Saturn", "Venus"], "Saturn"),
      new Question("What is the currency of Japan?", ["Yen", "Won", "Dollar", "Euro"], "Yen"),
      new Question("Who is the author of 'Harry Potter'?", ["Rowling", "Tolkien", "Lewis", "King"], "Rowling"),
      new Question("What is the largest desert?", ["Sahara", "Gobi", "Kalahari", "Arctic"], "Sahara"),
    ],
    [ // Level 8
      new Question("What is H2O?", ["Oxygen", "Hydrogen", "Water", "Salt"], "Water"),
      new Question("Which country gifted the Statue of Liberty?", ["UK", "France", "Germany", "Italy"], "France"),
      new Question("What is the fastest land animal?", ["Lion", "Cheetah", "Horse", "Tiger"], "Cheetah"),
      new Question("Which is the longest river?", ["Amazon", "Nile", "Yangtze", "Mississippi"], "Nile"),
    ],
    [ // Level 9
      new Question("Who invented the telephone?", ["Bell", "Edison", "Tesla", "Newton"], "Bell"),
      new Question("Which is the largest planet?", ["Earth", "Mars", "Jupiter", "Saturn"], "Jupiter"),
      new Question("What is the main ingredient in bread?", ["Rice", "Flour", "Corn", "Oats"], "Flour"),
      new Question("Which country is famous for pizza?", ["France", "Italy", "Spain", "Greece"], "Italy"),
    ],
    [ // Level 10
      new Question("What is the freezing point of water?", ["0°C", "10°C", "32°C", "100°C"], "0°C"),
      new Question("Who is known as the father of computers?", ["Newton", "Babbage", "Einstein", "Turing"], "Babbage"),
      new Question("Which bird is a symbol of peace?", ["Crow", "Dove", "Eagle", "Sparrow"], "Dove"),
      new Question("What is the capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], "Canberra"),
    ],
    [ // Level 11
      new Question("Which metal is liquid at room temperature?", ["Gold", "Mercury", "Silver", "Copper"], "Mercury"),
      new Question("Who painted 'Starry Night'?", ["Monet", "Van Gogh", "Picasso", "Da Vinci"], "Van Gogh"),
      new Question("What is the largest continent?", ["Africa", "Asia", "Europe", "America"], "Asia"),
      new Question("Which is the tallest mountain?", ["K2", "Everest", "Kilimanjaro", "Elbrus"], "Everest"),
    ],
     [ // Level 12
       new Question("What is the main gas in the air?", ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"], "Nitrogen"),
      new Question("Who wrote 'Romeo and Juliet'?", ["Shakespeare", "Dickens", "Austen", "Hugo"], "Shakespeare"),
      new Question("Which is the smallest ocean?", ["Indian", "Arctic", "Atlantic", "Pacific"], "Arctic"),
      new Question("What is the capital of Egypt?", ["Cairo", "Lagos", "Nairobi", "Algiers"], "Cairo"),
    ],
    [ // Level 13
      new Question("Which is the largest island?", ["Greenland", "Australia", "Borneo", "Madagascar"], "Greenland"),
      new Question("What is the chemical symbol for iron?", ["Ir", "Fe", "In", "I"], "Fe"),
      new Question("Who is the Greek god of the sea?", ["Zeus", "Poseidon", "Hades", "Apollo"], "Poseidon"),
      new Question("What is the hardest rock?", ["Granite", "Diamond", "Marble", "Quartz"], "Diamond"),
    ],
    [ // Level 14
      new Question("Which country hosted the 2016 Summer Olympics?", ["China", "Brazil", "UK", "Russia"], "Brazil"),
      new Question("What is the largest internal organ?", ["Heart", "Liver", "Lung", "Kidney"], "Liver"),
      new Question("Who discovered penicillin?", ["Fleming", "Curie", "Pasteur", "Newton"], "Fleming"),
      new Question("What is the capital of Canada?", ["Toronto", "Vancouver", "Ottawa", "Montreal"], "Ottawa"),
    ],
    [ // Level 15
      new Question("Which element has the symbol 'O'?", ["Gold", "Oxygen", "Osmium", "Iron"], "Oxygen"),
      new Question("What is the largest bone in the human body?", ["Femur", "Tibia", "Humerus", "Skull"], "Femur"),
      new Question("Who was the first man on the moon?", ["Armstrong", "Gagarin", "Aldrin", "Collins"], "Armstrong"),
      new Question("What is the smallest country in the world?", ["Monaco", "Vatican", "Malta", "San Marino"], "Vatican"),
    ],
  ],
hy: [
     [ // Level 1
    new Question("Որ գույնն է երկինքը մաքուր օրերին?", ["Կապույտ", "Կանաչ", "Կարմիր", "Դեղին"], "Կապույտ"),
    new Question("Որ կենդանին է հայտնի որպես մարդու լավագույն ընկեր?", ["Կատու", "Շուն", "Կով", "Ոչխար"], "Շուն"),
    new Question("Քանի ոտք ունի Սարդը?", ["6", "8", "4", "10"], "8"),
    new Question("Ի՞նչ է 5 + 3?", ["7", "8", "9", "6"], "8"),
     ],
     [ // Level 2
    new Question("Որ մոլորակն է մոտ Արևին?", ["Վեներա", "Մերկուրի", "Երկիր", "Մարս"], "Մերկուրի"),
    new Question("Ի՞նչ է Անգլիայի մայրաքաղաքը?", ["Լոնդոն", "Փարիզ", "Ռոմ", "Բեռլին"], "Լոնդոն"),
    new Question("Որ պտուղը սովորաբար դեղին է?", ["Խնձոր", "Բանան", "Մալինա", "Գինին"], "Բանան"),
    new Question("Քանի օր է նահանջ տարին?", ["364", "365", "366", "367"], "366"),
    ],
    [ // Level 3
      new Question("Ով է գրել 'Ռոմեո և Ջուլիետը'?", ["Շեքսպիր", "Հեմինգուեյ", "Տոլստոյ", "Դիքենս"], "Շեքսպիր"),
    new Question("Որ գազն են բույսերը կլանում ֆոտոսինթեզի համար?", ["Թթվածին", "Ածխաթթու գազ", "Ազոտ", "Հիդրոգեն"], "Ածխաթթու գազ"),
    new Question("Որն է ջրի եռման կետը ծովի մակարդակում?", ["90°C", "100°C", "110°C", "120°C"], "100°C"),
    new Question("Որն է Արեգակնային համակարգի ամենամեծ մոլորակը?", ["Երկիր", "Մարս", "Յուպիտեր", "Սատուրն"], "Յուպիտեր"),
    ], 
    [ // Level 4
    new Question("Որ օվկիանոսն է ամենամեծը?", ["Ատլանտյան", "Հնդկական", "Արկտիկ", "Խաղաղ"], "Խաղաղ"),
    new Question("Ի՞նչն է հիմնական բաղադրիչը հաց պատրաստելիս?", ["Բրինձ", "Ալյուր", "Կարագ", "Օրգանիկ թել"], "Ալյուր"),
    new Question("Ով է նկարել Մոնա Լիզան?", ["Վան Գոգ", "Պիկասո", "Դա Վինչի", "Ռեմբրանդտ"], "Դա Վինչի"),
    new Question("Որ թռչունն է կարողանում թռչել ետդարձ?", ["Անգղ", "Ճնճղուկ", "Կոլիբրի", "Կարապ"], "Կոլիբրի"),
    ],
     [ // Level 5
    new Question("Որ երկիրը հայտնի է Մեծ պատով?", ["Հնդկաստան", "Չինաստան", "Ճապոնիա", "Կորեա"], "Չինաստան"),
    new Question("Ի՞նչ է 49-ի քառակուսի արմատը?", ["6", "7", "8", "9"], "7"),
    new Question("Որ տարրն ունի «O» քիմիական նշան?", ["Ոսկի", "Թթվածին", "Օսմիում", "Երկաթ"], "Թթվածին"),
    new Question("Որ կենդանին է դնում ձու?", ["Շուն", "Կատու", "Հավ", "Կով"], "Հավ"),
    ],
    [ // Level 6
     new Question("Ով հայտնաբերեց քաշը?", ["Նյուտոն", "Այնշտեյն", "Գալիլեյ", "Տեսլա"], "Նյուտոն"),
    new Question("Որն է ամենամեծ կաթնասունը?", ["Փիղ", "Կապույտ կետիկ", "Ճիրաֆե", "Նիապոնիկ կով"], "Կապույտ կետիկ"),
    new Question("Ի՞նչ է 64-ի քառակուսի արմատը?", ["6", "7", "8", "9"], "8"),
    new Question("Որ գործիքն ունի ստեղներ, պեդալներ և թելեր?", ["Գիթար", "Փիանինո", "Դրոմ", "Ֆլեյտ"], "Փիանինո"),
    ],
    [ // Level 7
    new Question("Որ մոլորակն ունի օղակներ?", ["Երկիր", "Մարս", "Սատուրն", "Վեներա"], "Սատուրն"),
    new Question("Ի՞նչ է Ճապոնիայի արժույթը?", ["Յեն", "Վոն", "Դոլար", "Եվրո"], "Յեն"),
    new Question("Ով է «Հարրի Փոթեր»-ի հեղինակը?", ["Ռոուլինգ", "Տոլկին", "Լյուիս", "Քինգ"], "Ռոուլինգ"),
    new Question("Որն է ամենամեծ անապատը?", ["Սահարա", "Գոբի", "Կալահարի", "Արկտիկ"], "Սահարա"),
    ],
    [ // Level 8
    new Question("Ի՞նչ է H2O?", ["Թթվածին", "Հիդրոգեն", "Ջուր", "Աղ"], "Ջուր"),
    new Question("Որ երկիրը նվիրեց Ազատության արձանը?", ["Մեծ Բրիտանիա", "Ֆրանսիա", "Գերմանիա", "Իտալիա"], "Ֆրանսիա"),
    new Question("Ո՞րն է ամենաարագ ցամաքային կենդանին", ["Առյուծ", "Հովազ", "Ձի", "Վագր"], "Հովազ"),
    new Question("Որն է ամենաերկար գետը?", ["Ամազոն", "Նիլ", "Յանգցզե", "Միսիսիպի"], "Նիլ"),
    ],
    [ // Level 9
     new Question("Ով Հեռախոսի հայտնաբերողը?", ["Բելլ", "Էդիսոն", "Տեսլա", "Նյուտոն"], "Բելլ"),
    new Question("Որն է ամենամեծ մոլորակը?", ["Երկիր", "Մարս", "Յուպիտեր", "Սատուրն"], "Յուպիտեր"),
    new Question("Ի՞նչն է հիմնական բաղադրիչը հաց պատրաստելիս?", ["Բրինձ", "Ալյուր", "Կարագ", "Օրգանիկ թել"], "Ալյուր"),
    new Question("Որ երկիրը հայտնի է պիցցայի համար?", ["Ֆրանսիա", "Իտալիա", "Իսպանիա", "Հունաստան"], "Իտալիա"),
    ],
    [ // Phase 10 (Very Hard)
     new Question("Ի՞նչ է ջրի սառեցման կետը?", ["0°C", "10°C", "32°C", "100°C"], "0°C"),
    new Question("Ով է հայտնի որպես համակարգիչների հայրը?", ["Նյուտոն", "Բաբիջ", "Այնշտեյն", "Թյուրինգ"], "Բաբիջ"),
    new Question("Որ թռչունն է խաղաղության խորհրդանիշ?", ["Արծիվ", "Աղավնի", "ճնճղուկ", "Սպարոու"], "Աղավնի"),
    new Question("Ի՞նչ է Ավստրալիայի մայրաքաղաքը?", ["Սիդնեյ", "Մելբուրն", "Կանբերա", "Պերթ"], "Կանբերա"),
    ],
    [ // level 11
    new Question("Որ մետաղը հեղուկ է սենյակային ջերմաստիճանում?", ["Ոսկի", "Սնդիկ", "արծաթ", "Պղինձ"], "Սնդիկ"),
    new Question("Ով է նկարել «Աստղային գիշերը»?", ["Մոնե", "Վան Գոգ", "Պիկասո", "Դա Վինչի"], "Վան Գոգ"),
    new Question("Որն է ամենամեծ մայրցամաքը?", ["Աֆրիկա", "Ասիա", "Եվրոպա", "Ամերիկա"], "Ասիա"),
    new Question("Որն է ամենաբարձր լեռը?", ["Կ2", "Էվերեստ", "Կանգչենջունգա", "Էլբրուս"], "Էվերեստ"),
    ],
    [ // level 12 
    new Question("Ի՞նչն է հիմնական գազը օդում?", ["Թթվածին", "Ազոտ", "Ածուխ", "Հիդրոգեն"], "Ազոտ"),
    new Question("Ով է գրել «Ռոմեո և Ջուլիետը»?", ["Շեքսպիր", "Դիքենս", "Օստին", "Հյուգո"], "Շեքսպիր"),
    new Question("Որն է ամենափոքր օվկիանոսը?", ["Հնդկական", "Սառուցյալ", "Ատլանտյան", "Խաղաղ"], "Սառուցյալ"),
    new Question("Ի՞նչ է Եգիպտոսի մայրաքաղաքը?", ["Կահիրե", "Լագոս", "Նաիրոբի", "Ալժիր"], "Կահիրե"),
  ],
    [ // level 13 
    new Question("Որն է ամենամեծ կղզին?", ["Գրինլանդիա", "Ավստրալիա", "Բորնեո", "Մադագասկար"], "Գրինլանդիա"),
    new Question("Որն է երկաթ ֆիմիական տարրի նշանը", ["Ir", "Fe", "In", "I"], "Fe"),
    new Question("Ով է ծովի հույն աստվածը?", ["Զևս", "Պոսեյդոն", "Հադես", "Ապոլոն"], "Պոսեյդոն"),
    new Question("Որն է ամենակոշտ քարե նյութը?", ["Գրանիտ", "Ալմաստ", "Մարմար", "Քվարց"], "Ալմաստ"),
  ],
    [ //Level 14
    new Question("Որ երկիրը ընդունեց 2016 թ. ամառային օլիմպիական խաղերը?", ["Չինաստան", "Բրազիլիա", "Մեծ Բրիտանիա", "Ռուսաստան"], "Բրազիլիա"),
    new Question("Ո՞րն է ամենամեծ ներքին օրգանը։", ["Սիրտ", "Լյարդ", "Թոքեր", "Երիկամներ"], "Լյարդ"),
    new Question("Ով հայտնաբերեց պենիցիլինը?", ["Ֆլեմինգ", "Քյուրի", "Պաստեր", "Նյուտոն"], "Ֆլեմինգ"),
    new Question("Որն է Կանադայի մայրաքաղաքը?", ["Թորոնտո", "Վանկուվեր", "Օտտավա", "Մոնթրեալ"], "Օտտավա"),
  ],
  [ // Level 15
   new Question("Որ տարրի նշանն է 'O'?", ["Ոսկի", "Թթվածին", "Օսմիում", "Երկաթ"], "Թթվածին"),
    new Question("Ո՞րն է մարդու մարմնի ամենամեծ ոսկորը։"["Ազդրոսկր", "Տիբիալ", "Բազդրոսկր", "Գանգ"], "Ազդրոսկր"),
    new Question("Ով է առաջին մարդը, ով ոտք դրեց լուսնին?", ["Արմսթրոնգ", "Գագարին", "Ալդրին", "Քոլինս"], "Արմսթրոնգ"),
    new Question("Որն է աշխարհի ամենափոքր երկիրը?", ["Մոնակո", "Վատիկան", "Մալթա", "Սան Մարինո"], "Վատիկան"),
  ],
  ],
  ru: [
  [//Level 1
    new Question("Какого цвета небо в ясный день?", ["Синий", "Зеленый", "Красный", "Желтый"], "Синий"),
    new Question("Какое животное известно как лучший друг человека?", ["Кошка", "Собака", "Корова", "Овца"], "Собака"),
    new Question("Сколько ног у паука?", ["6", "8", "4", "10"], "8"),
    new Question("Сколько будет 5 + 3?", ["7", "8", "9", "6"], "8"),
  ],
    [// L:evel 2
    new Question("Какая планета ближе всего к Солнцу?", ["Венера", "Меркурий", "Земля", "Марс"], "Меркурий"),
    new Question("Какова столица Англии?", ["Лондон", "Париж", "Рим", "Берлин"], "Лондон"),
    new Question("Какой фрукт обычно желтого цвета?", ["Яблоко", "Банан", "Вишня", "Виноград"], "Банан"),
    new Question("Сколько дней в високосном году?", ["364", "365", "366", "367"], "366"),
    ],
    [// Level 3
     new Question("Кто написал 'Ромео и Джульетта'?", ["Шекспир", "Хемингуэй", "Толстой", "Диккенс"], "Шекспир"),
    new Question("Какой газ поглощают растения для фотосинтеза?", ["Кислород", "Углекислый газ", "Азот", "Водород"], "Углекислый газ"),
    new Question("Какая температура кипения воды на уровне моря?", ["90°C", "100°C", "110°C", "120°C"], "100°C"),
    new Question("Какая самая большая планета в Солнечной системе?", ["Земля", "Марс", "Юпитер", "Сатурн"], "Юпитер"),
  ],
    [// Level 4
    new Question("Какой океан самый большой?", ["Атлантический", "Индийский", "Арктический", "Тихий"], "Тихий"),
    new Question("Какой основной ингредиент хлеба?", ["Рис", "Мука", "Кукуруза", "Овес"], "Мука"),
    new Question("Кто нарисовал Мону Лизу?", ["Ван Гог", "Пикассо", "Да Винчи", "Рембрандт"], "Да Винчи"),
    new Question("Какая птица умеет летать назад?", ["Воробей", "Орел", "Колибри", "Ворона"], "Колибри"),
  ],
    [// Level 5
    new Question("Какая страна известна Великой Китайской стеной?", ["Индия", "Китай", "Япония", "Корея"], "Китай"),
    new Question("Какой корень числа 49?", ["6", "7", "8", "9"], "7"),
    new Question("Какой элемент имеет химический символ 'O'?", ["Золото", "Кислород", "Осмий", "Железо"], "Кислород"),
    new Question("Какое животное откладывает яйца?", ["Собака", "Кошка", "Курица", "Корова"], "Курица"),
  ],
    [// Level 6
    new Question("Кто открыл закон тяготения?", ["Ньютон", "Эйнштейн", "Галилей", "Тесла"], "Ньютон"),
    new Question("Какой самый большой млекопитающий?", ["Слон", "Голубой кит", "Жираф", "Бегемот"], "Голубой кит"),
    new Question("Какой корень числа 64?", ["6", "7", "8", "9"], "8"),
    new Question("Какой инструмент имеет клавиши, педали и струны?", ["Гитара", "Пианино", "Барабан", "Флейта"], "Пианино"),
  ],
    [// Level 7
    new Question("Какая планета имеет кольца?", ["Земля", "Марс", "Сатурн", "Венера"], "Сатурн"),
    new Question("Какая валюта Японии?", ["Йена", "Вон", "Доллар", "Евро"], "Йена"),
    new Question("Кто автор 'Гарри Поттера'?", ["Роулинг", "Толкин", "Льюис", "Кинг"], "Роулинг"),
    new Question("Какая самая большая пустыня?", ["Сахара", "Гоби", "Калахари", "Арктика"], "Сахара"),
  ],
    [// Level 8
    new Question("Что такое H2O?", ["Кислород", "Водород", "Вода", "Соль"], "Вода"),
    new Question("Какая страна подарила Статую Свободы?", ["Великобритания", "Франция", "Германия", "Италия"], "Франция"),
    new Question("Какое самое быстрое наземное животное?", ["Лев", "Гепард", "Лошадь", "Тигр"], "Гепард"),
    new Question("Какая самая длинная река?", ["Амазонка", "Нил", "Янцзы", "Миссисипи"], "Нил"),
  ],
    [// Level 9
   new Question("Кто изобрел телефон?", ["Белл", "Эдисон", "Тесла", "Ньютон"], "Белл"),
    new Question("Какая самая большая планета?", ["Земля", "Марс", "Юпитер", "Сатурн"], "Юпитер"),
    new Question("Какой основной ингредиент хлеба?", ["Рис", "Мука", "Кукуруза", "Овес"], "Мука"),
    new Question("Какая страна известна пиццей?", ["Франция", "Италия", "Испания", "Греция"], "Италия"),
  ],
    [// Level 10
    new Question("Какая температура замерзания воды?", ["0°C", "10°C", "32°C", "100°C"], "0°C"),
    new Question("Кто считается отцом компьютеров?", ["Ньютон", "Бэббидж", "Эйнштейн", "Тьюринг"], "Бэббидж"),
    new Question("Какая птица символ мира?", ["Ворон", "Голубь", "Орел", "Воробей"], "Голубь"),
    new Question("Какова столица Австралии?", ["Сидней", "Мельбурн", "Канберра", "Перт"], "Канберра"),
  ],
    [// Level 11 
    new Question("Какой металл жидкий при комнатной температуре?", ["Золото", "Ртуть", "Серебро", "Медь"], "Ртуть"),
    new Question("Кто нарисовал 'Звездную ночь'?", ["Моне", "Ван Гог", "Пикассо", "Да Винчи"], "Ван Гог"),
    new Question("Какой самый большой континент?", ["Африка", "Азия", "Европа", "Америка"], "Азия"),
    new Question("Какая самая высокая гора?", ["К2", "Эверест", "Килиманджаро", "Эльбрус"], "Эверест"),
  ],
    [// Level 12 
    new Question("Какой основной газ в воздухе?", ["Кислород", "Азот", "Углерод", "Водород"], "Азот"),
    new Question("Кто написал 'Ромео и Джульетта'?", ["Шекспир", "Диккенс", "Остин", "Гюго"], "Шекспир"),
    new Question("Какой самый маленький океан?", ["Индийский", "Арктический", "Атлантический", "Тихий"], "Арктический"),
    new Question("Какова столица Египта?", ["Каир", "Лагос", "Найроби", "Алжир"], "Каир"),
  ],
    [// Level 13 
    new Question("Какой самый большой остров?", ["Гренландия", "Австралия", "Борнео", "Мадагаскар"], "Гренландия"),
    new Question("Какой элемент имеет химический символ Fe?", ["Ir", "Fe", "In", "I"], "Fe"),
    new Question("Кто греческий бог моря?", ["Зевс", "Посейдон", "Аид", "Аполлон"], "Посейдон"),
    new Question("Какой самый твердый камень?", ["Гранит", "Алмаз", "Мрамор", "Кварц"], "Алмаз"),
  ],
    [// Level 14
   new Question("Какая страна проводила летние Олимпийские игры 2016 года?", ["Китай", "Бразилия", "Великобритания", "Россия"], "Бразилия"),
    new Question("Какой самый большой внутренний орган?", ["Сердце", "Печень", "Легкие", "Почки"], "Печень"),
    new Question("Кто открыл пенициллин?", ["Флеминг", "Кюри", "Пастер", "Ньютон"], "Флеминг"),
    new Question("Какова столица Канады?", ["Торонто", "Ванкувер", "Оттава", "Монреаль"], "Оттава"),
  ],
  [// Level 15
    new Question("Какой элемент имеет символ 'O'?", ["Золото", "Кислород", "Осмий", "Железо"], "Кислород"),
    new Question("Какая самая большая кость в человеческом теле?", ["Бедренная", "Большеберцовая", "Плечевая", "Череп"], "Бедренная"),
    new Question("Кто первый человек на Луне?", ["Армстронг", "Гагарин", "Олдрин", "Коллинз"], "Армстронг"),
    new Question("Какая самая маленькая страна в мире?", ["Монако", "Ватикан", "Мальта", "Сан-Марино"], "Ватикан"),
  ]
  ]
};


const uiText = {
  en: {
    call: "I think",
    congrats: "Congratulations! You've answered all questions!",
    wrong: "Wrong answer! Game over.",
    won: "You won: "
  },
  ru: {
    call: "Я думаю",
    congrats: "Поздравляем! Вы ответили на все вопросы!",
    wrong: "Неправильный ответ! Игра окончена.",
    won: "Вы выиграли: "
  },
  hy: {
    call: "Ես կարծում եմ",
    congrats: "Շնորհավորում ենք! Դուք պատասխանել եք բոլոր հարցերին։",
    wrong: "Սխալ պատասխան։ Խաղն ավարտված է։",
    won: "Դուք շահեցիք՝ "
  }
};