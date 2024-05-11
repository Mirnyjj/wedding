import { weddingActions } from "./wedding.actions";
import { handleActions } from "redux-actions";

const initialState = {
  currentGuest: {
    name: "Гость",
    url: "guest",
    appeal: "Дорогой"
  },
  noneGuest: true,
  loading: false,
  error: "",
  date: "14.07.2024",
  family: {
    man: "Максим",
    woman: "Ксения",
    title: "wedding"
  },
  users: [
    {
      name: "Мама и Папа",
      url: "mama-papa",
      appeal: "Дорогие",
      x: 4
    },
    { name: "Сергей и Аня", url: "sergey-anna", appeal: "Дорогие", x: 1 },
    {
      name: "крестная дядя Андрей и Арина",
      url: "krestnaya",
      appeal: "Дорогие",
      x: 4
    },
    {
      name: "Денис и Настя",
      url: "denis-nastya",
      appeal: "Дорогие",
      x: 4
    },
    { name: "Луиза и Сергей", url: "luiza-sergey", appeal: "Дорогие", x: 2 },
    { name: "дядя Сергей, тетя Лена, Максим, Саша и Ирина", url: "zhelniny", appeal: "Дорогие", x: 2 },
    { name: "дядя Витя и Стас", url: "tihanovy", appeal: "Дорогие", x: 1 },
    { name: "Василий и Екатерина", url: "vasy-katy", appeal: "Дорогие", x: 1 },
    { name: "Эдуард и Индира", url: "edyard-indira", appeal: "Дорогие", x: 1 },
    { name: "Ангелина", url: "angelina", appeal: "Дорогая", x: 1 },
    { name: "Дима и Оксана", url: "dima-oksana", appeal: "Дорогие", x: 4 },
    { name: "Саша и Настя", url: "sasha-nastya", appeal: "Дорогие", x: 3 },
    { name: "Саша и Аня", url: "sasha-any", appeal: "Дорогие", x: 4 },
    { name: "Никита", url: "nikita", appeal: "Дорогой", x: 4 },
    {
      name: "дядя Андрей",
      url: "dyda-andrei",
      appeal: "Дорогой",
      x: 4
    },
    { name: "Катя и Лера", url: "katy-lera", appeal: "Дорогие", x: 4 },
    { name: "Лена, Витя, Егор, Маша и Ваня", url: "lena-vitya", appeal: "Дорогие", x: 4 },
    {
      name: "Настя и Денис",
      url: "nastya-i-denis",
      appeal: "Дорогие",
      x: 4
    },
    { name: "Андрей и Марина", url: "andrey-marina", appeal: "Дорогие", x: 1 },
    { name: "Ксюша", url: "ksysha", appeal: "Дорогая", x: 4 },
    { name: "Наргиз", url: "nargis", appeal: "Дорогая", x: 4 },
    { name: "Настя", url: "nastya", appeal: "Дорогая", x: 4 },
    {
      name: "Таня",
      url: "tanya",
      appeal: "Дорогая",
      x: 4
    },
    {
      name: "Маша",
      url: "masha",
      appeal: "Дорогая",
      x: 4
    },
    {
      name: "Юля",
      url: "yla",
      appeal: "Дорогая",
      x: 3
    },
    { name: "Александр", url: "aleksandr", appeal: "Дорогой", x: 1 },
    { name: "Артем", url: "Артем", appeal: "Дорогой", x: 3 },
  ],
  dressCode: {
    title: "Цветовая гамма",
    content:
      "Мы старались сделать праздник красивым и будем рады, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы."
  },
  // contacts: {
  //   title: "Организатор",
  //   content:
  //     "По всем вопросам, связанным с трансфером, торжеством и сюрпризами, обращаться к нашему свадебному организатору",
  //   name: "Ирина",
  //   phone: "+7 (912) 924-91-65"
  // },
  // transfer: {
  //   title: "Трансфер",
  //   content:
  //     "Не волнуйтесь о том, как добраться на наш праздник! " +
  //     "Всех гостей будет ожидать трансфер к месту проведения церемонии бракосочетания " +
  //     "в 14:20 по адресу: ул. Коммунистическая, 10. "
  // },
  address: [
    {
      title: "Адрес проведения мероприятия",
      content:
        " г. Ульяновск, ул. Плеханова, д.1 (гостинница 'Октябрьская') ",
      urlMap:
        "https://yandex.ru/map-widget/v1/?um=constructor%3Aaf91adbd3d4572522f0530a8082d49c44fe57d472c966578eabbb6937a98951a&amp;source=constructor",
      urlCar:
        "https://yandex.ru/maps/195/ulyanovsk/?ll=48.402117%2C54.311035&mode=routes&rtext=~54.310847%2C48.402359&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1078033192&z=16",
      id: "guests"
    }
  ],
  appeal: {
    title: "Обращение к гостям",
    content:
      "Один день в этом году будет для нас особенным, и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем Вас на знаменательный праздник - нашу свадьбу!",
      // "создавали и разделяли самые яркие и незабываемые моменты в нашей жизни, " +
      // "приходили к нам на помощь, наполняли нашу жизнь самыми искренними и тёплыми эмоциями. " +
      // "Нам было бы приятно и радостно, если бы Вы стали свидетелями столь важного мероприятия и разделили с нами наше счастье! " +
      // "Позвольте пригласить Вас на самое главное торжество всей нашей жизни, которое состоится 14 июля 2024 года",
    other: "Дорогие и любимые наши гости!"
  },
  program: [
    {
      time: "15:30",
      title: "Сбор гостей",
      street: ""
    },
    {
      time: "16:00",
      title: "Церемония бракосочетания",
      street: ""
    },
    {
      time: "16:30",
      title: "Праздничный банкет",
      street: ""
    }
  ],
  menu: [
    {
      name: "header",
      title: "Главная"
    },
    {
      name: "appeal",
      title: "Пригласительный"
    },
    {
      name: "counter",
      title: "Дней до свадьбы"
    },
    {
      name: "feedback",
      title: "Анкета"
    },
    {
      name: "programDay",
      title: "Тайминг"
    },
    {
      name: "photo",
      title: "Фото"
    },
    {
      name: "gamma",
      title: "Дресс-код"
    },
    {
      name: "holiday",
      title: "Место проведения"
    }
  ],
  feedbackContent: {
    questions: [
      {
        title: "Блюда из какого мяса предпочтительнее для Вас?",
        name: "eat",
        type: "radio",
        necessarily: false,
        answers: ["Свинина", "Птица", "Вегетарианские"]
      },
      {
        title: "Какие напитки Вы предпочитаете?",
        name: "beer",
        type: "radio",
        necessarily: false,
        answers: [
          "Красное вино",
          "Белое вино",
          "Водка",
          "Коньяк",
          "Безалкогольные"
        ],
        other: "Безалкогольные"
      },
      {
        title: "Необходим ли Вам трансфер из города Инзы и обратно в день торжества?",
        name: "transfer",
        type: "radio",
        necessarily: true,
        answers: ["Да", "Нет"]
      },
      {
        title: "Планируете ли Вы присутствовать на втором дне нашего торжества, который будет проходить в городе Инзе?",
        name: "secondDay",
        type: "radio",
        necessarily: true,
        answers: ["Да", "Нет"]
      }
    ]
  }
};

const setGuest = (state, action) => ({
  ...state,
  currentGuest: action.payload
});

const setMenu = (state, action) => ({
  ...state,
  menu: [...action.payload]
});

const reducerMap = {
  [weddingActions.SET_GUEST]: setGuest,
  [weddingActions.SET_MENU]: setMenu
};

export const weddingReducers = handleActions(reducerMap, initialState);
