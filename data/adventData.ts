export interface AdventDay {
  day: number;
  title: string;
  content: string;
  link?: string;
  links?: Array<{ name: string; url: string }>; // Több link névvel
  task?: string;
  icon?: string;
  specialType?: string; // Speciális típus (pl. "letter" a Mikulás popup-hoz)
  imageUrl?: string; // Kép URL (pl. Rudolf kereséshez)
}

export const adventData: AdventDay[] = [
  {
    day: 1,
    title: "",
    content: "",
    task: "Kezdetnek idegesíts fel mindenkit egy karácsonyi zenével!",
    link: "https://www.youtube.com/watch?v=qrm8w-pV120&list=PLq-9M_pqjr0HBr8kb_lcdJ1iLvt4yzxJX&index=3",
    icon: "🎵",
  },
  {
    day: 2,
    title: "",
    content: "",
    task: "Kívánj 3 dolgot a Mikulástól!",
    icon: "✉️",
    specialType: "letter", // Speciális típus a popup-hoz
  },
  {
    day: 3,
    title: "",
    content: "",
    task: "Keressetek régi családi karácsonyi fotókat! A legszebb gyöngyszemeket ér megosztani a többiekkel!",
    icon: "📷",
  },
  {
    day: 4,
    title: "",
    content: "",
    task: "Keresd meg Rudolfot a képen!",
    icon: "🦌",
    imageUrl:
      "https://cdn.life.hu/2024/12/23s0W-RHIFx7apTobqBYLQOOijRdJ8H5x9UJ7E4Mh-g/fit/720/723/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzY5MjJiOTRmMDVmYTRiZDRhMzU1NmM5MWU2NzAzMmQ2.jpg",
  },
  {
    day: 5,
    title: "",
    content: "",
    task: "Tisztítsd meg és helyezd az ablakba a kiscsizmád, hogy a Mikulás könnyen megtalálja!",
    icon: "👢",
  },
  {
    day: 6,
    title: "",
    content: "",
    task: "Karácsonyi történet írás. Folytasd a sztorit a megadott szabályok szerint!",
    link: "https://padlet.com/budaianna82/kar-csonyi-t-rt-net-n7qaxvjmn7py91tf",
    icon: "📝",
  },
  {
    day: 7,
    title: "",
    content: "",
    task: "Vedd elő a karácsonyi dekorokat és díszítsd ki a házat! Az egész decemberre megadja a hangulatot! Közben hallgathatod a december elsejei lejátszási listát!😄",
    icon: "🎀",
  },
  {
    day: 8,
    title: "",
    content: "",
    task: "Nézd meg a videókat! ha van kedved, csinálj újat!",
    links: [
      {
        name: "Szilvi+Gergő+Marci",
        url: "https://elfyourself.com?mId=1080765",
      },
      { name: "Brigi+Dani", url: "https://elfyourself.com?mId=1080770" },
      {
        name: "Zsani+Máté+Debi+Anna+Rena",
        url: "https://elfyourself.com?mId=1080775",
      },
      { name: "Nelli+Feri+Viki", url: "https://elfyourself.com?mId=1080776" },
      {
        name: "Kriszta+Dani+Panna",
        url: "https://elfyourself.com?mId=1080780",
      },
    ],
    icon: "🧝",
  },
  {
    day: 9,
    title: "",
    content: "",
    task: "Keress az interneten minél furább/rondább karácsonyfát vagy karácsonyi dekorációt!",
    icon: "⭐",
  },
  {
    day: 10,
    title: "",
    content: "",
    task: "Fotózd le a lábad karácsonyi zokniban! Ha nincs, akkor van időd még beszerezni egyet!",
    icon: "🧦",
  },
  {
    day: 11,
    title: "",
    content: "",
    task: "Művelődni is lehet néha! Nézd meg a diótörő balett előadást!",
    link: "https://www.youtube.com/watch?v=xtLoaMfinbU",
    icon: "💂",
  },
  {
    day: 12,
    title: "",
    content: "",
    task: "Nézzetek körül a karácsonyi vásárban és keressétek meg a legdrágább kaját! Aztán akadjatok ki, hogy megint nem volt semmi értelme kimenni, mert minden nagyon drága és hideg is van!",
    icon: "💰",
  },
  {
    day: 13,
    title: "",
    content: "",
    task: "Építs hóembert! Ha nincs hó akkor rajzolj/szerkessz egyet!",
    link: "https://www.altogetherchristmas.com/fun/snowman.html",
    icon: "⛄",
  },
  {
    day: 14,
    title: "",
    content: "",
    task: "DIY! Készítsetek valamit karácsonyra (ne én találjak ki mindent 😄)!",
    icon: "✂️",
  },
  {
    day: 15,
    title: "",
    content: "",
    task: "Töltsd ki a kvízt, hogy megtudd milyen karácsonyfa lennél!",
    link: "https://quizpanda.com/hu/what-kind-of-christmas-tree-are-you/",
    icon: "❓",
  },
  {
    day: 16,
    title: "",
    content: "",
    task: "Készíts egy jó meleg habos babos pumpkin spice shaken espresso latte mattet (vagy kakaót, teát, machát, forró csokit)!",
    icon: "☕",
  },
  {
    day: 17,
    title: "",
    content: "",
    task: "Töltsd ki a karácsonyi filmekhez kapcsolódó kvízt!",
    link: "https://www.youtube.com/watch?v=mm0Jmn4zrFY",
    icon: "❓",
  },
  {
    day: 18,
    title: "",
    content: "",
    task: "Karácsonyi outfit check. Vegyél fel valami karácsonyi cuccot és lőjj egy fotót a többieknek. (csúnyapulcsi, sapka, zokni, bármi jöhet, ha az nincs akkor szerkessz magadra valamit)!",
    icon: "🧥",
  },
  {
    day: 19,
    title: "",
    content: "",
    task: "Nézzétek meg a Grincset (vagy egy általatok kedvelt hangulatos karácsonyi filmet pl.: Texasi láncfűrészes)! 🔪🩸",
    link: "https://videa.hu/videok/film-animacio/a-grincs-film-animacio-wQVMT3cERHtN35PA",
    icon: "🍿",
  },
  {
    day: 20,
    title: "",
    content: "",
    task: "A lányok megsütik, a fiúk megeszik. Díszítsetek mézeskalácsot, a legjobbakról készüljön fotó is!",
    icon: "🍪",
  },
  {
    day: 21,
    title: "",
    content: "",
    task: "Csatlakozz a rajzversenyhez. Beszéljetek meg egy időpontot, amikor mindenki ráér!",
    link: "https://skribbl.io/",
    icon: "🎲",
  },
  {
    day: 22,
    title: "",
    content: "",
    task: "Díszítsd fel a karácsonyfát és fotózd le!",
    icon: "🎄",
  },
  {
    day: 23,
    title: "",
    content: "",
    task: "Rajzold le a kéményben ragadt Mikulást csukott szemmel vagy ellentétes kézzel!",
    icon: "🎨",
  },
  {
    day: 24,
    title: "",
    content: "",
    task: "Gondolj 3 szép emlékre, ami ebben az évben történt veled! Utána kezdődhet a végtelen zabálás!",
    icon: "🤔",
  },
];
