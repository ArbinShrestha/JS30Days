    // start with strings, numbers and booleans
    // let name = 'arbin'
    // let name2 = name
    // console.log(name, name2)
    // name = 'shrestha'
    // console.log(name, name2)

    // let num = 100
    // let num2= num
    // console.log(num, num2)
    // num = 200
    // console.log(num, num2)

    // // let bool = True
    // // let bool2= bool
    // // console.log(bool, bool2)
    // // bool = False
    // // console.log(bool, bool2)


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:
    // const team = players    

    // however what happens when we update that array?
    // team[3] = 'arbin'

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // const team = players    
    // team[3] = 'asdfqwer'
    // console.log(team)
    // console.log(players)

    // So, how do we fix this? We take a copy instead!

    const team2 = players.slice()   //makes an proper copy of the players array 
    team2[3] = 'arbin'
    // console.log(team2 )
    // console.log(players)    //original array is untouched

    // one way

    // or create a new array and concat the old one in
    // const team3 = [].concat(players) 
    // console.log(team3)

    // or use the new ES6 Spread
    const team3 = [...players]
    team3[3] = 'lalala'
    // console.log('spread',team3)
    // console.log(players)
    // now when we update it, the original one isn't changed

    const team4 = Array.from(players)
    team4[3] = 'asdfg'
    // console.log(team4)
    // console.log(players)
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // const cap = person
    // cap.number = 99
    // console.log(cap)
    // console.log(person)

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {number : 99})
    // console.log(cap2)
    // console.log(person)


    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
