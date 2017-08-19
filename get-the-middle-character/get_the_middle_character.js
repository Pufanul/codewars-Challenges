/* Coded by Alexandru Matache (@Pufanul) */

function getMiddle(s) {
  //if the argument 's' has a remainder when it's length is divided by 2, then return only the character in the middle (the index starts at position 0, that's why it's only  length/2), else return the character in the middle + the one before it.
  return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}
