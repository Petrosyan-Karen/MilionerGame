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
   [ // --- Phase 1 ---
    new Question("What is the chemical symbol for water?", ["H2O", "O2", "CO2", "NaCl"], "H2O"),
    new Question("Which continent is Egypt located in?", ["Asia", "Africa", "Europe", "South America"], "Africa"),
    new Question("What is the capital of Canada?", ["Toronto", "Vancouver", "Ottawa", "Montreal"], "Ottawa"),
    new Question("How many sides does a hexagon have?", ["5", "6", "7", "8"], "6"),
    ],
    [ // --- Phase 2 ---
    new Question("Which is the largest planet in our solar system?", ["Mars", "Earth", "Jupiter", "Saturn"], "Jupiter"),
    new Question("In which country is the city of Kyoto located?", ["China", "South Korea", "Japan", "Thailand"], "Japan"),
    new Question("Who wrote 'The Odyssey'?", ["Homer", "Virgil", "Sophocles", "Plato"], "Homer"),
    new Question("Which element has the symbol 'Fe'?", ["Iron", "Gold", "Silver", "Fluorine"], "Iron"),
    ], 
    [ // --- Phase 3 ---
    new Question("Which scientist proposed the three laws of motion?", ["Einstein", "Newton", "Kepler", "Galileo"], "Newton"),
    new Question("What is the capital of Argentina?", ["Buenos Aires", "Santiago", "Lima", "Bogota"], "Buenos Aires"),
    new Question("In which year did World War II end?", ["1940", "1942", "1945", "1948"], "1945"),
    new Question("Which organ in the human body produces insulin?", ["Liver", "Pancreas", "Kidney", "Stomach"], "Pancreas"),
    ],
    [ // --- Phase 4 ---
    new Question("Which desert is the largest in the world?", ["Sahara", "Gobi", "Kalahari", "Antarctic"], "Antarctic"),
    new Question("Who painted 'The Last Supper'?", ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], "Leonardo da Vinci"),
    new Question("Which language has the most native speakers?", ["English", "Mandarin Chinese", "Spanish", "Hindi"], "Mandarin Chinese"),
    new Question("What is the currency of Switzerland?", ["Euro", "Franc", "Pound", "Dollar"], "Franc"),
    ],
    [ // --- Phase 5 ---
    new Question("Which planet has the fastest rotation?", ["Jupiter", "Earth", "Neptune", "Mars"], "Jupiter"),
    new Question("Who discovered radioactivity?", ["Curie", "Rutherford", "Becquerel", "Fermi"], "Becquerel"),
    new Question("What is the smallest prime number?", ["0", "1", "2", "3"], "2"),
    new Question("Which is the longest river in the world?", ["Amazon", "Nile", "Yangtze", "Mississippi"], "Nile"),
    ],
    [  // --- Phase 6 ---
    new Question("Which scientist developed the theory of general relativity?", ["Newton", "Einstein", "Bohr", "Tesla"], "Einstein"),
    new Question("What is the smallest country in the world?", ["Monaco", "Vatican City", "Malta", "San Marino"], "Vatican City"),
    new Question("In which year did man first land on the Moon?", ["1965", "1969", "1972", "1975"], "1969"),
    new Question("Which blood type is considered universal donor?", ["A", "B", "AB", "O"], "O"),
    ],
    [ // --- Phase 7 ---
    new Question("Who painted the ceiling of the Sistine Chapel?", ["Raphael", "Michelangelo", "Da Vinci", "Donatello"], "Michelangelo"),
    new Question("Which is the longest mountain range in the world?", ["Andes", "Himalayas", "Rockies", "Alps"], "Andes"),
    new Question("What is the capital of South Korea?", ["Seoul", "Busan", "Tokyo", "Beijing"], "Seoul"),
    new Question("Which gas makes up most of Earth’s atmosphere?", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "Nitrogen"),
    ],
    [  // --- Phase 8 ---
    new Question("Which ancient civilization built Machu Picchu?", ["Maya", "Inca", "Aztec", "Olmec"], "Inca"),
    new Question("Who discovered penicillin?", ["Fleming", "Curie", "Pasteur", "Lavoisier"], "Fleming"),
    new Question("Which city is known as the 'City of Canals'?", ["Venice", "Amsterdam", "Bangkok", "Bruges"], "Venice"),
    new Question("What is the capital of Kazakhstan?", ["Astana", "Almaty", "Tashkent", "Bishkek"], "Astana"),
    ],
    [  // --- Phase 9 ---
    new Question("What is the largest internal organ in the human body?", ["Heart", "Liver", "Lung", "Kidney"], "Liver"),
    new Question("Which continent has the most countries?", ["Asia", "Africa", "Europe", "South America"], "Africa"),
    new Question("Who was the first female Prime Minister of the UK?", ["Thatcher", "Merkel", "Gandhi", "May"], "Thatcher"),
    new Question("Which is the longest bone in the human body?", ["Femur", "Tibia", "Spine", "Humerus"], "Femur"),
    ],
    [     // --- Phase 10 ---
    new Question("Which scientist is known as the father of modern chemistry?", ["Lavoisier", "Dalton", "Mendeleev", "Boyle"], "Lavoisier"),
    new Question("Which sea separates Europe and Africa?", ["Mediterranean", "Black Sea", "Red Sea", "Caspian"], "Mediterranean"),
    new Question("What is the hardest natural substance?", ["Gold", "Diamond", "Quartz", "Iron"], "Diamond"),
    new Question("Which novel begins with the line 'Call me Ishmael'?", ["Moby-Dick", "Hamlet", "The Odyssey", "The Iliad"], "Moby-Dick"),
    ],
    [  // --- Phase 11 ---
    new Question("Who was the first person to circumnavigate the globe?", ["Columbus", "Magellan", "Cook", "Marco Polo"], "Magellan"),
    new Question("What is the SI unit of electric current?", ["Volt", "Ampere", "Ohm", "Watt"], "Ampere"),
    new Question("Which Shakespeare play features the characters Rosencrantz and Guildenstern?", ["Hamlet", "Macbeth", "Othello", "King Lear"], "Hamlet"),
    new Question("Which is the deepest ocean trench on Earth?", ["Puerto Rico Trench", "Tonga Trench", "Mariana Trench", "Java Trench"], "Mariana Trench"),

    ],
    [  // --- Phase 12 ---
    new Question("Which scientist created the periodic table?", ["Lavoisier", "Dalton", "Mendeleev", "Curie"], "Mendeleev"),
    new Question("Which country has the most time zones?", ["Russia", "USA", "France", "China"], "France"),
    new Question("In which year did World War I begin?", ["1912", "1914", "1916", "1918"], "1914"),
    new Question("Which African country was formerly called Abyssinia?", ["Ethiopia", "Sudan", "Somalia", "Eritrea"], "Ethiopia"),

    ],
    [ 
    // --- Phase 13 ---
    new Question("Which planet has the largest number of moons?", ["Mars", "Jupiter", "Saturn", "Neptune"], "Saturn"),
    new Question("Who is the author of 'The Divine Comedy'?", ["Dante", "Homer", "Virgil", "Chaucer"], "Dante"),
    new Question("Which is the fastest land animal?", ["Cheetah", "Horse", "Leopard", "Lion"], "Cheetah"),
    new Question("Which metal has the chemical symbol 'Hg'?", ["Gold", "Silver", "Mercury", "Lead"], "Mercury"),

    ],
    [  // --- Phase 14 ---
    new Question("Which city hosted the first modern Olympic Games in 1896?", ["Paris", "Athens", "Rome", "London"], "Athens"),
    new Question("Which is the longest river in the world?", ["Amazon", "Nile", "Yangtze", "Mississippi"], "Nile"),
    new Question("Who was the first President of the United States?", ["Lincoln", "Jefferson", "Washington", "Adams"], "Washington"),
    new Question("Which is the largest desert on Earth?", ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"], "Antarctic Desert"),

    ],
    [   // --- Phase 15 ---
    new Question("Which ancient library was located in Egypt?", ["Pergamon", "Alexandria", "Nineveh", "Carthage"], "Alexandria"),
    new Question("Who developed the heliocentric model of the solar system?", ["Galileo", "Kepler", "Copernicus", "Aristotle"], "Copernicus"),
    new Question("Which is the only mammal capable of true flight?", ["Bat", "Flying Squirrel", "Colugo", "Gliding Possum"], "Bat"),
    new Question("Which is the chemical formula of table salt?", ["NaCl", "KCl", "Na2CO3", "CaCl2"], "NaCl"),
    ],
  ],

  hy: [
   [ // --- Փուլ 1 ---
    new Question("Ո՞րն է ջրի քիմիական նշանը?", ["H2O", "O2", "CO2", "NaCl"], "H2O"),
    new Question("Ի՞նչ մայրցամաքում է գտնվում Եգիպտոսը?", ["Ասիա", "Աֆրիկա", "Եվրոպա", "Հարավային Ամերիկա"], "Աֆրիկա"),
    new Question("Ո՞րն է Կանադայի մայրաքաղաքը?", ["Տորոնտո", "Վանկուվեր", "Օտտավա", "Մոնրեալ"], "Օտտավա"),
    new Question("Քանի՞ կողմ ունի վեցանկյունը?", ["5", "6", "7", "8"], "6"),
    ],
   [ // --- Փուլ 2 ---
    new Question("Ո՞րն է Արեգակնային համակարգի ամենամեծ մոլորակը?", ["Մարս", "Երկիր", "Յուպիտեր", "Սատուրն"], "Յուպիտեր"),
    new Question("Ո՞ր երկրում է գտնվում Կիոտո քաղաքը?", ["Չինաստան", "Հարավային Կորեա", "Ճապոնիա", "Թաիլանդ"], "Ճապոնիա"),
    new Question("Ո՞վ է գրել «Ոդիսականը»?", ["Հոմերոս", "Վերգիլիոս", "Սոֆոկլես", "Պլատոն"], "Հոմերոս"),
    new Question("Ո՞ր քիմիական տարրի նշանն է 'Fe'?", ["Երկաթ", "Ոսկի", "Արծաթ", "Ֆտոր"], "Երկաթ"),
    ],
   [ // --- Փուլ 3 ---
    new Question("Ո՞ր գիտնականն է ձևակերպել շարժման երեք օրենքները?", ["Այնշտայն", "Նյուտոն", "Կեպլեր", "Գալիլեյ"], "Նյուտոն"),
    new Question("Ո՞րն է Արգենտինայի մայրաքաղաքը?", ["Բուենոս Այրես", "Սանտյագո", "Լիմա", "Բոգոտա"], "Բուենոս Այրես"),
    new Question("Ո՞ր թվականին ավարտվեց Երկրորդ համաշխարհային պատերազմը?", ["1940", "1942", "1945", "1948"], "1945"),
    new Question("Ո՞ր օրգանն է արտադրում ինսուլին?", ["Լյարդ", "Ենթաստամոքսային գեղձ", "Երիկամ", "Ստամոքս"], "Ենթաստամոքսային գեղձ"),
    ],
   [ // --- Փուլ 4 ---
    new Question("Ո՞րն է աշխարհի ամենամեծ անապատը?", ["Սահարա", "Գոբի", "Կալահարի", "Անտարկտիդա"], "Անտարկտիդա"),
    new Question("Ո՞վ է նկարել «Վերջին ընթրիք»-ը?", ["Միքելանջելո", "Լեոնարդո դա Վինչի", "Ռաֆայել", "Դոնատելլո"], "Լեոնարդո դա Վինչի"),
    new Question("Ո՞ր լեզուն ունի ամենաշատ մայրենի խոսողներ?", ["Անգլերեն", "Չինարեն (մանդարին)", "Իսպաներեն", "Հինդի"], "Չինարեն (մանդարին)"),
    new Question("Ո՞րն է Շվեյցարիայի արժույթը?", ["Եվրո", "Ֆրանկ", "Ֆունտ", "Դոլար"], "Ֆրանկ"),
    ],
    [// --- Փուլ 5 ---
    new Question("Ո՞ր մոլորակն ունի ամենաարագ պտույտը?", ["Յուպիտեր", "Երկիր", "Նեպտուն", "Մարս"], "Յուպիտեր"),
    new Question("Ո՞վ է բացահայտել ռադիոակտիվությունը?", ["Կյուրի", "Ռադերֆորդ", "Բեկկերել", "Ֆերմի"], "Բեկկերել"),
    new Question("Ո՞րն է ամենափոքր պարզ թիվը?", ["0", "1", "2", "3"], "2"),
    new Question("Ո՞րն է աշխարհի ամենաերկար գետը?", ["Ամազոն", "Նեղոս", "Յանցզի", "Միսիսիպի"], "Նեղոս"),
  ],

    [   // --- Փուլ 6 ---
    new Question("Ո՞ր գիտնականն է ստեղծել ընդհանուր հարաբերականության տեսությունը?", ["Նյուտոն", "Այնշտայն", "Բոր", "Տեսլա"], "Այնշտայն"),
    new Question("Ո՞րն է աշխարհի ամենափոքր երկիրը?", ["Մոնակո", "Վատիկան", "Մալթա", "Սան Մարինո"], "Վատիկան"),
    new Question("Ո՞ր թվականին առաջին անգամ մարդը իջավ Լուսնին?", ["1965", "1969", "1972", "1975"], "1969"),
    new Question("Ո՞ր արյան խումբն է համարվում ունիվերսալ դոնոր?", ["A", "B", "AB", "O"], "O"),

    ],
    [ // --- Փուլ 7 ---
    new Question("Ո՞վ է նկարել Սիքստինյան կապելլայի առաստաղը?", ["Ռաֆայել", "Միքելանջելո", "Դա Վինչի", "Դոնատելլո"], "Միքելանջելո"),
    new Question("Ո՞րն է աշխարհի ամենաերկար լեռնաշղթան?", ["Անդեր", "Հիմալայներ", "Ռոքի լեռներ", "Ալպեր"], "Անդեր"),
    new Question("Ո՞րն է Հարավային Կորեայի մայրաքաղաքը?", ["Սեուլ", "Բուսան", "Տոկիո", "Պեկին"], "Սեուլ"),
    new Question("Ո՞ր գազն է կազմում Երկրի մթնոլորտի մեծ մասը?", ["Թթվածին", "Ածխաթթու գազ", "Ազոտ", "Ջրածին"], "Ազոտ"),

    ],
    [ // --- Փուլ 8 ---
    new Question("Ո՞ր հին քաղաքակրթությունն է կառուցել Մաչու Պիկչուն?", ["Մայա", "Ինկա", "Ացտեկ", "Օլմեկ"], "Ինկա"),
    new Question("Ո՞վ է հայտնաբերել պենիցիլինը?", ["Ֆլեմինգ", "Կյուրի", "Պաստեր", "Լավուազիե"], "Ֆլեմինգ"),
    new Question("Ո՞ր քաղաքն է հայտնի որպես «Կանալների քաղաք»?", ["Վենետիկ", "Ամստերդամ", "Բանգկոկ", "Բրյուգե"], "Վենետիկ"),
    new Question("Ո՞րն է Ղազախստանի մայրաքաղաքը?", ["Աստանա", "Ալմաթի", "Տաշքենդ", "Բիշքեկ"], "Աստանա"),
    ],
    [  // --- Փուլ 9 ---
    new Question("Ո՞րն է մարդու մարմնի ամենամեծ ներքին օրգանը?", ["Սիրտ", "Լյարդ", "Թոք", "Երիկամ"], "Լյարդ"),
    new Question("Ո՞ր մայրցամաքն ունի ամենաշատ երկրներ?", ["Ասիա", "Աֆրիկա", "Եվրոպա", "Հարավային Ամերիկա"], "Աֆրիկա"),
    new Question("Ո՞վ էր Մեծ Բրիտանիայի առաջին կին վարչապետը?", ["Թետչեր", "Մերկել", "Գանդի", "Մեյ"], "Թետչեր"),
    new Question("Ո՞րն է մարդու մարմնի ամենաերկար ոսկորը?", ["Բազուկոսկր (Femur)", "Սրունքոսկր", "Ողնաշար", "Թևոսկր"], "Բազուկոսկր (Femur)"),
    ],
    [   // --- Փուլ 10 ---
    new Question("Ո՞վ է համարվում ժամանակակից քիմիայի հիմնադիր?", ["Լավուազիե", "Դալտոն", "Մենդելեև", "Բոյլ"], "Լավուազիե"),
    new Question("Ո՞ր ծովն է բաժանում Եվրոպան և Աֆրիկան?", ["Միջերկրական", "Սև ծով", "Կարմիր ծով", "Կասպից"], "Միջերկրական"),
    new Question("Ո՞րն է ամենակոշտ բնական նյութը?", ["Ոսկի", "Ադամանդ", "Քվարց", "Երկաթ"], "Ադամանդ"),
    new Question("Ո՞ր վեպն է սկսվում «Կանչեք ինձ Իսմայել» արտահայտությամբ?", ["Մոբի Դիկ", "Համլետ", "Ոդիսական", "Իլիական"], "Մոբի Դիկ"),
  ],
  [  // --- Փուլ 11 ---
    new Question("Ո՞վ էր առաջինը, որ աշխարհը շրջեց նավարկությամբ:", ["Կոլումբոս", "Մագելան", "Կուկ", "Մարկո Պոլո"], "Մագելան"),
    new Question("Ի՞նչ է էլեկտրական հոսանքի SI միավորը:", ["Վոլտ", "Ամպեր", "Օհմ", "Վատտ"], "Ամպեր"),
    new Question("Ո՞ր Շեքսպիրի պիեսում են հանդիպում Ռոզենկրանցն ու Գիլդենստերն:", ["Համլետ", "Մակբեթ", "Օթելլո", "Թագավոր Լիր"], "Համլետ"),
    new Question("Ո՞րն է Երկրի ամենախորը օվկիանոսային փոսը:", ["Պուերտո Ռիկո", "Տոնգա", "Մարիանյան", "Ջավա"], "Մարիանյան"),
  ],
    [   // --- Փուլ 12 ---
    new Question("Ո՞ր գիտնականն է կազմել քիմիական տարրերի պարբերական աղյուսակը:", ["Լավուազիե", "Դալտոն", "Մենդելեև", "Կյուրի"], "Մենդելեև"),
    new Question("Ո՞ր երկիրն ունի ամենաշատ ժամային գոտիներ:", ["Ռուսաստան", "ԱՄՆ", "Ֆրանսիա", "Չինաստան"], "Ֆրանսիա"),
    new Question("Ո՞ր թվականին սկսվեց Առաջին համաշխարհային պատերազմը:", ["1912", "1914", "1916", "1918"], "1914"),
    new Question("Ո՞ր աֆրիկյան երկիրն էր նախկինում կոչվում Աբիսինիա:", ["Եթովպիա", "Սուդան", "Սոմալի", "Էրիթրեա"], "Եթովպիա"),

    ],
    [// --- Փուլ 13 ---
    new Question("Ո՞ր մոլորակն ունի ամենաշատ спутնիկներ:", ["Մարս", "Յուպիտեր", "Սատուրն", "Նեպտուն"], "Սատուրն"),
    new Question("Ո՞վ է «Աստվածային կատակերգություն»-ի հեղինակն:", ["Դանտե", "Հոմերոս", "Վերգիլիոս", "Չոսեր"], "Դանտե"),
    new Question("Ո՞րն է ամենաարագ ցամաքային կենդանին:", ["Չիտա", "Ձի", "Փուլարդ", "Առյուծ"], "Չիտա"),
    new Question("Ո՞ր մետաղն ունի «Hg» քիմիական նշանը:", ["Ոսկի", "Արծաթ", "Սնդիկ", "Կապար"], "Սնդիկ"),
      ],
    [ // --- Փուլ 14 ---
    new Question("Ո՞ր քաղաքում անցկացվեց առաջին ժամանակակից օլիմպիական խաղերը 1896-ին:", ["Փարիզ", "Աթենք", "Հռոմ", "Լոնդոն"], "Աթենք"),
    new Question("Ո՞րն է աշխարհի ամենաերկար գետը:", ["Ամազոն", "Նեղոս", "Յանցզի", "Միսիսիպի"], "Նեղոս"),
    new Question("Ո՞վ էր ԱՄՆ-ի առաջին նախագահը:", ["Լինկոլն", "Ջեֆերսոն", "Վաշինգտոն", "Ադամս"], "Վաշինգտոն"),
    new Question("Ո՞րն է աշխարհի ամենամեծ անապատը:", ["Սահարա", "Գոբի", "Անտարկտիդայի անապատ", "Կալահարի"], "Անտարկտիդայի անապատ"),

    ],
    [ // --- Փուլ 15 ---
    new Question("Ո՞ր հին գրադարանը գտնվում էր Եգիպտոսում:", ["Պերգամոն", "Ալեքսանդրիա", "Նինվե", "Կարթագեն"], "Ալեքսանդրիա"),
    new Question("Ո՞վ է մշակել արեգակնային համակարգի հելիոցենտրիկ մոդելը:", ["Գալիլեյ", "Կեպլեր", "Կոպեռնիկոս", "Արիստոտել"], "Կոպեռնիկոս"),
    new Question("Ո՞րն է միակ կաթնասունը, որը կարող է իրական թռիչք կատարել:", ["Չղջիկ", "Թռչող սկյուռ", "Կոլուգո", "Թռչող պոսում"], "Չղջիկ"),
    new Question("Ի՞նչ է սեղանի աղի քիմիական բանաձևը:", ["NaCl", "KCl", "Na2CO3", "CaCl2"], "NaCl"),
    ],
  ],

  ru: [
    [ // --- Этап 1 ---
       new Question("Какой химический символ у воды?", ["H2O", "O2", "CO2", "NaCl"], "H2O"),
    new Question("На каком континенте находится Египет?", ["Азия", "Африка", "Европа", "Южная Америка"], "Африка"),
    new Question("Столица Канады?", ["Торонто", "Ванкувер", "Оттава", "Монреаль"], "Оттава"),
    new Question("Сколько сторон у шестиугольника?", ["5", "6", "7", "8"], "6"),
    ],
    [// --- Этап 2 ---
    new Question("Какая самая большая планета в Солнечной системе?", ["Марс", "Земля", "Юпитер", "Сатурн"], "Юпитер"),
    new Question("В какой стране находится город Киото?", ["Китай", "Южная Корея", "Япония", "Таиланд"], "Япония"),
    new Question("Кто написал «Одиссею»?", ["Гомер", "Вергилий", "Софокл", "Платон"], "Гомер"),
    new Question("Какой элемент имеет символ 'Fe'?", ["Железо", "Золото", "Серебро", "Фтор"], "Железо"),
    ],
    [// --- Этап 3 ---
    new Question("Какой ученый сформулировал три закона движения?", ["Эйнштейн", "Ньютон", "Кеплер", "Галилей"], "Ньютон"),
    new Question("Столица Аргентины?", ["Буэнос-Айрес", "Сантьяго", "Лима", "Богота"], "Буэнос-Айрес"),
    new Question("В каком году закончилась Вторая мировая война?", ["1940", "1942", "1945", "1948"], "1945"),
    new Question("Какой орган человека вырабатывает инсулин?", ["Печень", "Поджелудочная железа", "Почка", "Желудок"], "Поджелудочная железа"),
    ],
   [  // --- Этап 4 ---
    new Question("Какая самая большая пустыня в мире?", ["Сахара", "Гоби", "Калахари", "Антарктическая"], "Антарктическая"),
    new Question("Кто написал «Тайную вечерю»?", ["Микеланджело", "Леонардо да Винчи", "Рафаэль", "Донателло"], "Леонардо да Винчи"),
    new Question("На каком языке больше всего носителей?", ["Английский", "Китайский (мандарин)", "Испанский", "Хинди"], "Китайский (мандарин)"),
    new Question("Какая валюта в Швейцарии?", ["Евро", "Франк", "Фунт", "Доллар"], "Франк"),
  ],
    [ // --- Этап 5 ---
    new Question("Какая планета вращается быстрее всех?", ["Юпитер", "Земля", "Нептун", "Марс"], "Юпитер"),
    new Question("Кто открыл радиоактивность?", ["Кюри", "Резерфорд", "Беккерель", "Ферми"], "Беккерель"),
    new Question("Какое самое маленькое простое число?", ["0", "1", "2", "3"], "2"),
    new Question("Какая самая длинная река в мире?", ["Амазонка", "Нил", "Янцзы", "Миссисипи"], "Нил"),
  ],
    [  // --- Этап 6 ---
    new Question("Какой ученый разработал теорию общей относительности?", ["Ньютон", "Эйнштейн", "Бор", "Тесла"], "Эйнштейн"),
    new Question("Какая самая маленькая страна в мире?", ["Монако", "Ватикан", "Мальта", "Сан-Марино"], "Ватикан"),
    new Question("В каком году человек впервые высадился на Луну?", ["1965", "1969", "1972", "1975"], "1969"),
    new Question("Какая группа крови считается универсальным донором?", ["A", "B", "AB", "O"], "O"),
    ],
    [  // --- Этап 7 ---
    new Question("Кто расписал потолок Сикстинской капеллы?", ["Рафаэль", "Микеланджело", "Да Винчи", "Донателло"], "Микеланджело"),
    new Question("Какая самая длинная горная цепь в мире?", ["Анд", "Гималаи", "Скалистые горы", "Альпы"], "Анд"),
    new Question("Столица Южной Кореи?", ["Сеул", "Пусан", "Токио", "Пекин"], "Сеул"),
    new Question("Какой газ составляет большую часть атмосферы Земли?", ["Кислород", "Углекислый газ", "Азот", "Водород"], "Азот"),
    ],
    [ // --- Этап 8 ---
    new Question("Какая древняя цивилизация построила Мачу-Пикчу?", ["Майя", "Инки", "Ацтеки", "Ольмеки"], "Инки"),
    new Question("Кто открыл пенициллин?", ["Флеминг", "Кюри", "Пастер", "Лавуазье"], "Флеминг"),
    new Question("Какой город известен как «город каналов»?", ["Венеция", "Амстердам", "Бангкок", "Брюгге"], "Венеция"),
    new Question("Столица Казахстана?", ["Астана", "Алматы", "Ташкент", "Бишкек"], "Астана"),

    ],
    [ // --- Этап 9 ---
    new Question("Какой самый большой внутренний орган у человека?", ["Сердце", "Печень", "Легкие", "Почка"], "Печень"),
    new Question("На каком континенте больше всего стран?", ["Азия", "Африка", "Европа", "Южная Америка"], "Африка"),
    new Question("Кто была первой женщиной премьер-министром Великобритании?", ["Тэтчер", "Меркель", "Ганди", "Мэй"], "Тэтчер"),
    new Question("Какая самая длинная кость в теле человека?", ["Бедренная", "Большеберцовая", "Позвоночник", "Плечевая"], "Бедренная"),
    ],
    [  // --- Этап 10 ---
    new Question("Кто считается отцом современной химии?", ["Лавуазье", "Дальтон", "Менделеев", "Бойль"], "Лавуазье"),
    new Question("Какое море отделяет Европу от Африки?", ["Средиземное", "Черное", "Красное", "Каспийское"], "Средиземное"),
    new Question("Какое самое твердое природное вещество?", ["Золото", "Алмаз", "Кварц", "Железо"], "Алмаз"),
    new Question("Какой роман начинается словами «Зовите меня Исмаил»?", ["Моби Дик", "Гамлет", "Одиссея", "Илиада"], "Моби Дик"),
    ],
    [   // --- Этап 11 ---
    new Question("Кто первым совершил кругосветное плавание?", ["Колумб", "Магеллан", "Кук", "Марко Поло"], "Магеллан"),
    new Question("Какова единица силы тока в системе СИ?", ["Вольт", "Ампер", "Ом", "Ватт"], "Ампер"),
    new Question("В какой пьесе Шекспира появляются Розенкранц и Гильденстерн?", ["Гамлет", "Макбет", "Отелло", "Король Лир"], "Гамлет"),
    new Question("Какая самая глубокая океаническая впадина?", ["Пуэрто-Рико", "Тонга", "Марианская", "Яванская"], "Марианская"),

    ],
    [  // --- Этап 12 ---
    new Question("Кто составил периодическую таблицу химических элементов?", ["Лавуазье", "Дальтон", "Менделеев", "Кюри"], "Менделеев"),
    new Question("Какая страна имеет больше всего часовых поясов?", ["Россия", "США", "Франция", "Китай"], "Франция"),
    new Question("В каком году началась Первая мировая война?", ["1912", "1914", "1916", "1918"], "1914"),
    new Question("Какая африканская страна раньше называлась Абиссиния?", ["Эфиопия", "Судан", "Сомали", "Эритрея"], "Эфиопия"),

    ],
    [  // --- Этап 13 ---
    new Question("Какая планета имеет больше всего спутников?", ["Марс", "Юпитер", "Сатурн", "Нептун"], "Сатурн"),
    new Question("Кто автор «Божественной комедии»?", ["Данте", "Гомер", "Вергилий", "Чосер"], "Данте"),
    new Question("Какое самое быстрое сухопутное животное?", ["Гепард", "Лошадь", "Леопард", "Лев"], "Гепард"),
    new Question("Какой металл имеет химический символ 'Hg'?", ["Золото", "Серебро", "Ртуть", "Свинец"], "Ртуть"),

    ],
    [     // --- Этап 14 ---
    new Question("Какой город принимал первые современные Олимпийские игры 1896 года?", ["Париж", "Афины", "Рим", "Лондон"], "Афины"),
    new Question("Какая самая длинная река в мире?", ["Амазонка", "Нил", "Янцзы", "Миссисипи"], "Нил"),
    new Question("Кто был первым президентом США?", ["Линкольн", "Джефферсон", "Вашингтон", "Адамс"], "Вашингтон"),
    new Question("Какая самая большая пустыня на Земле?", ["Сахара", "Гоби", "Антарктическая", "Калахари"], "Антарктическая"),

    ],
    [ // --- Этап 15 ---
    new Question("Какая древняя библиотека находилась в Египте?", ["Пергамонская", "Александрийская", "Ниневийская", "Карфагенская"], "Александрийская"),
    new Question("Кто разработал гелиоцентрическую модель Солнечной системы?", ["Галилей", "Кеплер", "Коперник", "Аристотель"], "Коперник"),
    new Question("Какое единственное млекопитающее способно к настоящему полету?", ["Летучая мышь", "Летяга", "Колуго", "Сумчатая летяга"], "Летучая мышь"),
    new Question("Какая химическая формула поваренной соли?", ["NaCl", "KCl", "Na2CO3", "CaCl2"], "NaCl"),
    ],
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