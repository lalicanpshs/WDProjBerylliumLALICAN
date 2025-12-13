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

const writingsound = new Audio("../../assets/quill.mp3");
writingsound.volume = 0.5;
        const quiz= {
        easy:[
        ["Which characters have the same birthday?",
        ["Asteria and Solstice", "Asteria and Isaiah", "Lotus and Isaiah", "Solstice and Isaiah"],3],
        ["What headpiece does Lotus wear?", 
        ["Red shades", "Flower crown and red shades", "Leaf crown and red shades", "Flower crown"],2],
        ["What is the color of Isaiah’s dagger?", 
        ["Blue", "Light blue", "White", "Gray"],0],
        ["What trait of Solstice’s has the highest stat/s?", 
        ["Brightness and loyalty", "Brightness", "Loyalty and pranks", "Cautiousness and pranks"],0],
        ["Which character does not have the best mental state (at the moment, hopefully)?", 
        ["Me", "Isaiah", "Asteria", "Lotus"],1],
        ],
        medium: [
        ["What was Asteria’s quote?",
        ["“The most beautiful things in the world cannot be seen or touched, they are felt with the heart.”", "“The most beautiful things in the world can’t be caught or touched, as they are felt with the heart.”", "“The most beautiful things in the world can’t be caught sight of or touched, they are felt with the heart.”", "“The most beautiful things in the world cannot be seen or caught, as they are felt with the heart.”"],0],
        ["What is Lotus’ patronymic?",
        ["Uvyanovna", "Uvdyanovna", "Uvyadanovna", "Uvyanovdana"],2],
        ["Who does Isaiah describe as a burst of color in his greyscale world?",
        ["Sweaze", "Shedletsky", "Cynthia", "Lotus"],3],
        ["What word did Isaiah jokingly describe as “the best… ism…?”",
        ["Idealism", "Optimism", "Altruism", "Pessimism"],3],
        ["What MBTI type does Solstice have?",
        ["ENFP-T", "ENTP-A", "INFP-T", "ISTP-T"],1]
        ],
        hard: [
        ["Which character is described as someone whose presence “lingers everywhere she goes”?",
        ["Asteria", "Lotus", "Cynthia", "Sapphire"],1],
        ["Which character views another as a grounding wire?",
        ["Asteria describing Castor", "Solstice describing Cynthia", "Lotus describing Sweaze", "Isaiah describing Shedletsky"],1],
        ["Which character’s stat profile suggests strong internal emotional capacity but difficulty expressing it outwardly?",
        ["Isaiah", "Lotus", "Asteria", "Solstice"],0],
        ["Which relationship is implied to carry unresolved emotional tension based on both characters’ statements (or lack thereof)? ",
        ["Asteria and Solstice", "Lotus and Sweaze", "Lotus and Isaiah", "Solstice and Cynthia"],3],
        ["Which character expresses regret over failing to tell someone how meaningful their support was?",
        ["Asteria to Castor", "Isaiah to Sweaze", "Isaiah to Shedletsky", "Solstice to Elias"],3]
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