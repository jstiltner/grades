var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var aCount = [];
var bCount = [];
var cCount = [];
var dCount = [];
var fCount = [];

for(i=0; i<11; i++){
	 var score = scores[i];
	 if (score < 60) {
	 fCount.push(scores[i]);
	 }
	 if (score < 70 && score > 60) {
	 dCount.push(scores[i]);
	 }
	 if (score < 80 && score > 70) {
	 cCount.push(score[i]);
	 }
	 if (score < 90 && score > 80) {
	 bCount.push(score[i]);
	 }
	 if (score > 90) {
	 aCount.push(score[i]);
	 }	
}
/*
console.log("list of letterscores", letterscores)
var aCount = [];
var bCount = [];
var cCount = [];
var dCount = [];
var fCount = [];

for(j=0; j<11; j++) {
	var currentScore = letterscores[j];
	if (currentScore = "a") {
	aCount.push(letterscores[j])
	if (currentScore = "b") {
	bCount = bCount + 1}
	if (currentScore="c") {
	cCount = cCount + 1}
	if (currentScore="d") {
	dCount = dCount + 1}
	if (currentScore="f") {
	fCount = fCount + 1}
}
*/
console.log("As - ", aCount.length);
console.log("Bs - ", bCount.length);
console.log("Cs - ", cCount.length);
console.log("Ds - ", dCount.length);
console.log("Fs - ", fCount.length);
var runningLow = 100;
for (i= 0; i< 11; i++){
	if (scores[i]<runningLow){
		var runningLow=scores[i];
	}
}
	console.log("lowest grade", runningLow);
var runningHigh=0;
for (i= 0; i< 11; i++){
	if (scores[i]>runningHigh){
		runningHigh=scores[i];
	}
	}

	console.log("Highest grade", runningHigh);

