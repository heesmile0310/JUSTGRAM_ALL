const commentList = document.getElementsByClassName("comment-list");
const commentInputList = document.getElementsByClassName("feed-comment-input");
const commentInputBtn = document.getElementsByClassName(
  "feed-comment-input-btn"
);

const commentArray = Array.from(commentList);
const commentInputBtnArray = Array.from(commentInputBtn);
const commentInputArray = Array.from(commentInputList);

commentInputBtnArray.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    const value = commentInputList[index];
    const commentList = commentArray[index];

    updateComment(value.value, commentList, "heesmile0310123");
    value.value = "";
  });
});

commentInputArray.forEach((value, index) => {
  value.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const commentList = commentArray[index];

      updateComment(value.value, commentList, "heesmile0310123");
      value.value = "";
    }
  });
});

function updateComment(value, commentList, id) {
  const commentCard = document.createElement("div");
  commentCard.classList.add("feed-comment-card");

  const idSpan = document.createElement("span");
  idSpan.classList.add("text-bold");
  idSpan.textContent = id;

  const contentSpan = document.createElement("span");
  contentSpan.textContent = value;

  commentCard.append(idSpan, contentSpan);
  commentList.append(commentCard);
}

function getCommentList() {
  fetch("../data/feeds.json")
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      json.forEach((comment) => {
        const commentList = commentArray[comment.feedIndex];
        updateComment(comment.content, commentList, comment.id);
      });
    });
}

getCommentList();
