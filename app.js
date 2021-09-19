/* 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph. */
function countWords(paragraph, word1, word2) {
    let modified = paragraph.split(" ");
    let count1 = 0,
        count2 = 0,
        result = 0;
    modified.forEach((value) => {
        if (value === word1) {
            count1++
        }
        else if (value === word2) {
            count2++
        }
    })
    if(count1 > count2) {
        result = word1 +" "+ count1;
    } else {
        result = word2 +" "+ count2;
    }
    return result;
}

const paragraph = 'I love teaching If you do not love teaching what else can you love I love JavaScript if you do not love something which can give life to your application what else can you love';
console.log(countWords(paragraph, 'love', 'you'));

//=================================================================================================

// 1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.

function cleanText(sentence) {
    return sentence.replace(/[^a-zA-Z. ]/g, "")
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
// I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?

//=================================================================================================

// 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

function countWords(sentence) {
    let modified = sentence.split(" ");
    let count = 0;
    modified.forEach(value => {
        if(value.length > 1) {
            count++;
        }
    })
    return count
}
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
// 31

//=================================================================================================
// 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.

function varietyOfWords(sentence) {
    let modified = sentence.split(" ")
    let obj = {}
    let count = 0;
    modified.forEach(value => {
        if(value.length >= 1) {
            if(obj[value]) {
                return obj;
            } else obj[value] = value;
        }
    })
    return Object.keys(obj).length;
}
const sentence =  `I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher`
console.log(varietyOfWords(sentence))
//28

//=================================================================================================

// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

function triangle() {
    let value  = '#'
    while (value.length <= 8) {
        console.log(value)
        value = value + '#';
    }
    return value;
}
console.log(triangle())

//=================================================================================================

// 2.b.Write a function which returns array of seven random numbers in a range of 0 - 9. All the numbers must be unique

function sevenRandomNumbers() {
    let result = [];
    let list = [
        0, 1, 2, 3, 4,
        5, 6, 7, 8, 9
    ]
    for(let i=0; i < 8; i++) {
        result.push(list[Math.floor((Math.random() * list.length))])
    }
    return result;
}

console.log(sevenRandomNumbers())
// [1, 4, 5, 7, 9, 8, 0]

//=================================================================================================
/* 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method. */

function reverseArray(arr) {
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray(["A", "B", "C"]));

//=================================================================================================
// 2.d. Write a function which check if items of an array are unique?

function checkUniqueness(arr) {
    let set = new Set();
    for(let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    return (set.size === arr.length);
}
const arrOne = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrOne));
// false