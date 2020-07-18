/**
 * 「下準備」
 * HTML上でidの付いた要素を取得する
 */
const A = document.getElementById("button-a");
const B = document.getElementById("button-b");
const HINT = document.getElementById("button-hint");
const HINT_DISPLAY = document.getElementById("hint-display");
const RESULT_DISPLAY = document.getElementById("result-display");
const EXPLAIN_DISPLAY = document.getElementById("explain-display");
const CORRECT = document.getElementById("audio-correct");
const WRONG = document.getElementById("audio-wrong");

/**
 * 「解説を表示する」
 * 正解が押されたらexplain-displayのタグの中身に解説を入れる。
 * 
 * (ここでは関数を使いましょう!!回答発表の部分を少し触ります。)
 * 
 * 補足説明:
 * const showExplain = function () {}
 * って書くと showExplain()で呼び出すことができます。
 */
const showExplain = function () {
  EXPLAIN_DISPLAY.textContent = "オーケストラの中でチューバとホルンはどちらも同じロータリーという機構を持っています。けれど、チューバの方がホルンより長いから低い音がでます。";
}

/**
 * 「回答発表」
 * AとB(ボタン)が押された時にresult-displayのタグの中身を変更する。
 * 
 * 補足説明:
 * 正解した方で「解説を表示する」と「音を鳴らす」を呼び出します。
*/
A.onclick = function () {
  RESULT_DISPLAY.textContent = "正解!!!";
  showExplain();
  playCorrect();
}

B.onclick = function () {
  RESULT_DISPLAY.textContent = "残念!!!";
  playWrong();
}

/**
 * 「ヒントを表示する」
 * button-hintが押されたらresult-displayのタグの中身を"GACKTが選んだのは○○"に変更する。
 */
HINT.onclick = function () {
  HINT_DISPLAY.textContent = "GACKTが選んだのはA";
}

/**
 * 「音を鳴らす」
 * audioタグを再生するには、
 * audioタグを取得した関数.play()
 * って書いたらなります。
 * 
 * 回答したときに呼び出せる様にしましょう。
 */
const playCorrect = function () {
  CORRECT.play();
}

const playWrong = function () {
  WRONG.play();
}