/* 
   File: public/quiz.js
   Webpage that uses it: public/studyhall.html
   Purpose: Runs the Study Hall quiz (mode selection, randomized questions, scoring using arrays).
   Specifically:
   - Creates an interactive Study Hall quiz with easy, medium, and hard modes.
   - Randomizes question order each run.
   - Displays questions and multiple choice buttons using innerHTML.
   - Tracks score and shows final score screen with a "Go back" button.
*/

const writingsound = new Audio("../assets/quill.mp3");
writingsound.volume = 1;
        const quiz= {
        easy:[
        ["Which characters are both born on the 19th of the month?",
        ["Shade and FC", "Shade and Sunny", "Sunny and FC", "Sonya and Sunny"],3],
        ["What headpiece does Sonya wear?", 
        ["Flower crown", "Royal crown", "Leaf crown", "Pink shades"],1],
        ["What is the color of Shade's hair?", 
        ["Maroon", "Black", "Red", "Dark pink"],0],
        ["What trait of Shade's has the highest stat/s?", 
        ["Awareness", "Logic", "Logic and Awareness", "Creativity"],0],
        ["Which character seems to be the most friendly?", 
        ["Me", "Sunny", "FC", "Hypii"],2],
        ],
        medium: [
        ["Which character is described as someone who's nice and pleasant to be around?",
        ["Sonya", "Alex", "MissPinkFish", "Sweaze"],1],
        ["What is Shade's surname?",
        ["Karugami", "Karayami", "Kurayami", "Karuyami"],2],
        ["Who does Sunny describe as 'kinda annoying'?",
        ["MissPinkFish", "Imprx", "Alex", "Two"],3],
        ["What word did Isaiah jokingly describe as “the best… ism…?”",
        ["Idealism", "Optimism", "Altruism", "Pessimism"],3],
        ["What MBTI type does Sonya have?",
        ["ISFJ-T", "ISFP-T", "INFP-T", "ISTP-T"],1]
        ],
        hard: [
        ["What was Shade's quote?",
        ["“Life is a game of chess. You must play smartly in life, and never overthink, or you will overlook your checkmate.”", "“Life is like a game of chess. You must play smartly in life, and never overthink, or you will overlook your checkmate.”", "“Life is a game of chess. You must play smart in life, and never overthink, or you will overlook your checkmate.”", "“Life is a game of chess. You must play smartly in life and never overthink, or you will overlook your checkmate.”"],0], 
        ["Which character gets reminded of someone when they see this character?",
        ["Asteria describing Castor", "Solstice describing Cynthia", "Lotus describing Sweaze", "Isaiah describing Shedletsky"],1],
        ["Which character’s stat profile suggests strong internal emotional capacity but difficulty expressing it outwardly?",
        ["Isaiah", "Lotus", "Asteria", "Solstice"],2],
        ["Which relationship is implied to carry unresolved emotional tension based on both characters’ statements (or lack thereof)? ",
        ["Asteria and Solstice", "Lotus and Sweaze", "Lotus and Isaiah", "Solstice and Cynthia"],2],
        ["Which character expresses regret over failing to tell someone how meaningful their support was?",
        ["Asteria to Castor", "Isaiah to Sweaze", "Isaiah to Shedletsky", "Solstice to Elias"],1]
        ]
        };

        let m, i = 0, s = 0;
        let quizrn = [];
        const app = document.getElementById("app");

        const shuffle = arr => {
          for (let j = arr.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [arr[j], arr[k]] = [arr[k], arr[j]];
          }
        return arr;
        }

        const menu = () => {
        app.className = "quiz start";
        app.innerHTML = `
        <h1>Select Mode</h1>
        <button class="book easy btn-three" onclick="start('easy')">Easy</button>
        <button class="book medium btn-three" onclick="start('medium')">Medium</button>
        <button class="book hard btn-three" onclick="start('hard')">Hard</button>
        `;
        };

        const start = x => {
          app.className = "quiz";
          m = x;
          i = 0;
          s = 0;
          quizrn = shuffle([...quiz[x]]);
          next();
        }

        const next = () =>
        i >= quizrn.length
          ? app.innerHTML = `
          <h1>Score</h1>
          <p style="text-align:center;">${s} / ${quizrn.length}</p>
          <button class="btn-three quizbtn" onclick="menu()">Go back</button>
          `
        : (() => {
          let [q, o, a] = quizrn[i];
          app.innerHTML = 
          `<h1>${m.toUpperCase()}</h1><p>${q}</p>` +
          o.map ((t, j) => 
          `<button class="btn-three quizbtn" onclick="pick(${j},${a})">${t}</button>`).join('');
          })();

    const pick = (c, a) => {
      writingsound.currentTime = 0;
      writingsound.play();
      if (c===a) s++;
      i++;
      next();
    };

    menu();