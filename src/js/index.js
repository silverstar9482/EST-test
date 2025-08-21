// [타이머 기능]
// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.

const $inputHRS = document.getElementById('timeHRS');
const $inputMIN = document.getElementById('timeMIN');
const $inputSEC = document.getElementById('timeSEC');
const $resetBtn = document.querySelector('.reset-btn');
const $startBtn = document.querySelector('.start-btn');

function startTimer() {
  count = '';

  

}

// 6. reset버튼 구현
function handleReset() {
  $inputHRS.value = '00';
  $inputMIN.value = '00';
  $inputSEC.value = '00';
}

$resetBtn.addEventListener('click', () => {
  handleReset();
});
