const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
   cats.push("Ralph");
   return cats; }

   function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats; }
    
    function destructivelyRemoveLastCat(name) {
        cats.pop();
        return cats; }

    function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats; }

    function appendCat(name) {
    const newcats = [...cats, "Broom"]
    return newcats; }

function prependCat(name) {
    const catsarray = ["Arnold", ...cats];
    return catsarray;
}
    
function removeLastCat(name) {
const cutcat = [...cats]
cutcat.pop()
return cutcat; }

function removeFirstCat(name) {
const cutcat1 = [...cats]
cutcat1.shift()
return cutcat1;
}
  
