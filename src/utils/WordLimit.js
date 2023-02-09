
const WordLimit = (str, limit) => {
   let wording = str.split(' ');

   if(wording.length > limit){
     wording = wording.slice(0, limit);
     return wording.join(' ')+'...';
   }

   return str+'...';
}

export default WordLimit;