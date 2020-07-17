console.log('Console Tricks')

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');
    // Interpolated
    console.log('Hello I am a %s string!', 'STRING')
    // Styled
    console.log('%c I am some styled text', 'font-size: 30px; color:red')
    // warning!
    console.warn('WARNING!')
    // Error :|
    console.error('ERROR!')
    // Info
    console.info('INFO!')
    // Testing
    console.assert(1 === 2, "That's wrong")
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(document.querySelector('title'))
    console.dir(document.querySelector('title'))
    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.groupEnd(`${dog.name}`)
    })
    // counting
    console.count('Me')
    console.count('Me')
    console.count('Me')
    console.count('Me')
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/dboydgit')
      .then(blob => blob.json())
      .then(res => {
        console.log(res)
        console.timeEnd('fetching data')
      })