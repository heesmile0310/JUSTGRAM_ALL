const idBox = document.getElementById("write_id");
const pwBox = document.getElementById("write_password");
const loginBtn = document.querySelector("button");
//html에서 id,password,loginbtn 태그에 접근하는 코드

//input 박스에 글자가 있는지 비교할 수 있는 빈문자열 선언
let idValue = "";
let pwValue = "";

//로그인 가능 함수
let loginAble = () => {
  if (idValue !== idBox.value && pwValue !== pwBox.value) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true; // false를 입력해도 금지표시가 떠서 괜찮음
    loginBtn.style.cursor = "not-allowed";
  }
};

idBox.addEventListener("input", loginAble);
pwBox.addEventListener("input", loginAble);

// idBox.addEventListener("input", () => {
//   if (idValue !== idBox.value) {
//     loginBtn.disabled = false;
//     loginBtn.style.cursor = "pointer";
//   } else {
//     loginBtn.disabled = false; // false를 입력해도 금지표시가 떠서 괜찮음
//     loginBtn.style.cursor = "not-allowed";
//   }
// });

// pwBox.addEventListener("input", () => {
//   if (pwValue !== pwBox.value) {
//     loginBtn.disabled = false;
//     loginBtn.style.cursor = "pointer";
//   } else {
//     loginBtn.disabled = false; // false를 입력해도 금지표시가 떠서 괜찮음
//     loginBtn.style.cursor = "not-allowed";
//   }
// });

// 아래 코드는 수업코드 e
// idBox.addEventListener("input", (e) => {
//   idValue = e.target.value;
//   if (idValue) {
//     loginBtn.disabled = false;
//     loginBtn.style.cursor = "pointer";
//   } else {
//     loginBtn.disabled = true;
//     loginBtn.style.cursor = "not-allowed";
//   }
// });
