for (i = 5; i <= 120; i = i + 10) {
	console.log(i)
}

for (i = 4096; i >= 1; i = i / 2) {
  console.log(i)
}

var pre = ["Barack Obama","Bill Clinton","Ronald Reagan"];

for (i = 0; i < pre.length; i++) {
  console.log("President " + "#" + (i + 1) + " " + pre[i])
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var hehe in antSpecies) {
  console.log(hehe);
}
