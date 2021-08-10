const COMMANDS = {
  help: 'Supported commands: <br><span class="code">about</span> <br> <span class="code">blog</span> <br> <span class="code">education</span> <br> <span class="code">skills</span> <br> <span class="code">contact</span> <br> <span class="code">party</span> <br> <span class="code">clear</span>',
  about:
    'Hello 👋<br>My name is Vedant Singhal and I am an aspiring developer.<br>I love to code in Python, JavaScript, C and I have worked with frameworks such as ReactJS and Phaser. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.<br>Nowadays I have started to write blogs to share my knowledge with others, type <span class="code">blog</span> to know more',

  skills:
    '<span class="code">Languages:</span> HTML, CSS, JavaScript, Python and C<br><span class="code">Technologies:</span> Git, Node.js and Firebase<br><span class="code">Frameworks:</span> React.js and Phaser.js',

  education:
    "I am a Grade 8th student at Scottish High International School, Gurgaon. <br> I have attended several coding bootcamps and am currenlty learning advance Python. <br>I believe that <i>'learning never stops.'</i>",

  blog: "Happy Reading",

  contact:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/Ved235" class="social link">GitHub</a>"]',

  party: "🎉🎉🎉",
  clear: "",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    startTheParty();
  }
  if (input === "blog") {
    window.open("https://learnwithved.hashnode.dev/");
  }
  if (input === "clear") {
    terminalOutput.innerHTML = `                 
    <div class="terminal-output" id="terminalOutput">
    <div class="terminal-line" style="font-size: xx-large;">
      <span class="help-msg"
        ><span class="code">Vedantsinghal:$</span> type
        help to start</span
      >
    </div>
  </div>`;
  }

  if(input ==="clear"){
    return 0;
  }
  else{
    output = `<div class="terminal-line"><span class="success">➜</span><span class="directory"> C:/Users/Ved> </span> ${input}</div>`;
  }
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line"><span class="error">no such command: "${input}"</span></div>`;
    console.log("Oops! no such command");
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: "25",
    rotate: true,
    width: 2000,
    height: "971",
    start_from_edge: true,
    respawn: false,
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};
