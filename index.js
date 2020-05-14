function theBeatlesPlay(musicians, instruments){
  let facts = [] 
  for(let i = 0; i < musicians.length; i++){
    facts.push(musicians[i] + " plays " + instruments[i])
  }
  return facts
}// add solution here
