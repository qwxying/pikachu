const $nose = $(".nose");
const $tongue = $(".tongue");

const $sound1 = $("#sound1").get(0);
const $sound2 = $("#sound2").get(0);

$nose.on("mouseover", () => {
  $sound1.play();
});
$tongue.on("mouseover", () => {
  $sound2.play();
});
