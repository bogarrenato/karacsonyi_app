export interface AdventDay {
  day: number;
  title: string;
  content: string;
  link?: string;
  task?: string;
  icon?: string;
  specialType?: string; // Speciális típus (pl. "letter" a Mikulás popup-hoz)
  imageUrl?: string; // Kép URL (pl. Rudolf kereséshez)
}

export const adventData: AdventDay[] = [
  {
    day: 1,
    title: "",
    content: "Kezdetnek idegesíts fel mindenkit egy karácsonyi zenével.",
    task: "Nézd meg az alábbi videót",
    link: "https://www.youtube.com/watch?v=qrm8w-pV120&list=PLq-9M_pqjr0HBr8kb_lcdJ1iLvt4yzxJX&index=3",
    icon: "🎵",
  },
  {
    day: 2,
    title: "",
    content: "Kívánj 3 dolgot a Mikulástól.",
    task: "Írd le 3 kívánságodat a Mikulásnak",
    icon: "✉️",
    specialType: "letter", // Speciális típus a popup-hoz
  },
  {
    day: 3,
    title: "",
    content: "Keressetek régi családi karácsonyi fotókat! A legszebb gyöngyszemeket ér megosztani a többiekkel!",
    task: "Keress régi családi karácsonyi fotókat és oszd meg őket",
    icon: "📷",
  },
  {
    day: 4,
    title: "",
    content: "Keresd meg Rudolfot a képen.",
    task: "Keresd meg Rudolfot a képen",
    icon: "🦌",
    imageUrl: "https://cdn.life.hu/2024/12/23s0W-RHIFx7apTobqBYLQOOijRdJ8H5x9UJ7E4Mh-g/fit/720/723/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzY5MjJiOTRmMDVmYTRiZDRhMzU1NmM5MWU2NzAzMmQ2.jpg",
  },
  {
    day: 5,
    title: "",
    content: "Tisztítsd meg és helyezd az ablakba a kiscsizmád, hogy a Mikulás könnyen megtalálja.",
    task: "Tisztítsd meg és helyezd az ablakba a kiscsizmád",
    icon: "🎅",
  },
  {
    day: 6,
    title: "",
    content: "Karácsonyi történet írás. Folytasd a sztorit a megadott szabályok szerint.",
    task: "Folytasd a karácsonyi történetet a megadott szabályok szerint",
    link: "https://padlet.com/budaianna82/kar-csonyi-t-rt-net-n7qaxvjmn7py91tf",
    icon: "📝",
  },
  {
    day: 7,
    title: "",
    content: "Vedd elő a karácsonyi dekorokat és díszítsd ki a házat! Az egész decemberre megadja a hangulatot!",
    task: "Díszítsd ki a házat karácsonyi dekorációkkal",
    icon: "🎀",
  },
  {
    day: 8,
    title: "",
    content: "Ez a nap még nincs kész. Hamarosan érkezik!",
    task: "Várj türelemmel...",
    icon: "🧝",
  },
  {
    day: 9,
    title: "",
    content: "Keress az interneten minél furább/rondább karácsonyfát vagy karácsonyi dekorációt!",
    task: "Keress furcsa vagy rondább karácsonyfát/dekorációt az interneten",
    icon: "🎄",
  },
  {
    day: 10,
    title: "",
    content: "Fotózd le a lábad karácsonyi zokniban! (Van aki ezekért sokat fizet majd)",
    task: "Fotózd le a lábad karácsonyi zokniban",
    icon: "🧦",
  },
  {
    day: 11,
    title: "",
    content: "Művelődni is lehet néha! Nézd meg a diótörő balett előadást!",
    task: "Nézd meg a diótörő balett előadást",
    link: "https://www.youtube.com/watch?v=xtLoaMfinbU",
    icon: "🎩",
  },
  {
    day: 12,
    title: "",
    content: "Nézzetek körül a karácsonyi vásárban és keressétek meg a legdrágább kaját. Aztán akadjatok ki, hogy megint nem volt semmi értelme kimenni, mert minden nagyon drága és hideg is van.",
    task: "Keressétek meg a legdrágább kaját a karácsonyi vásárban",
    icon: "💰",
  },
  {
    day: 13,
    title: "",
    content: "Építs hóembert! Ha nincs hó akkor rajzolj/szerkessz egyet.",
    task: "Építs vagy rajzolj/szerkessz egy hóembert",
    link: "https://www.altogetherchristmas.com/fun/snowman.html",
    icon: "⛄",
  },
  {
    day: 14,
    title: "",
    content: "Ez a nap még nincs kész. Hamarosan érkezik!",
    task: "Várj türelemmel...",
    icon: "✂️",
  },
  {
    day: 15,
    title: "",
    content: "Töltsd ki a kvízt, hogy megtudd milyen karácsonyfa lennél!",
    task: "Töltsd ki a kvízt",
    link: "https://quizpanda.com/hu/what-kind-of-christmas-tree-are-you/",
    icon: "🎄",
  },
  {
    day: 16,
    title: "",
    content: "Ez a nap még nincs kész. Hamarosan érkezik!",
    task: "Várj türelemmel...",
    icon: "☕",
  },
  {
    day: 17,
    title: "",
    content: "Ez a nap még nincs kész. Hamarosan érkezik! (Új családi képeslapokból)",
    task: "Várj türelemmel...",
    icon: "🧩",
  },
  {
    day: 18,
    title: "",
    content: "Karácsonyi outfit check. Vegyél fel valami karácsonyi cuccot és lőjj egy fotót a többieknek. (csúnyapulcsi, sapka, zokni, bármi jöhet, ha az nincs akkor szerkessz magadra valamit)",
    task: "Vegyél fel karácsonyi cuccot és lőjj egy fotót",
    icon: "🧥",
  },
  {
    day: 19,
    title: "",
    content: "Nézzétek meg a Grincset (vagy egy általatok kedvelt hangulatos karácsonyi filmet pl Texasi láncfűrészes)!",
    task: "Nézzétek meg a Grincset vagy egy kedvelt karácsonyi filmet",
    link: "https://videa.hu/videok/film-animacio/a-grincs-film-animacio-wQVMT3cERHtN35PA",
    icon: "🍿",
  },
  {
    day: 20,
    title: "",
    content: "A lányok megsütik, a fiúk megeszik. Díszítsetek mézeskalácsot, a legjobbakról készüljön fotó is.",
    task: "Díszítsetek mézeskalácsot és készítsetek róla fotót",
    icon: "🍪",
  },
  {
    day: 21,
    title: "",
    content: "Csatlakozz a rajzversenyhez. Beszéljetek meg egy időpontot, amikor mindenki ráér.",
    task: "Csatlakozz a rajzversenyhez",
    icon: "🎲",
  },
  {
    day: 22,
    title: "",
    content: "Díszítsd fel a fát, majd fotózd le.",
    task: "Díszítsd fel a karácsonyfát és fotózd le",
    icon: "🎄",
  },
  {
    day: 23,
    title: "",
    content: "Töltsd ki a kvízt!",
    task: "Töltsd ki a kvízt",
    icon: "❓",
  },
  {
    day: 24,
    title: "",
    content: "Gondolj 3 szép emlékre, ami ebben az évben történt veled! Utána kezdődhet a végtelen zabálás (+ egy jó gif)",
    task: "Gondolj 3 szép emlékre az évből",
    link: "https://www.youtube.com/watch?v=qrm8w-pV120",
    icon: "💭",
  },
];

