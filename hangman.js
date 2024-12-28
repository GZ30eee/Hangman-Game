window.onload = function() {
  //alphabet(s)
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses

  // Show the modal
  //var modal = document.getElementById("myModal");
  //modal.style.display = "block";
  
  
  // Get elements
  var showLives = document.getElementById("mylives");
  var showClue = document.getElementById("clue");

  // create alphabet list
  var buttons = function () {
    buttons = document.getElementById('buttons');//gets the aploh. buttons
    letters = document.createElement('ul');//creates a list

    for (var i = 0; i < alphabet.length; i++)
    {
      letters.id = 'alphabet';
      list = document.createElement('li');//creates a list
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      buttons.appendChild(letters);
      letters.appendChild(list);
      check();
    }
  }


  // Select Catagory
  var selectCat = function()
  {
  if(chosenCategory === categories[0]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>FOOTBALL TEAMS</span>";
  }
  else if(chosenCategory === categories[1]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>HOLLYWOOD</span>";
  }
  else if(chosenCategory === categories[2]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>CITIES</span>";
    }
    else if(chosenCategory === categories[3]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>BIRDS</span>";
    }
    else if(chosenCategory === categories[4]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>ANIMALS</span>";
    }
    else if(chosenCategory === categories[5]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>AQUATIC</span>";
    }
    else if(chosenCategory === categories[6]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>TELEVISION SERIES</span>";
    }
    else if(chosenCategory === categories[7]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>BOLLYWOOD</span>";
    }
    else if(chosenCategory === categories[8]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>COMPANIES</span>";
    }
    else if(chosenCategory === categories[9]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>LANDMARKS</span>";
    }
    else if(chosenCategory === categories[10]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>FOOD-ITEMS</span>";
    }
    else if(chosenCategory === categories[11]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>CRICKET</span>";
    }
    else if(chosenCategory === categories[12]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>FLOWERS</span>";
    }
    else if(chosenCategory === categories[13]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>COLORS</span>";
    }
    else if(chosenCategory === categories[14]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>RIVERS</span>";
    }
    else if(chosenCategory === categories[15]){
      catagoryName.innerHTML = "<span style='font-family:monospace;'>FRUITS</span>";
    }
    
  }

  // Create the blanks and symbols ul
  result = function()
  {
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');
  while (wordHolder.firstChild) {
    wordHolder.removeChild(wordHolder.firstChild);
  }

  for (var i = 0; i < word.length; i++){
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    guess.style.display = 'inline-block'; 

    
    if (word[i] === "-"){
      guess.innerHTML = "-";
    }
    else if (word[i] === "_"){
      guess.innerHTML = " ";
    }
    else if (word[i] === "+"){
      guess.innerHTML = "/";
    }
    else if (word[i] === "&"){
      guess.innerHTML = "&";
    }
    else if (word[i] === "^"){
      guess.innerHTML = ":";
    }
    else if (word[i] === ","){
      guess.innerHTML = ",";
    }
    else{
      guess.innerHTML = "_";
    }

    geusses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
    }
  }

  //Score board
  var scoreDisplay = document.getElementById("scoreDisplay");
  // Initialize the score to 0
  var score = 0;

  // Get the high score element
var highScoreDisplay = document.getElementById("highScoreDisplay");

// Get the current high score from localStorage
var highScore = localStorage.getItem("highScore");

// If there is no high score stored in localStorage, set it to 0
if (highScore === null) {
    highScore = 0;
}

// Update the high score display
highScoreDisplay.innerHTML = "High Score: " + highScore;

// When the game ends, check if the current score is higher than the high score
if (score > highScore) {
    // If it is, update the high score in localStorage and on the page
    localStorage.setItem("highScore", score);
    highScoreDisplay.innerHTML = "High Score: " + score;
}
  // Show lives
  comments = function () {
  var correctlyGuessed = true;  // Check if the user has correctly guessed all the letters in the word
  for (var i = 0; i < geusses.length; i++) {
    if (geusses[i].innerHTML === "_")
    {
      correctlyGuessed = false;
      break;
    }
  }

  if (correctlyGuessed){
    showLives.innerHTML = "<span style='color:green'>Y O U W I N !</span>";
    score += 10;// Add 10 points to the score
    scoreDisplay.innerHTML = "Score: " + score;// Update the score display
  }
  else if (lives >= 7){
    showLives.innerHTML = "You have <span style='color:green'>" + lives + "</span> lives";
  }
  else if (lives >= 4) {
    showLives.innerHTML = "You have <span style='color:orange'>" + lives + "</span> lives";
  }
  else if (lives >= 1) {
    showLives.innerHTML = "You have <span style='color:red'>" + lives + "</span> lives";
  }
  else {
    showLives.innerHTML = "<span style='color:red'>G A M E O V E R</span>";
    // The score remains unchanged (0 points)
    // Update the score display
    scoreDisplay.innerHTML = "Score: " + score;
    
    // Display the correct word
    showClue.innerHTML = "The correct word was: <span style='color:red; font-weight:bold'>" + word.replace(/-/g, " ") + "</span>";
  }
}

  //Animate Hangman
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }
  //drawing the canvas
  canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.clearRect(0, 0, myStickman.width, myStickman.height);//clearing on the next button
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  };
    
  draw = function(pathFromx, pathFromy, pathTox, pathToy) {
    
    context.moveTo(pathFromx, pathFromy);
    context.lineTo(pathTox, pathToy);
    context.stroke(); 
  }
  //=10
  frame1 = function() {
    draw (0, 150, 150, 150);
  };
  //<9  
  frame2 = function() {
    draw (10, 0, 10, 600);
  };
  //<8
  frame3 = function() {
    draw (0, 5, 70, 5);
  };
  //<7
  frame4 = function() {
    draw (60, 5, 60, 15);
  };
  //<6
  torso = function() {
    draw (60, 36, 60, 70);
  };
  //<5
  rightArm = function() {
    draw (60, 46, 100, 50);
  };
  //<4
  leftArm = function() {
    draw (60, 46, 20, 50);
  };
  //<3
  rightLeg = function() {
    draw (60, 70, 100, 100);
  };
  //<2
  leftLeg = function() {
    draw (60, 70, 20, 100);
  };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

  // OnClick Function
  check = function() {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      //this.setAttribute("class", "active");
      this.classList.remove("active");
      console.log("hello");
      //this.onclick = null;
  
      for (var i = 0; i < word.length; i++){
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
  
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      }
      else {
        comments();
      }
    }
  }
  
    
// Play
  play = function () {
    categories = [
    ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester_city", "newcastle_united"],
    ["alien", "dirty_harry", "gladiator", "finding_nemo", "jaws", "a_haunting_in_venice", "the_nun_two", "the_flash", "inception", "dune"],
    ["agra", "ahmeadabad", "bengaluru", "bhopal", "chandigarh", "chennai", "hydreabad", "jaipur", "kolkata", "mumbai", "new_delhi"],
    ["hen", "hummingbird", "cuckoo", "lovebird", "pigeon", "duck", "goose", "peacock"],
    ["cat", "squirrel", "panda", "yak", "hyena", "wolverine", "chameleon"],
    ["piranha", "prawns", "walurs"],
    ["radhakrishna", "anupamaa", "bhabi_ji_ghar_par_hai", "chidiya_ghar", "balika_vadhu", "kundali_bhagya", "sarabhai_v+s_sarabhai", "shaktiman", "wagle_ki_duniya", "khichdi", "kullfi_kumarr_bajewala", "ye_hai_mohabbatein", "patiala_babes"],
    ["adipurush", "andhadhun", "sonu_ke_titu_ki_sweety", "luka_chuppi", "bhuj^_the_pride_of_india", "laxmii", "jayeshbhai_jordaar", "laal_singh_chaddha", "monica,_o_my_darling", "jugjugg_jeeyo"],
    ["reliance", "hdfc", "ntpc", "larsen_&_toubro", "kotak_mahindra", "infosys", "amazon", "tesla"],
    ["the_pyramids", "statue_of_liberty", "taj_mahal", "the_great_wall_of_china", "angkor_wat", "eiffel_tower", "machu_picchu", "burj_khalifa", "colosseum", "easter_island_statues"],
    ["hamburger", "upma", "curry", "dosa", "idli", "samosa", "nachos", "lassi", "tacos", "pasta", "falafel", "pho", "ras_malai", "ramen", "kebab", "sandwich", "kachori", "uttapam", "kulfi", "malai_kofta", "chana_masala", "dal_makhani"],
    ["chennai_super_kings", "delhi_capitals"],
    ["marigold"],
    ["pastel_green", "seance", "russett", "rusty_nail", "coral", "asparagus", "lima", "dolly", "olive", "flush_orange", "razzmatazz", "disco", "jumbo", "geraldine", "maroon", "moody_blue", "persian_pink", "cardinal_pink", "cerulean", "polo_blue", "green_vogue", "cariabbean_green", "spray", "blue_lagoon", "san_felix"],
    ["godaveri", "narmada", "krishna", "yamuna", "mahanadi", "kaveri", "tapi", "sutlej", "chambal", "tungbhadra", "sabarmati"],
    ["avacado", "kiwi"]
    ];
  
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
// Hint
hint.onclick = function() {

  hints = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark", "It is a post-World War II mystery featuring the return of the celebrated sleuth, Hercule Poirot. The plot centers around Poirot, who reluctantly attends a séance at a decaying, haunted palazzo in Venice. The event takes a sinister turn when a guest is murdered, thrusting Poirot into a world of shadows and secrets.", 
    "It is a chilling horror sequel set in 1950s France. The story unfolds with the murder of a priest, hinting at an insidious evil spreading its wings. Sister Irene, the brave protagonist from the first movie, makes a comeback to once again face off against the demonic entity Valak. The narrative is a continuation of the first movie, where Sister Irene and Father Burke investigated a suicide in a Romanian monastery, only to uncover Valak's haunting presence and possession of the inhabitants.", 
    "It is a 2023 American superhero film based on the DC Comics character of the same name. The film was directed by Andy Muschietti from a screenplay by Christina Hodson, based on a story by Joby Harold and the writing team of John Francis Daley and Jonathan Goldstein. It stars Ezra Miller as Barry Allen, alongside Sasha Calle, Michael Shannon, Ron Livingston, Maribel Verdú, Kiersey Clemons, Antje Traue, and Michael Keaton. In the film, Barry travels back in time to prevent his mother's death, which brings unintended consequences. The film is influenced by a comic book storyline from 2011, featuring other DC characters, such as Calle's Supergirl and both Ben Affleck's and Keaton's versions of Batman.", 
  "It is a 2010 science fiction action film directed by Christopher Nolan. The film stars Leonardo DiCaprio as Dom Cobb, a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased, as payment for the implantation of another person's idea into a target's subconscious.", 
"It is a 2021 American epic science fiction film directed by Denis Villeneuve. It is the first of a two-part adaptation of the 1965 novel of the same name by Frank Herbert. The film is set in the distant future and follows Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding. His family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis."],
    ["Known as Taj Nagari, it is famous for the Taj Mahal, one of the Seven Wonders of the World.", " Known as Boston of India and Manchester of India, it is famous for its textile industry.", "Known as the Electronic City of India, Garden City of India, Silicon Valley of India, Pensioners Paradise, Space City, Science city of India and IT Capital of India. It is famous for its IT industry.", "Known as the City of Lakes", "Known as the cty Beautiful", "Known as Gateway of South India, Detroit of Asia, Auto Hub of India and Health Capital of India. It is famous for its automobile industry.", "Known as City of Pearls, City of Nizams and World Capital of Biryani. It is famous for its pearls and biryani.", "Known as Pink City and Paris of India. It is famous for its pink-colored buildings and royal heritage.", "Known as City of Joy and Cultural Capital of India. It is famous for its literature and arts scene.", "Known as City of Seven Islands", "Known as City of Rallies."],
    ["a female bird that is kept for its eggs or its meat", "a small nectar-feeding tropical American bird that is able to hover and fly backwards and typically has colourful iridescent plumage", "a bird which makes a sound like its name", "any of various small usually gray or green parrots that show great affection for their mates", "a fat grey bird that often lives in towns", "a common bird that lives on or near water and have short legs with special feet for swimming and a wide beak", "a large white bird that is like a duck but bigger", "a large bird with beautiful long blue and green tail feathers that it can lift up and spread out"],
    ["feline mammal usually having thick soft fur and no ability to roar", "a small red or grey animal with a long thick tail that lives in trees and eats nuts", 
    "a large bearlike mammal native to certain mountain forests in China", "a large domesticated wild ox with shaggy hair and large horns, used in Tibet", 
    "a doglike African mammal with forelimbs that are longer than the hindlimbs and an erect mane", "a heavily built short-legged carnivorous mammal with a long brown coat and a bushy tail, native to northern tundra and forests in Eurasia and North America", 
    "a small slow-moving Old World lizard with a prehensile tail, long extensible tongue, protruding eyes that rotate independently, and a highly developed ability to change colour."
    ],
    ["a deep-bodied South American freshwater fish that typically lives in shoals and has very sharp teeth that are used to tear flesh from prey", "a marine crustacean that resembles a large shrimp, many varieties of which are edible", 
    "a large gregarious marine mammal related to the eared seals, having two large downward-pointing tusks and found in the Arctic Ocean"
    ],
    ["Indian Hindi-language mythological television drama series", 
    "a selfless Gujarati homemaker in Ahmedabad, is aloof to her own identity and obligated to be in service of her family.Family is incognizant of her husband Vanraj's extra-marital affair with Kavya Gandhi, his colleague", 
    "This comedy show revolves around two neighbouring couples, the Mishras and the Tiwaris, in which the husbands are attracted to each other's wives and attempt various ultimately unsuccessful and hilarious techniques to impress them", 
    "It consists of Dimak Chacha, Girgit Mausi, her husband Bhed Vajpayee, their daughter Titli, her lover Tommy and his friend Puppy", 
    "Set in rural Rajasthan,it traces the arduous journey of child bride Anandi from childhood to the brink of womanhood", 
    "The show narrates the story of two sisters Preeta and Srishti and their attempt to find their mother Sarla and the dynamics which lead to their acquaintance with the rich and famous Luthra family", 
    "It is a 2005 sitcom set in a quintessential upper class family in Mumbai. The show revolves around the life of a fictional Gujarati family who are portrayed as a typical family belonging to the class of elite socialites of Mumbai", 
    "Produced by Reliance Animation in association with Accel Animation Studios, the series centers around Vehaan Arya, a young college student who uses his yogic superpowers to become a hero and defeat the evil forces of Kilvish, who wants to destroy the world",
    "It is based on characters created by noted cartoonist, R. K. Laxman. The show is based around the daily struggles of a courier company manager, who lives with the prudence of a middle-class person of the time. The show presents the everyday struggles of people from three generations and multiple families from their perspectives acting like members of a single family", 
    "It follows the story of a Gujarati family called Parekhs, who lives in an old mansion. The joint family encounters many typically Indian situations, but they try to solve it in the most atypical fashion imaginable. This is a funny bunch of people that are firmly united in their movement to get separated. They want to sell their ancestral property and move out and form their own nuclear families.", 
    "It is a musical drama that aired on Star Plus. The story revolves around the life of Sikandar Singh Gill, a budding singer who falls in love with and secretly marries a villager named Nimrat Bhatia. However, forced to choose between Nimrat and his career, Sikandar chooses the latter and leaves her.", 
    "It is based on a novel Custody by Manju Kapoor, showcases divorce, infertility, remarriage, mature love and deals with societal issues. It follows the story of Raman and Ishita who are connected by their common love for Raman's little daughter Ruhi. Ishita is a Tamilian whereas Raman is a Punjabi.", 
    "The plot revolves around Babita, a shy and innocent woman who is respected in her family. She lives with her in-laws and her 17-year-old daughter, Mini, who is brave and independent. The story unfolds as Babita's husband cheats on her with his business partner, leading to Babita leaving the house with Mini1. Mini helps Babita to divorce her husband and teaches her to become independent and self-reliant1. The series ended abruptly on 27 March 2020 due to COVID-19."
    ],
    ["A modern adaptation of the Indian epic Ramayana which follows the exiled prince Raghav's journey to rescue his wife Janaki from the demon king Lankesh", 
    "The film tells the story of a blind piano player who unwittingly becomes embroiled in the murder of a retired actor", 
    "These two are childhood buddies who we can say are bromantically involved. The two share a warm relationship and are inseparable from each other. One helps other with almost everything from fixing him up with a hot date to keeping him away from wrong girls. But things change when one decides to settle for an arranged marriage", 
    "Set in Mathura, Guddu is a star reporter in a local news channel. It's love at first sight for him when he comes across Rashmi who joins his work-place as an intern. She is the daughter of an aspiring politician who also heads a culture protection group", 
    "During the Indo-Pakistani War of 1971, the Bhuj airbase is attacked and a race against time begins to rebuild the damaged airstrip. During the Indo-Pakistani War of 1971, the airbase is attacked and a race against time begins to rebuild the damaged airstrip", 
    "asif visits his wife's parents' house and happens to go to a ground that is supposedly haunted. However, he is soon possessed by the spirit of a transgender who is out for revenge",
    "It is a 2022 Indian Hindi-language comedy-drama film written and directed by Divyang Thakkar. Produced by Maneesh Sharma and Aditya Chopra under the Yash Raj Films, the film stars Ranveer Singh as the eponymous lead. He plays the son of a traditional Gujarati sarpanch, who believes in equal rights between males and females in society. Shalini Pandey, Boman Irani and Ratna Pathak Shah also play pivotal roles.", 
    "It is a 2022 Indian Hindi-language comedy drama film directed by Advait Chandan and written by Atul Kulkarni. Produced by Paramount Pictures, Aamir Khan Productions and Viacom18 Studios, it is an authorized adaptation of the 1994 American film Forrest Gump which itself is an adaptation of the novel of the same name by Winston Groom. The film stars Aamir Khan as the title character alongside Kareena Kapoor Khan, Naga Chaitanya (in his Hindi film debut) and Mona Singh.", 
    "It is a 2022 Hindi-language neo-noir crime comedy thriller film directed by Vasan Bala. The film stars Rajkummar Rao, Huma Qureshi and Radhika Apte. The movie was adapted from the 1989 Japanese novel Burutasu No Shinzou (Eng: Heart of Brutus) by Keigo Higashino. The film's title is taken from the 1971 film Caravan's song Piya Tu Ab To Aja. It released on 11 November 2022 on Netflix. Upon release, it received positive reviews from critics and became the most-viewed Indian film on Netflix.", 
    "It is a 2022 Indian Hindi-language family comedy-drama film directed by Raj Mehta and produced by Dharma Productions and Viacom18 Studios. The film stars Neetu Kapoor, Anil Kapoor, Varun Dhawan, Kiara Advani, Manish Paul and debutante Prajakta Koli."
    ],
    ["It is the largest public company in India by market capitalisation and revenue, and the 100th largest company worldwide.It is India's largest private tax payer and largest exporter, accounting for 7% of India's total merchandise exports", "It is India's largest private sector bank by assets and world's fourth largest bank by market capitalisation as of July 2023, it is the second largest company by market capitalisation of $172 billion on the Indian stock exchanges. It is also the sixteenth largest employer in India with nearly 1.78 lakh employees", 
    "It is an Indian central Public Sector Undertaking under the ownership of the Ministry of Power and the Government of India, who is engaged in the generation of electricity and other activities.It is the largest power company in India with an electric power generating capacity of 71,594 MW", 
    "It is an Indian multinational conglomerate company, with business interests in engineering, construction, manufacturing, technology, information technology and financial services, headquartered in Mumbai. The company is counted among world's top five construction companies", 
    "It is an Indian banking and financial services company headquartered in Mumbai. It offers banking products and financial services for corporate and retail customers in the areas of personal finance, investment banking, life insurance, and wealth management. It is India's third largest private sector bank by market capitalisation",
    "It was founded by seven engineers in Pune, Maharashtra, India. It became the first Indian company to be listed on Nasdaq. It provides business consulting, information technology and outsourcing services. The company is headquartered in Bangalore", 
    "It is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It has been often referred to as one of the most influential economic and cultural forces in the world, and is often regarded as one of the world's most valuable brands", 
    "It is an American multinational automotive and clean energy company headquartered in Austin, Texas. It designs and manufactures electric vehicles (cars and trucks), stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services"
    ],
    ["The only lasting entry from the original 7 wonders of the world", 
    "A colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States", 
    "An ivory-white marble mausoleum on the right bank of the Yamuna river in the Indian city of Agra", 
    "A series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe", 
    "A temple complex in Cambodia and one of the largest religious monuments in the world", 
    "A wrought-iron lattice tower on the Champ de Mars in Paris, France", 
    "An Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley", 
    "A skyscraper in Dubai, United Arab Emirates", 
    "An oval amphitheatre in the centre of the city of Rome, Italy", 
    "Monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia between 1250 and 1500 CE"],
    ["A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun", 
    "An Indian breakfast dish originating from South India made by cooking roasted semolina or coarse rice flour with various spices and vegetables", 
    "A variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies", 
    "A type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance", 
    "A type of savory rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and among Tamils in Sri Lanka", 
    "A fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, meat (lamb, beef or chicken), or lentils", 
    "A Mexican dish from northern Mexico that consists of heated tortilla chips or totopos covered with melted cheese (or a cheese-based sauce), often served as a snack", 
    "A traditional yogurt-based drink popular throughout South Asia that can be sweet or savory and sometimes flavored with fruit or spices",
    "A traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling", 
    "A type of Italian food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or various shapes, then cooked by boiling or baking", 
    "A deep-fried ball or patty made from ground chickpeas, fava beans, or both", 
    "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 
    "An Indian dessert consisting of flattened balls of chhena (an Indian cottage cheese) soaked in malai (clotted cream) flavored with cardamom",
    "A Japanese dish with Chinese origins. It consists of Chinese wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso", 
    "A dish of pieces of meat, fish, or vegetables roasted or grilled on a skewer or spit", 
    "A food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread", 
    "An Indian snack food consisting of a round, flattened ball made of fine flour filled with a stuffing of baked mixture of yellow moong dal or urad dal, besan, black pepper, red chili powder, salt and other spices", 
    "An Indian breakfast dish similar to dosa but thicker and topped with various vegetables or other ingredients before cooking", 
    "A frozen dairy dessert originating from the Indian subcontinent that is similar to ice cream but denser and creamier", 
    "A vegetarian dish from the Indian subcontinent that consists of vegetable dumplings in a creamy sauce", 
    "A dish originating from the Indian subcontinent that is made from chickpeas cooked in a spicy tomato-based sauce", 
    "A dish originating from the Punjab region of the Indian subcontinent that is made from whole black lentils and red kidney beans cooked with butter and cream"],
    ["The team was suspended for two years from the IPL starting July 2015 due to the involvement of its owners in the 2013 IPL betting case, and won the title in its comeback season of 2018. In addition, they have also won the Champions League Twenty20 in 2010 and 2014. They are amongst the most valuable IPL franchises with a valuation of roughly $1.15 billion as of 2022.",
    "The franchise is jointly owned by the GMR Group and the JSW Sports. The team's home ground is Arun Jaitley Stadium (formerly Feroz Shah Kotla), located in New Delhi. The team is coached by Ricky Ponting. The Capitals appeared in their first IPL final in 2020 against Mumbai Indians."],
    ["These flowers are generally large flowers with bright yellow or orange-colored petals and the flower head has a dark center. The incredibly beautiful flower head is made up of tiny petals that can have about 6 or 7 layers. Marigolds bloom in the summertime and can continue flowering until early fall. These famous flowers are a perfect type of garden flower because they add great color.",
    "These famous flowers are easily identified with their long stems and very large big round yellow flowers. They bloom at their peak in the middle of summer. They usually start flowering in the middle of summer and can continue blooming until the fall. Grown commercially for their oil and their seeds.", 
    ],
    ["CYAN + YELLOW", "MAGENTA + BLUE", "MAGENTA + GREEN", "RED + GREEN", "YELLOW + MAGENTA", "BLUE + YELLOW", "YELLOW + GREEN", "WHITE + YELLOW", "YELLOW + BLACK", "YELLOW + RED", "RED + MAGENTA", "RED + BLUE", "CYAN + RED", "WHITE + RED", "RED + BLACK", "MAGENTA + CYAN", "MAGENTA + WHITE", "BLACK + MAGENTA", "BLUE + CYAN", "BLUE + WHITE", "BLUE + BLACK", "CYAN + GREEN", "CYAN + WHITE", "CYAN + BLACK", "GREEN + BLACK"], 
    ["It originates from Triambakeshwar, Maharashtra, and falls into Bay of Bengal. Some prominent cities located on its banks are Trimbakeshwar, Nashik, Rajahmundr.", 
  "It originates from Amarkantak, Madhya Pradesh, and falls into Arabian Sea. Some prominent cities located on its banks are Jabalpur, Harda, Bharuch.", 
"It originates near Mahabaleshwar, Maharashtra, and falls into Bay of Bengal. Some prominent cities located on its banks are Sangli, Vijayawada.", 
"It originates from Yamunotri Glacier and falls into Ganges River. Some prominent cities located on its banks are Delhi, Agra, Mathura.", 
"It originates from hills of Southeastern Chhattisgarh and falls into Bay of Bengal. Some prominent cities located on its banks are Rajim, Sambalpur, Cuttack.", 
"It originates from Talakaveri, Karnataka, and falls into Bay of Bengal. Some prominent cities located on its banks are Tiruchirapalli, Erode.", 
"It originates from Satpura Range near Multai, Madhya Pradesh, and falls into Arabian Sea. Some prominent cities located on its banks are Burhanpur, Bhusawal, Surat.", 
"It originates from Lake Rakshastal in Tibet and falls into Indus River. Some prominent cities located on its banks are Ferozpur, Rupnagar.", 
"It originates from Vindhya Range near Mhow, Madhya Pradesh and falls into Yamuna River. Some prominent cities located on its banks are Kota, Gwalior.", 
"It originates from Koodli (where Tunga and Bhadra rivers meet), Karnataka and falls into Krishna River. Some prominent cities located on its banks are Harihar, Hospet, Hampi, Kurnool", 
"It originates from Aravali Hills near Udaipur, Rajasthan and falls into Arabian Sea. Some prominent cities located on its banks are Ahmedabad, Gandhinagar."],
["main ingredient in guacamole", "It's high in vitamins C and K, and its skin is furry and brownish-green"]
  ];

  var catagoryIndex = categories.indexOf(chosenCategory);
  var hintIndex = chosenCategory.indexOf(word);
  showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];

};

// Create audio elements for the hint and reset buttons
var hintAudio = new Audio('./hint.mp3');
var resetAudio = new Audio('./reset.mp3');
hintAudio.volume=0.5;
// Add an event listener to the hint button
document.getElementById('hint').addEventListener('click', function() {
  // Play the hint audio file
  hintAudio.play();
});

// Add an event listener to the reset button
document.getElementById('reset').addEventListener('click', function() {
  // Play the reset audio file
  resetAudio.play();
});


  // Get the "Next" button from the page
  var nextButton = document.getElementById("next");
  // Add an event listener to the "Next" button
  nextButton.addEventListener("click", function() {
    // Clear the hint display
    showClue.innerHTML = "";
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    resetAlphabetButtons();
    // Reset the game state
    geusses = [ ];
    lives = 10;
    counter = 0;
  
    // Update the game display
    result();
    comments();
    selectCat();
    canvas();
  }
  );
  
// Function to reset the state of the alphabet buttons
function resetAlphabetButtons() {
  console.log("resetAlphabetButtons called");

  // Get all the alphabet buttons
  var alphabetButtons = document.querySelectorAll("#alphabet");
  
  // Loop through all the alphabet buttons
  for (var i = 0; i < alphabetButtons.length; i++)
  {
    // Reset the state of the button
    alphabetButtons[i].classList.remove("active");
    alphabetButtons[i].classList.remove("wrong");
    alphabetButtons[i].classList.remove("correct");
    alphabetButtons[i].disabled = false;
    alphabetButtons[i].onclick = function() {
      check();
    };

  }
}

// Show the quit modal
document.getElementById("quitButton").addEventListener("click", function() {
  const modal = document.getElementById("quitModal");
  modal.classList.add("show");
});

// Close the modal if the user clicks "No"
document.getElementById("quitNo").addEventListener("click", function() {
  const modal = document.getElementById("quitModal");
  modal.classList.remove("show");
});

// Quit the game if the user clicks "Yes"
document.getElementById("quitYes").addEventListener("click", function() {
  // Reset all game variables to their original values
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  categories = undefined;
  chosenCategory = undefined;
  word = undefined;
  guess = undefined;
  guesses = [];
  lives = undefined;
  counter = undefined;

  // Reset high score and current score to 0
  localStorage.setItem("highScore", 0);
  score = 0;

  // Close the window
  window.close();
});

}