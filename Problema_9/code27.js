// Ejercicio de clases de javascript
class Film {
    constructor({id, title, director, date, origin, genders, ratings}) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.date = date;
        this.origin = origin;
        this.genders = genders;
        this.ratings = ratings;

        this.IMBDValidation(this.id);
        this.titleValidation(this.title);
        this.directorValidation(this.director);
    }

    stringValidation(property, value) {
        if(!value) return console.warn(`${property} "${value}" is empty`);

        if (typeof value !== "string") return console.error(`${property} "${value}" input is NOT a text string`);

        return true;
    }

    stringLengthValidation(property, value, lengthString) {
        if (value.length > lengthString) return console.error(`${property} "${value}" exceeds the number of characters allowed (${lengthString}).`)

        return true
    }

    IMBDValidation(id) {
        if(this.stringValidation("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB id "${id}" is not valid. It should be 9 characters, the first two letters in lowercase, the other ones numbers`);
            }
        }
    }

    titleValidation(title) {
        if(this.stringValidation("Title", title)) {
            this.stringLengthValidation("Title", title, 100);
        }
    }

    directorValidation(director) {
        if(this.stringValidation("Director", director)) {
            this.stringLengthValidation("Director", director, 50);
        }
    }
 
}

const film = new Film({
    id: "tt1234567",
    title: "Title film",
    director: "Roman"
});