interface SearchFunc {
  (source: string, subString: string): boolean;
}

/* Different ways to write function signature */
// const mySearch: SearchFunc = function(source: string, subString: string): boolean {
// const mySearch: SearchFunc = function(src: string, sub: string): boolean {
const mySearch: SearchFunc = function(src, sub) {
  const result = src.search(sub);

  // return "error"; // errors due to expecting return to be boolean
  return result > -1;
}
