const mon = Math.floor(Math.random() * 3); 

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юлия",
            "id_2": "Наталья",
            "id_3": "Екатерина",
            "id_4": "Галина",
            "id_5": "Елена",
            "id_6": "Татьяна",
            "id_7": "Ольга",
            "id_8": "Лидия",
            "id_9": "Лариса",
            "id_10": "Анна"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Федоров",
            "id_2": "Иванов",
            "id_3": "Николаев",
            "id_4": "Егоров",
            "id_5": "Михайлов",
            "id_6": "Петров",
            "id_7": "Степанов",
            "id_8": "Андреев",
            "id_9": "Александров",
            "id_10": "Васильев"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Инженер",
            "id_2": "Хирург",
            "id_3": "Строитель",
            "id_4": "Экономист",
            "id_5": "Мaляр",
            "id_6": "Электрик",
            "id_7": "Юрист",
            "id_8": "Телохранитель",
            "id_9": "Депутат",
            "id_10": "Поэт"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Модель",
            "id_2": "Стилист",
            "id_3": "Массажист",
            "id_4": "Гувернантка",
            "id_5": "Стюардесса",
            "id_6": "Балерина",
            "id_7": "Медсестра",
            "id_8": "Писательница",
            "id_9": "Певица",
            "id_10": "Официантка"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //Фамилия м и ж
     randomSurname: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomFirstName: function() { //  Имена
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    // Отчество м и ж
    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    // Месяца по 30 дней
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    // Месяца по 31 день
    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    // Февраль
    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},

    //Год рождения
    rendomYear: function() { 
        return this.randomIntNumber(1950, 1990) + " г.р.";
    },

    //Профессий
    randomРrofession: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.rendomYear(1950, 1990);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};