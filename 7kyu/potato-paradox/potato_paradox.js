/* Coded by Alexandru Matache (@Pufanul).
p0 - initial humidity percent 
w0 - initial weight 
p1 - final humidity percent
w1 - weight after evaporation = ?
Advanced explanation @ README.md file -> https://github.com/Pufanul/codewars-Challenges/blob/master/7kyu/potato-paradox/README.md 
Potato paradox -> https://en.wikipedia.org/wiki/Potato_paradox
Codewars profile -> https://www.codewars.com/users/Pufanul*/

function potatoes(p0, w0, p1) {
  //I used Math.floor() to return the largest integer less than or equal to the solution.
  return Math.floor((100 - p0) * w0 / (100 - p1));
}
