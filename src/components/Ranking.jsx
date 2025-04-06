import React, { useState } from "react";

const Ranking = () => {
  const [searchTermAthletes, setSearchTermAthletes] = useState("");
  const [searchTermCoaches, setSearchTermCoaches] = useState("");
  const [showAthletes, setShowAthletes] = useState(true);

  const [athletes, setAthletes] = useState([
    {
      id: 1,
      name: "Жанабек Бекжан Ержанұлы",
      coach: "Не указан",
      organization: "СК АЛАТАУ",
      contacts: "Zhuldyz_a85@mail.ru, 87765008037",
      qualification: "5 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 2,
      name: "Камидуллиева Аружан Жандоскызы",
      coach: "Иркатанов Жандос Камидуллиевич",
      organization: "Ск KUMITE",
      contacts: "aruka.judo08@mail.ru, +77076103315",
      qualification: "3 КЮ",
      sportTitle: "",
      rank: "1 юношеский разряд",
    },
    {
      id: 3,
      name: "Ермуканбет Бакдаулет Балтакелдыулы",
      coach: "Не указан",
      organization: "Спорткомплекс Алатау",
      contacts: "ermukanbetb@gmail.com, +77072039351",
      qualification: "6 КЮ",
      sportTitle: "Кандидат в мастера спорта РК",
      rank: "",
    },
    {
      id: 4,
      name: "Байдусен Ерасыл Ергалиулы",
      coach: "Не указан",
      organization: "Алатау с/к",
      contacts: "ergali.burahbaev@gmail.com, +7 701 388 40 85",
      qualification: "6 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 5,
      name: "Махмудов Расул Сухробұлы",
      coach: "Ерімбетов Нұрбек Есіркесінұлы",
      organization: "С/к Алатау",
      contacts: "suhrobo03.73@gmail.com, 87761279300",
      qualification: "4 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 6,
      name: "Мухтарова Сапаргул Муханкизи",
      coach: "Ерімбетов Нұрбек Есіркесінұлы",
      organization: "Ск Алатау",
      contacts: "sajmenovah@gmail.com, +77084849816",
      qualification: "6 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 7,
      name: "Махмудов Расул Сухробұлы",
      coach: "Ерімбетов Нұрбек Есіркесінұлы",
      organization: "СК АЛАТАУ",
      contacts: "mahmudovrasul507@gmail.com, +77761279300",
      qualification: "4 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 8,
      name: "Жаксылык Дана Казбеккызы",
      coach: "Иркатанов Жандос Камидуллиевич",
      organization: "Ск Kumite",
      contacts: "danazh2008@mail.ru, 87081117057",
      qualification: "3 КЮ",
      sportTitle: "",
      rank: "1 юношеский разряд",
    },
    {
      id: 9,
      name: "Исабек Али Жандосұлы",
      coach: "Ерімбетов Нұрбек Есіркесінұлы",
      organization: "СК АЛАТАУ",
      contacts: "zandosisabekov100@gmail.com, +77073771607",
      qualification: "5 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
    {
      id: 10,
      name: "Қонысбек Шынғыс Жанболатұлы",
      coach: "Ерімбетов Нұрбек Есіркесінұлы",
      organization: "СК АЛАТАУ",
      contacts: "Gmahtina@gmail.com, +7 (747) 166-09-60",
      qualification: "4 КЮ",
      sportTitle: "Нет спортивного звания",
      rank: "Без разряда",
    },
  ]);

  const [coaches, setCoaches] = useState([
    {
      id: 1,
      name: "Масягина Варвара Геннадьевна",
      age: 47,
      contacts: "masvar@mail.ru, +77772477790",
      education: "Высшее",
      sportTitle: "Мастер спорта международного класса",
      qualification: "6 ДАН",
    },
    {
      id: 2,
      name: "Гайнолла Бекарыс Рамазанулы",
      age: 29,
      contacts: "D.Kabayeva@mail.ru, +77012338192",
      education: "Высшее",
      sportTitle: "Мастер спорта РК",
      qualification: "",
    },
    {
      id: 3,
      name: "Иркатанов Жандос Камидуллиевич",
      age: 40,
      contacts: "judo.jandos.85@mail.ru, +77015540357",
      education: "Среднее-специальное",
      sportTitle: "Кандидат в мастера спорта РК",
      qualification: "1 ДАН",
    },
    {
      id: 4,
      name: "Абилмансур Хамаржанулы Хамаржанулы",
      age: 27,
      contacts: "Khamarzhanuly00@mail.ru, +77756036961",
      education: "Высшее",
      sportTitle: "Кандидат в мастера спорта РК",
      qualification: "",
    },
    {
      id: 5,
      name: "Ерімбетов Нұрбек Есіркесінұлы",
      age: 34,
      contacts: "yerimbetov1990@mail.ru, +7(775) 156 - 50 - 54",
      education: "Высшее",
      sportTitle: "Мастер спорта РК",
      qualification: "",
    },
    {
      id: 6,
      name: "Адамбек Нариман Женисович",
      age: 28,
      contacts: "nariman.ooo@mail.ru, +77478206007",
      education: "Высшее",
      sportTitle: "Мастер спорта РК",
      qualification: "",
    },
    {
      id: 7,
      name: "Холиков Темур Химатуллоевич",
      age: 42,
      contacts: "temyr.holikov@mail.ru, 87772093775",
      education: "Высшее",
      sportTitle: "Мастер спорта РК",
      qualification: "2 ДАН",
    },
    {
      id: 8,
      name: "Шадраимов Бауржан Ертаевич",
      age: 45,
      contacts: "Shadraimov79@ mail.ru, +7 (777) 208-58-59",
      education: "Высшее",
      sportTitle: "Кандидат в мастера спорта РК",
      qualification: "",
    },
    {
      id: 9,
      name: "Акбергенова Кристина Сергеевна",
      age: 37,
      contacts: "akbergenovakris@gmail.com, +77473424135",
      education: "Высшее",
      sportTitle: "Мастер спорта РК",
      qualification: "3 ДАН",
    },
    {
      id: 10,
      name: "Акбергенов Иса Скакулы",
      age: 42,
      contacts: "almatyjudoclub@gmail.com, +77772892482",
      education: "Высшее",
      sportTitle: "Нет спортивного звания",
      qualification: "4 ДАН",
    },
  ]);

  return (
    <section className="ranking">
      <div className="container">
        <div className="toggle-buttons">
          <button onClick={() => setShowAthletes(true)}>Спортшылар</button>
          <button onClick={() => setShowAthletes(false)}>Жаттықтырушылар</button>
        </div>

        {showAthletes && (
          <div>
            <h2>🥋 Спортшылар</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Аты-жөні бойынша іздеу..."
              value={searchTermAthletes}
              onChange={(e) => setSearchTermAthletes(e.target.value)}
            />
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ФИО</th>
                  <th>Тренер</th>
                  <th>Организация</th>
                  <th>Контакты</th>
                  <th>Квалификация</th>
                  <th>Спортивное звание</th>
                  <th>Разряды</th>
                </tr>
              </thead>
              <tbody>
                {athletes
                  .filter((athlete) =>
                    athlete.name
                      .toLowerCase()
                      .includes(searchTermAthletes.toLowerCase())
                  )
                  .map((athlete, index) => (
                    <tr key={athlete.id}>
                      <td>{index + 1}</td>
                      <td>{athlete.name}</td>
                      <td>{athlete.coach}</td>
                      <td>{athlete.organization}</td>
                      <td>{athlete.contacts}</td>
                      <td>{athlete.qualification}</td>
                      <td>{athlete.sportTitle || "Не указано"}</td>
                      <td>{athlete.rank || "Не указан"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {!showAthletes && (
          <div>
            <h2>👨‍🏫 Жаттықтырушылар</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Аты-жөні бойынша іздеу..."
              value={searchTermCoaches}
              onChange={(e) => setSearchTermCoaches(e.target.value)}
            />
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ФИО</th>
                  <th>Возраст</th>
                  <th>Контакты</th>
                  <th>Образование</th>
                  <th>Спортивное звание</th>
                  <th>Квалификация</th>
                </tr>
              </thead>
              <tbody>
                {coaches
                  .filter((coach) =>
                    coach.name
                      .toLowerCase()
                      .includes(searchTermCoaches.toLowerCase())
                  )
                  .map((coach, index) => (
                    <tr key={coach.id}>
                      <td>{index + 1}</td>
                      <td>{coach.name}</td>
                      <td>{coach.age}</td>
                      <td>{coach.contacts}</td>
                      <td>{coach.education}</td>
                      <td>{coach.sportTitle || "Не указано"}</td>
                      <td>{coach.qualification || "Не указано"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ranking;
