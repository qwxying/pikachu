const $nose = $(".nose");
const $tongue = $(".tongue");
const $ball = $(".ball");
const $sound1 = $("#sound1").get(0);
const $sound2 = $("#sound2").get(0);
const $sound3 = $("#sound3").get(0);

$sound2.play();
setTimeout(()=>{$sound1.play();},3000)
$nose.on("mouseover", () => {
  $sound1.play();
});
$tongue.on("mouseover", () => {
  $sound2.play();
});

$ball.on("click", () => {
  $sound3.play();
});
