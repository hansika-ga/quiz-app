const questions = [
    {
        'que' : 'Which is the largest continent?',
        'a': 'Asia',
        'b': 'Australia',
        'c': 'Antarctica',
        'd': 'Europe',
        'correct' : 'a'
    },
    {
        'que': 'Which is the smallest continent?',
        'a': 'Europe',
        'b': 'Australia',
        'c': 'Asia',
        'd': 'Antartica',
        'correct' : 'b'
    },
    {
        'que' : 'which is the slowest animal in the world?',
        'a': 'Snail',
        'b': 'Tortoise',
        'c': 'Sloth',
        'd': 'Ant',
        'correct' : 'c'
    },
    {
        'que' : 'Which is the smallest state in India?',
        'a': 'Goa',
        'b': 'Karnataka',
        'c': 'Tamil Nadu',
        'd': 'Uttar Pradesh',
        'correct' : 'a'
    },
    {
        'que' : 'Which is the largest animal in the world?',
        'a': 'Elephant',
        'b': 'Blue Whale',
        'c': 'Giraffe',
        'correct' : 'b'
    }
]
let index = 0;
let total = questions.length;
let correct = 0 ,
    incorrect = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll ('.options')
const loadQuestion = () => {
    if(index==total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct ){
        correct++;
    }
    else{
        incorrect++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
           input.checked = false   
        }
    )
}

 const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3> Thank you for playing quiz </h3>
        <h2>Your score : ${correct}/${total} are correct </h2>
    `
}    
loadQuestion();