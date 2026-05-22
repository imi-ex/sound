// ==========================================================================
// НАСТРОЙКИ САЙТА: МАССИВЫ ДАННЫХ
// ==========================================================================

const tracks = [
    {
        id: 1,
        title: "Бегать и падать",
        artist: "Куок",
        cover: "track1.jpg", 
        link: "Бегать и падать.mp3" // Исправлено под реальное имя файла на GitHub
    },
    {
        id: 2,
        title: "Уходи",
        artist: "ФРИК ПАТИ, Mzlff",
        cover: "track2.jpg",
        link: "Уходи.mp3"
    },
    {
        id: 3,
        title: "абсолютный ноль",
        artist: "Mzlff",
        cover: "track3.jpg",
        link: "абсолютный ноль.mp3"
    },
    {
        id: 4,
        title: "Мечты рядовой фигуры",
        artist: "Mzlff",
        cover: "track4.jpg",
        link: "Мечты рядовой фигуры.mp3",
        lyrics: `Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы.
Как по дороге, по двум полосам пробежит радуга,
когда небо сияло,
нам цвета было ненадобно.

Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы,
и король всего цветного сгинул.
Я с палитрой за спиной,
как герой из страшного фильма.

Пешки вырастают,
но не все короли,
кем они хотели стать,
их не спросят ведь всё равно,
перечень фигур огромен. Но суть того повышения — выиграть следующий ход.
А то, что дальше,
мальчика никого не волнует,
пока судьба идёт дальше.
И пока игрок ломает мечты рядовой фигуры,
все механические часы мира отсчитывают,
как умному в голову приходят мысли выгодного убийства,
разменивая личность на выгодную позицию. Приставы пристально слушать не стали бы,
это просто игра, а значит,
у него есть алиби.

Шах, промешав горечь с водкой,
мешаю я прочесть,
что шарят за правила той игры.
Мат, записать ход,
это год за шаг.
Пешке будущее внушали, и всё закончилось вмиг. Небеса — это клетка,
как и земля
Партия кончилась, но снова время вспять.
В новой фигуре застрянет моя душа,
где снова кто-то будет за меня решать всё.

Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы.
Как по дороге,
по двум полосам пробежит радуга,
когда небо сияло, нам цвета было ненадобно.

Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы,
и король всего цветного сгинул.
Я с палитрой за спиной,
как герой из страшного фильма.

Шах.
Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы.
Как по дороге, по двум полосам пробежит радуга.
Когда небо сияло,
нам цвета было ненадобно.

Шах.
Белыми и чёрными форматами мир стоит на доске,
как будто с небес видят шахматы,
и король всего цветного сгинул.
Я с палитрой за спиной,
как герой из страшного фильма.`
    },
    {
        id: 5,
        title: "Крематорий для бабочек",
        artist: "MellSher",
        cover: "track5.jpg",
        link: "Крематорий для бабочек.mp3"
    },
    {
        id: 6,
        title: "МазеLOVE",
        artist: "Lida, dk",
        cover: "track6.jpg",
        link: "мазеLOVE Lida, DK.mp3"
    }
];

const clips = [
    {
        title: "Лучший клип 1",
        platform: "Twitch",
        icon: "fa-brands fa-twitch",
        link: "https://www.twitch.tv/cherebuhh/clip/TrappedBumblingHamburgerNononoCat-rY4T5pmWOnnnVTyIh",
        thumb: "klip1.jpg" // Сделал чистую заглушку
    },
    {
        title: "Лучший клип 2",
        platform: "Twitch",
        icon: "fa-brands fa-twitch",
        link: "https://www.twitch.tv/stintik/clip/AmorphousSmellyHerringMikeHogu-zoP-UnJIkbtcwmm9",
        thumb: "klip2.jpg" // Сделал чистую заглушку
    },
    {
        title: "Лучший клип 3",
        platform: "Twitch",
        icon: "fa-brands fa-twitch",
        link: "https://www.twitch.tv/drakeoffc/clip/MoldyAbstruseThymeBleedPurple-4cr50icl_64hNUZl",
        thumb: "klip3.jpg" // Сделал чистую заглушку
    }
];

const playlists = [
    {
        name: "Spotify",
        icon: "fa-brands fa-spotify",
        url: "https://open.spotify.com"
    },
    {
        name: "YouTube Music",
        icon: "fa-solid fa-play",
        url: "https://music.youtube.com/playlist?list=PLZcqoG0ALLPRFGA35WPV0IsM8mOdt2d5y"
    }
];

const socials = [
    { name: "Reddit (maze110vvv)", icon: "fa-brands fa-reddit-alien", url: "https://www.reddit.com/u/maze110vvv/s/fu6MsOoXUQ" },
    { name: "Reddit (ne_mzlff)", icon: "fa-brands fa-reddit-alien", url: "https://www.reddit.com/u/ne_mzlff/s/gQ9moeCkwP" },
    { name: "Telegram", icon: "fa-brands fa-telegram", url: "https://t.me/awesome_fugu" },
    { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@awesome_fugu?_r=1&_t=ZS-96ZXudI2mZT" },
    { name: "YouTube", icon: "fa-brands fa-youtube", url: "https://youtube.com/@bezkonechny_nosok" }
];

const memes = [
    { id: 1, title: "Мем №1", src: "meme1.jpg" },
    { id: 2, title: "Мем №2", src: "meme2.jpg" },
    { id: 3, title: "Мем №3", src: "meme3.jpg" },
    { id: 4, title: "Мем №4", src: "meme4.jpg" },
    { id: 5, title: "Мем №5", src: "meme5.jpg" },
    { id: 6, title: "Мем №6", src: "meme6.jpg" }
];
