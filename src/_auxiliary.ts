export const withACapital = (word: string) => {  
  
  if (typeof word !== 'string') {
    return word;
  }

  return `${word[0].toUpperCase()}${word.slice(1)}`
}
