const $skin = $(".skin");
const $sound1 = $("#sound1").get(0);
const $sound2 = $("#sound2").get(0);
const $sound3 = $("#sound3").get(0);

setInterval(() => {
  $sound3.play();
}, 10000);
$sound3.play();
$skin.on("mousedown", () => {
  $sound2.play();
});
