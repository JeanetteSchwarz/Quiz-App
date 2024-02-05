const form = document.querySelector('[data-js="quizForm"]');
const userQuestion = document.querySelector('[data-js="userQuestion"]');
const userAnswer = document.querySelector('[data-js="userAnswer"]');
const userTags = document.querySelector('[data-js=""]');

// Button Funktion

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // create newCard Container
  // give newCard a class
  // append newCard to the body
  const ownQuizcard = document.createElement("section");
  ownQuizcard.classList.add("Quiz-card");
  document.body.append(ownQuizcard);

  // create new Question
  // get value from form
  // append question to card

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("Question");
  newQuestion.innerHTML = userAnswer.value;
  ownQuizcard.append(newQuestion);

  // create new Answer 
  // get value from form
  // append Answer to card 

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("Answer-Text hidden")
  newAnswer.innerHTML = userQuestion.value;
  ownQuizcard.append(newAnswer);

// create new tag-List
// append Tag-List to card

const newTagList = document.createElement("ul");
newTagList.classList.add("Tags");
ownQuizcard.append(newTagList);

// create new tag 
// get value from form
// append tag to tag-list

const newTag = document.createElement("button");
newTag.innerHTML = userTags.value;
newTagList.append(newtag);

  
);
};
