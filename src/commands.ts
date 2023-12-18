import command from '../config.json' assert {type: 'json'};

const REPO_LINK = command.repoLink;

const defaultObj = {
  "message": [
    "<br>",
    "COMMAND NOT FOUND",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>",
  ]
}

const whoamiObj = {
  "message": [
    [
      "In the network of existence,",
      "I am a byte challenging the algorithm - "
    ],
    [
      "Amongst lines of code,",
      "I traverse the labyrinth of digital self-discovery,",
      "resonating with the eternal loop - "
    ],
    [
      "In the spectrum of virtuality,",
      "I am a pixel seeking its own color,",
      "synchronizing with the binary question - ",
    ],
    [
      "As a data packet on its journey through the net,",
      "I analyze the cryptographic mystery,",
      "silently computing - ",
    ],
    [
      "In the matrix of reality,",
      "I am a script of introspection,",
      "weaving through the firewall of existential inquiry - "
    ],
    [
      "42"
    ]
  ],
}


const helpObj = {
  "commands": [
    [
    "'about'",
    "Who made this website?",
    ],
    [
      "'projects'",
      "Maybe there's something interesting."
    ],
    [
      "'articles'",
      "View interesting articles about my work."
    ],
    [
      "'hackathons'",
      "View my hackathon projects."
    ],
    [
      "'whoami'",
      "A perplexing question."
    ],
    ["'sudo'",
      "???"
    ],
    [
      "'repo'",
      "View the Github Repository."
    ],
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to WebShell v1.0.1");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  return banner;
}

const createDefault = () : string[] => {
  const defaultMsg : string[] = [];

  defaultObj.message.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

/*
this function will not be assigned to a variable
it's used to create random whoami messages
*/
const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  })

  whoami.push("<br>");

  return whoami
}

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.")
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.")
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.")
  help.push("<br>")
  return help
}

const createArticles = () : string[] => {
  const articles : string[] = [];
  const SPACE = "&nbsp;";

  articles.push("<br>");

  command.articles.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    let string = `${SPACE.repeat(2)}${link}${SPACE.repeat(30 - ele[0].length)}${ele[1]}`;
    articles.push(string);
  });

  articles.push("<br>");
  return articles;
}

const createHackathons = () : string[] => {
  const hackathons : string[] = [];
  const SPACE = "&nbsp;";

  hackathons.push("<br>");

  command.hackathons.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    let string = `${SPACE.repeat(3)}${link}${SPACE.repeat(25 - ele[0].length)}${ele[1]}`;
    hackathons.push(string);
  });

  hackathons.push("<br>");
  return hackathons;
}



const BANNER = createBanner();
const DEFAULT = createDefault();
const HELP = createHelp();
const ABOUT = createAbout();
const PROJECTS = createProject();
const ARTICLES = createArticles();
const HACKATHONS = createHackathons();

export { BANNER, DEFAULT, HELP, ABOUT, PROJECTS, REPO_LINK, ARTICLES, HACKATHONS, createWhoami as WHOAMI } 
