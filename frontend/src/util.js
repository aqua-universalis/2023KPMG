const PickSentence = ( array ) => {
    let i = 0;
    let minLength = 7;
    while ( array[i].length < minLength ){
      i ++;
    }
    let sentence = array[i];
    if (sentence.length >15){
      sentence = sentence.slice(0, 15).padEnd(15, " ") + "...";
    }
    return sentence;
  }


  const CutLongSentence = (str,len) => {
    if (str.length > len ){
        return str.slice(0, len).padEnd(len, " ") + "...";
    }

    return str
  }

  export {CutLongSentence} ;
  export default PickSentence;