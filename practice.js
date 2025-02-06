const obj = Object.freeze({
    name: 'OpenAI',
    version: '1.0'
  });


  const newImmutableObj = { ...obj, version: '2.0' };
  console.log(newImmutableObj);
  
