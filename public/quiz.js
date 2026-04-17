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
        ["Alex and FC", "Shade and Sunny", "Shade and FC", "Sonya and Sunny"],3],
        ["What headpiece does Sonya wear?", 
        ["Flower crown", "Royal crown", "Leaf crown", "Pink shades"],1],
        ["What is the color of Shade's hair?", 
        ["Maroon", "Black", "Red", "Dark pink"],0],
        ["What trait of Sunny's has the highest stat/s?", 
        ["Curiosity and adventurous nature", "Kindness", "Curiosity", "Adventurous nature and kindness"],0],
        ["Which character ran for co-owner to gain insight?", 
        ["Sunny", "Alex", "FC", "MissPinkFish"],2],
        ],
        medium: [
        ["Which character quoted the 'Art of War' by Sun Tzu?",
        ["FC", "Alex", "Hypii", "Sweaze"],0],
        ["What is Shade's surname?",
        ["Karugami", "Karayami", "Kurayami", "Karuyami"],2],
        ["Who does Sunny describe as 'kinda annoying'?",
        ["MissPinkFish", "Imprx", "Alex", "Two"],3],
        ["Which character has their picture not taken in the Overworld?",
        ["Sunny", "FC", "Alex", "Sonya"],2],
        ["Which character describes the other as a 'builder, nothing more'?",
        ["FC describing Alex", "Shade describing Hypii", "Sunny describing Imprx", "Sonya describing Noelle"],1]
        ],
        hard: [
        ["What was Shade's quote?",
        ["“Life is a game of chess. You must play smartly in life, and never overthink, or you will overlook your checkmate.”", "“Life is like a game of chess. You must play smartly in life, and never overthink, or you will overlook your checkmate.”", "“Life is a game of chess. You must play smart in life, and never overthink, or you will overlook your checkmate.”", "“Life is a game of chess. You must play smartly in life and never overthink, or you will overlook your checkmate.”"],0], 
        ["What MBTI type does Sonya have?",
        ["ISFJ-T", "ISFP-T", "INFP-T", "ISTP-T"],1],
        ["Which character is the only one to have 'Judging' instead of 'Prospecting' in their MBTI?",
        ["FC", "ShNsha", "Alex", "Shade"],2],
        ["Which character has combat as their lowest stat?",
        ["Alex", "Sonya", "Sunny", "Shade"],2],
        ["Which character received a 10% discount in an honesty shop, and who gave it?",
        ["Sonya (with Alex)", "FC (with MissPinkFish)", "Sonya (with Sunny)", "Hypii (with Shade)"],0]
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
