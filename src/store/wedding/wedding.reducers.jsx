import React from "react";
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
  date: "15.07.2021",
  family: {
    man: "Степан",
    woman: "Юлия",
    title: "wedding"
  },
  users: [
    { name: "Мама и Папа", url: "mama-i-papa", appeal: "Дорогие" },
    { name: "Мама и Вова", url: "mama-i-vova", appeal: "Дорогие" },
    { name: "Папа и Оля", url: "papa-i-olya", appeal: "Дорогие" },
    {
      name: "Бабуля и Дядя Костя",
      url: "babulya-i-dyadya-kostya",
      appeal: "Дорогие"
    },
    { name: "Никита и Олеся", url: "nikita-i-olesya", appeal: "Дорогие" },
    { name: "Дедушка", url: "dedushka", appeal: "Дорогой" },
    { name: "Ирина", url: "irina", appeal: "Дорогая" },
    {
      name: "Анатолий, Дарья, Олег и Ева",
      url: "anatolij-darya-oleg-i-eva",
      appeal: "Дорогие"
    },
    {
      name: "Эдуард, Наталья, Кристина и Владимир",
      url: "eduard-natalya-kristina-i-vladimir",
      appeal: "Дорогие"
    },
    { name: "Дмитрий и Ирина", url: "dmitrij-i-irina", appeal: "Дорогие" },
    { name: "Алексей Кудашев", url: "aleksej-kudashev", appeal: "Дорогой" },
    { name: "Алексей Сажин", url: "aleksej-sazhin", appeal: "Дорогой" },
    { name: "Артём", url: "artyom", appeal: "Дорогой" },
    {
      name: "Александр и Анастасия",
      url: "aleksandr-i-anastasiya",
      appeal: "Дорогие"
    },
    {
      name: "Данила и Екатерина",
      url: "danila-i-ekaterina",
      appeal: "Дорогие"
    },
    { name: "Ваган", url: "vagan", appeal: "Дорогой" },
    { name: "Данил", url: "danil", appeal: "Дорогой" },
    { name: "Артур", url: "artur", appeal: "Дорогой" },
    { name: "Александр и Дарья", url: "aleksandr-i-darya", appeal: "Дорогие" },
    { name: "Илья", url: "ilya", appeal: "Дорогой" },
    {
      name: "Александр Прокопенко",
      url: "aleksandr-prokopenko",
      appeal: "Дорогой"
    },
    { name: "Павел", url: "pavel", appeal: "Дорогой" },
    { name: "Аркадий", url: "arkadij", appeal: "Дорогой" },
    { name: "Сергей", url: "sergej", appeal: "Дорогой" },
    { name: "Михаил и Мария", url: "mihail-i-mariya", appeal: "Дорогие" },
    { name: "Александр Дзедаев", url: "aleksandr-dzedaev", appeal: "Дорогой" },
    { name: "Вадим", url: "vadim", appeal: "Дорогой" },
    { name: "Дмитрий", url: "dmitrij", appeal: "Дорогой" },
    { name: "Андрей Елфимов", url: "andrej-elfimov", appeal: "Дорогой" },
    { name: "Алексей Андриянов", url: "aleksej-andriyanov", appeal: "Дорогой" },
    { name: "Андрей Кивацкий", url: "andrej-kivackij", appeal: "Дорогой" },
    {
      name: "Павел, Алёна и Мария",
      url: "pavel-alyona-i-mariya",
      appeal: "Дорогие"
    },
    { name: "Бабуля + Бабуля", url: "babulya-+-babulya", appeal: "Дорогие" },
    { name: "Татьяна и Сергей", url: "tatyana-i-sergej", appeal: "Дорогие" },
    { name: "Мария и Дмитрий", url: "mariya-i-dmitrij", appeal: "Дорогие" },
    { name: "Наталья и Сергей", url: "natalya-i-sergej", appeal: "Дорогие" },
    { name: "Татьяна и Дмитрий", url: "tatyana-i-dmitrij", appeal: "Дорогие" },
    { name: "Мария", url: "mariya", appeal: "Дорогая" },
    { name: "Яна", url: "yana", appeal: "Дорогая" },
    { name: "Дарья и Илья", url: "darya-i-ilya", appeal: "Дорогие" },
    { name: "Ирина и Андрей", url: "irina-i-andrej", appeal: "Дорогие" },
    { name: "Алёна и Фёдор", url: "alyona-i-fyodor", appeal: "Дорогие" },
    { name: "Богдана", url: "bogdana", appeal: "Дорогая" },
    { name: "Дарья", url: "darya", appeal: "Дорогая" },
    { name: "Виктория", url: "viktoriya", appeal: "Дорогая" },
    { name: "Олег Анатольевич", url: "oleg-anatolevich", appeal: "Дорогой" },
    { name: "Анна и Никита", url: "anna-i-nikita", appeal: "Дорогие" }
  ],
  dressCode: {
    title: "Цветовая гамма",
    content:
      "Мы старались сделать праздник красивым и будем рады, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы."
  },
  contacts: [
    {
      title: "Невеста",
      content:
        "По всем вопросам, связанным с трансфером, торжеством и сюрпризами, обращаться к нашему свадебному организатору",
      name: "Юлия",
      phone: "+7 (906) 874-60-05"
    },
    {
      title: "Жених",
      content:
        "По всем вопросам, связанным с трансфером, торжеством и сюрпризами, обращаться к нашему свадебному организатору",
      name: "Степан",
      phone: "+7 (950) 497-74-77"
    }
  ],
  transfer: {
    title: "Трансфер",
    content:
      "Не волнуйтесь о том, как добраться на наш праздник! " +
      "Всех гостей будет ожидать трансфер к месту проведения церемонии бракосочетания " +
      "в 14:20 по адресу: ул. Коммунистическая, 10. "
  },
  address: [
    {
      title: "Адрес проведения банкета",
      content:
        "Экопарк Удача, Ресторан Муза (д. Якуши, ул. Переулок Папанина 19, 27 км.)",
      urlMap:
        "https://yandex.ru/map-widget/v1/?um=constructor%3A1dccd929a917a1e718b7917a02f9c719859cd2318cfaf60fb5b34fd7b811433d&amp;source=constructor",
      urlCar:
        "https://yandex.ru/maps/?ll=66.008710%2C57.132586&mode=routes&rtext=~57.132586%2C66.008710&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D195988629861&z=18",
      id: "holiday"
    }
  ],
  appeal: {
    title: "Обращение к гостям",
    content: (
      <>
        Приглашаем разделить с нами день, когда мы пообещаем друг другу быть
        вместе навсегда!
        <br />
        Вы – главные гости на нашей свадьбе и в день создания нашей семьи мы
        хотим, чтобы вы были рядом
      </>
    )
  },
  program: [
    {
      time: "16:30",
      title: "Сбор гостей",
      street:
        "Экопарк Удача, Ресторан Муза (д. Якуши, ул. Переулок Папанина 19, 27 км.)"
    },
    {
      time: "17:00",
      title: "Начало церемонии",
      street:
        "Экопарк Удача, Ресторан Муза (д. Якуши, ул. Переулок Папанина 19, 27 км.)"
    },
    {
      time: "18:00",
      title: "Начало банкета и веселья",
      street:
        "Экопарк Удача, Ресторан Муза (д. Якуши, ул. Переулок Папанина 19, 27 км.)"
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
      title: "Расписание"
    },
    // {
    //   name: "photo",
    //   title: "Фото"
    // },
    {
      name: "gamma",
      title: "Дресс-код"
    },
    {
      name: "guests",
      title: "Место сбора"
    },
    {
      name: "holiday",
      title: "Место проведения"
    },
    {
      name: "footer",
      title: "Контакты"
    }
  ],
  feedbackContent: {
    questions: [
      // {
      //   title: "Какие блюда предпочтительнее для Вас?",
      //   name: "eat",
      //   type: "radio",
      //   necessarily: false,
      //   answers: ["Мясные", "Рыбные"]
      // },
      {
        title: "Какие алкогольные напитки Вы предпочитаете?",
        name: "beer",
        type: "radio",
        necessarily: false,
        answers: [
          "Красное вино",
          "Белое вино",
          "Водка",
          "Коньяк",
          "Шампанское"
          // "Другое"
        ]
        // other: "Другое"
      },
      {
        title: "Нужен ли вам трансфер до места празднования?",
        name: "transfer",
        type: "radio",
        necessarily: false,
        answers: ["Нет", "Да"]
      }
      // {
      //   title: "Необходимы ли Вам апартаменты для проживания в Тюмени?",
      //   name: "apartment",
      //   type: "radio",
      //   necessarily: true,
      //   answers: ["Да", "Нет"]
      // },
      // {
      //   title: "Планируете ли Вы прибыть на свадьбу с детьми?",
      //   name: "children",
      //   type: "radio",
      //   necessarily: true,
      //   answers: ["Да", "Нет"],
      //   other: "Да"
      // }
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
