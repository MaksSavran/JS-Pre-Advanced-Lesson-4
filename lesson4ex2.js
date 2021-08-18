class MyString {
    constructor(string) {
        this.string = string;
    }
    reverse(string) {
        return string.split("").reverse().join("");
    }
    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        let wordsArray = string.split(" ");
        let upperCaseWords = wordsArray.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
        return upperCaseWords.join(" ")
    }
}

const str = new MyString();

// console.log(str.reverse('IVAN'));
// console.log(str.ucFirst('budapest'));
// console.log(str.ucWords('hello world big and beautiful'));
