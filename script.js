var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var letterscores = [];
console.log(scores)
for (i=0, i<scores.length, i++){
 var score = scores[i];
 if (score < 60) {
 letterscores.push("f");
 }
 if (score < 70 && score > 60) {
 letterscores.push ("d");
 }
 if (score < 70) && score > 80) {
 letterscores.push = ("c");
 }
 if (score < 80) && score > 90) {
 letterscores.push = ("b");
 }
 if (score < 90) {
 letterscores.push = ("a");
 }	
}



console.log("list of letterscores", letterscores)
