const form = document.querySelector('[data-js="quizForm"]');
const userQuestion = document.querySelector('[data-js="userQuestion"]');
const userAnswer = document.querySelector('[data-js="userAnswer"]');
const userTags = document.querySelector('[data-js="tags"]');

// Button Funktion

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /*  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData); */

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
  newQuestion.innerHTML = userQuestion.value;
  ownQuizcard.append(newQuestion);

  // create new Answer
  // get value from form
  // append Answer to card

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("Answer-Text");
  //newAnswer.classList.add("hidden");
  //newAnswer.classList.add("Answer_Text.showAnswer");
  newAnswer.innerHTML = userAnswer.value;
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
  newTagList.append(newTag);

  // create new show Answer-Button
  // append to card

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("Answer-Button");
  newAnswerButton.innerHTML = "Show Answer";
  ownQuizcard.append(newAnswerButton);

  // create new Bookmark-Button
  // append to card
  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("question_bookmark");
  newBookmarkButton.innerHTML = "O";
  /* <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="turquoise"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  ); */
  ownQuizcard.append(newBookmarkButton);
});
