const characters = [
  {
    name: "1day",
    imgSrc: "1day.png",
    message: "Ik you don't wanna talk with me but it's your birthday, and I told you I'd try to make it rememberable in a good way so bear with the few long ahh messages and the terrible flirting skills 😬🌷"
  },
  {
    name: "lalaland",
    imgSrc: "lalaland.png",
    message: `You're a mess of mischief wrapped in grace,
A chaos I’d choose in any case.
You're all-caps rage and sleepy sighs,
Pink bows, fake threats, and I hate you lies.

You call me a kid, then blush when I flirt,
Threaten me sweetly—knife emoji and a smirk.
You’ve goldfish memory but your words stick like glue,
“Mr. White Heart is changing”—girl, you have no clue.

We bicker, we tease, we roast till we drop—
But I'd replay each moment, and never hit stop.
You act all stoic, but your heart gives it away—
You're the kind of girl people write poems for, every day.

You flirt in riddles, deny it too,
But I'm catching feelings—what’s new?
You act all nonchalant and chill,
While casually giving me butterflies still.

So here’s to the girl who’s all storm and bloom,
Who’d probably kill me if I tickled in her room.
You’re funny, you’re fierce, and slightly insane—
And I’d write a thousand poems just to feel this again.`
  },
  {
    name: "tz",
    imgSrc: "tz.png",
    message: "I hope today goes well for you and you're with the people who see what I saw —someone annoying, lowkey chaotic in the best way, brilliant, and one of the prettiest girl oh wait my bad lady (since you're 18 now 😂) ever. And if not, well ofc they're stoopid but what matters is that you're happy 💗"
  },
  {
    name: "500days",
    imgSrc: "500days.png",
    message: "I know I didn’t act like 'just friends' when we decided, but I wish I'd have cause maybe then we would still talk, so um sorry aboot that. I wasn’t trying to mess things up, I just liked talking to you more than I probably should have 😕"
  },
  {
    name: "b99",
    imgSrc: "b99.png",
    message: "Happy birthday to the person who can make someone simp for them while teasing the hell outta them like what are you ma'am?? a goddess?? (Nah that's too much tareef for you 😂) But it's unfair yk, there should be laws to save people like me from people like you 😭 (tho I don't mind it at all)"
  },
  {
    name: "mebeforeyou",
    imgSrc: "mebeforeyou.png",
    message: "I dunno why but I do still think about you, sometimes when I see a reel and I so badly wanna share it to you but can't, sometimes when I listen to our spotify playlist, sometimes when I reread your amazing flirty roasting skills, which you have to admit was pretty fun part of our chats, sometimes when I stalk your account and read your poems and sometimes when all I want to do is text you but I don't cause ik you don’t wanna talk with me, but incase if you ever (and I do mean EVER) do, just text me and I'd reply ❤️‍🩹"
  },
  {
    name: "spidey-gwen",
    imgSrc: "spidey-gwen.png",
    message: "Ik you warned me that none of your crushes last longer than 2months and you're not the 'lover girl' but I think I do know exactly when it changed... the stupid 3am text, and trust me if I could I'd take it back instantly 😞"
  },
  {
    name: "office",
    imgSrc: "office.png",
    message: "The way you always called me annoying and yet smiled so hard (don't lie, cause ik you did) at my dumb words, it kinda felt like you calling me annoying was a secret code word for you saying I like talking with you, but again maybe I'm just delusional as someone pointed it out once before 🙄💘"
  },
  {
    name: "okjaanu",
    imgSrc: "okjaanu.png",
    message: "Yk we're yet to do a few things, like go for a swimming where you inevitability cling onto me otherwise you'd drown ofc (I did look forward to teaching you tho ik it was a close to never possibility but still), yet to teach you guitar and in return receive hug and kisses which you promised, experience the orange theory irl, yet to bring tulips when meet and yet to take you out on a date 🫴🏻"
  },
  {
    name: "13-30",
    imgSrc: "13-30.png",
    message: "If we ever start talking again, I hope it'd be good vibes only, cause apart from all the flirting and teasing, you can't deny that our vibes didn't match, it was like whattt HOLY KENTUCKY FRENCH FRIES FUMKIN SHEET. I did absolutely love talking with a lowkey fun person (hawa mai mat udna yeh sun ne ke baad 😂😞)"
  },
  {
    name: "10days",
    imgSrc: "10days.png",
    message: "Even though we stopped talking, I still think you're one of the coolest people I accidentally caught feelings for. And I still believe you're more than quite lovable <3"
  },
  {
    name: "yjhd",
    imgSrc: "yjhd.png",
    message: "I dunno if I still like you or not but ik that I didn't do well all of this just for nothing. I just want you to know that I miss you tulip (and dw you don’t have to say it back this time 🤍)"
  }
];

const fixedLayout = {
  "1day": {"top":"35.6496px","left":"118.346px","rotation":"-19.1052deg","width":"140.252px"},
  "lalaland":{"top":"171.076px","left":"310.071px","rotation":"-18.4582deg","width":"99.6652px"},
  "tz":{"top":"81.6917px","left":"781.44px","rotation":"14.5448deg","width":"81.4267px"},
  "500days":{"top":"15.7529px","left":"916.482px","rotation":"-5.21965deg","width":"92.8263px"},
  "b99":{"top":"239.139px","left":"1002.09px","rotation":"-24.2671deg","width":"84.8263px"},
  "mebeforeyou":{"top":"320.645px","left":"844.626px","rotation":"17.4291deg","width":"99.2564px"},
  "spidey-gwen":{"top":"244.557px","left":"57.0697px","rotation":"-18.299deg","width":"100.412px"},
  "office":{"top":"334.423px","left":"276.334px","rotation":"27.16deg","width":"84.9749px"},
  "okjaanu":{"top":"414.739px","left":"994.825px","rotation":"15.7564deg","width":"125.774px"},
  "13-30":{"top":"498.35px","left":"727.878px","rotation":"-16.8575deg","width":"89.9821px"},
  "10days":{"top":"483.691px","left":"413.577px","rotation":"-11.6651deg","width":"115.629px"},
  "yjhd":{"top":"507.663px","left":"58.4789px","rotation":"-28.2064deg","width":"111.129px"}
};

function showMessagePopup(message) {
  const popup = document.createElement('div');
  popup.className = 'video-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <p>${message.replace(/\n/g, '<br>')}</p>
      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;
  document.body.appendChild(popup);
}

function scatterStickers() {
  const wrapper = document.createElement('div');
  wrapper.id = 'characters-wrapper';
  document.body.appendChild(wrapper);

  characters.forEach(char => {
    const layout = fixedLayout[char.name];
    if (!layout) return;

    const container = document.createElement('div');
    container.classList.add('sticker-container');
    container.style.position = 'absolute';
    container.style.top = layout.top;
    container.style.left = layout.left;
    container.style.transform = `rotate(${layout.rotation})`;

    const img = document.createElement('img');
    img.src = char.imgSrc;
    img.alt = char.name;
    img.classList.add('sticker');
    img.style.width = layout.width;

    const label = document.createElement('div');
    label.classList.add('sticker-label');
    label.textContent = 'Click me!';

    container.appendChild(img);
    container.appendChild(label);
    wrapper.appendChild(container);

    img.addEventListener('click', () => showMessagePopup(char.message));
  });
}

scatterStickers();

// Sparkles
function createSparkles(num) {
  const sparklesContainer = document.getElementById('sparkles');
  const emojis = ['🎊', '🥳', '🎉'];

  for (let i = 0; i < num; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const isEmoji = Math.random() < 0.3;
    if (isEmoji) {
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.background = 'none';
      sparkle.style.fontSize = `${14 + Math.random() * 10}px`;
      sparkle.style.filter = 'drop-shadow(0 0 3px #fff)';
    }

    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDelay = `${Math.random() * 10}s`;
    sparkle.style.animationDuration = `${4 + Math.random() * 3}s, ${1 + Math.random() * 1.5}s`;

    sparklesContainer.appendChild(sparkle);
  }
}

createSparkles(60);

// Guitar video popup
document.addEventListener('DOMContentLoaded', () => {
  const guitarButton = document.querySelector('.guitar-button');
  guitarButton.addEventListener('click', () => {
    showVideoPopup('https://drive.google.com/file/d/1DsnNzWVmdIhpVRCaICt-JejPCO6oPRkc/view?usp=drivesdk');
  });
});

function showVideoPopup(link) {
  const popup = document.createElement('div');
  popup.className = 'video-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <p>Here’s a little surprise 🎶</p>
      <a href="${link}" target="_blank">Watch the video</a>
      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;
  document.body.appendChild(popup);
}
