//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
/*    /* global objectValues 
/*QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
    var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
    var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
    assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
    assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
  });
*/
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = []; //create array to push into
    for(var key in object){//for in loop to go through the object
        array.push(object[key]);//push the key values into array
    }
    return array;//returning modified array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
    /* global keysToString */
   /* QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
        var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
        var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
        assert.equal(keysToString(objectOne), "a b ponies dingle");
        assert.equal(keysToString(objectTwo), "c d crayons dangle");
      });*/
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];//create array to push into keys
    for(var key in object){
        array.push(key);//push all the keys into array
    }
    let string = array.join(' ');//join all the keys into a string
    return string;//return modified string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
/* 
QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
    var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
    var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
    assert.equal(valuesToString(objectOne), "one two crayons dangle");
    assert.equal(valuesToString(objectTwo), "three four ponies dingle");
  });
  */
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];//create array to push into
    for(var key in object){//loop through keys in object
        if(typeof object[key] === 'string'){//check to make sure values are a string
            array.push(object[key]);//if so push to array
        }
    }
    let string = array.join(' ');//join all the array values into string with a space between them
    return string;//return modified string
}
    

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
/*
    QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
      assert.equal(arrayOrObject({a:"one"}), "object");
      assert.equal(arrayOrObject([1,2,{}]), "array");
    });
*/
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){//if the argument is an array, return 'array
        return 'array';
    } else if(typeof collection){// if the argument is an object, return object
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
/*
    QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
      assert.equal(capitalizeWord("greg"), "Greg");
      assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
      assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
    });
*/
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let letter = string[0].toUpperCase();//upper casing the first letter in the string
    let restOfString = string.slice(1);//splitting off the rest of the string into a seperate variable
    
    return letter + restOfString;//concatenating letter and restOfString into one and returning it
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
/*QUnit.test("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", function(assert){
    assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
    assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
  });*/
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var newArray = [];//init newArray to push capitalized words into later
    var array = string.split(' ');[]//init array to push words into array uncapitalized
    //create for loop to go through array
    for(let i = 0; i < array.length; i++){
        let capitalize = capitalizeWord(array[i]);//init capitalize which will be out words in the array after they go through thr capitalizeWord function
        newArray.push(capitalize);//words will now get pushed into newArray
    }
    return newArray.join(' ');//we will return all the values in newArray after joining them into a string

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
/*
    QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
      assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
      assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
    });
    */
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let capitalize = capitalizeWord(object.name);//changing the name value and running it on the capitalizeWord function
    let sentence = 'Welcome ' + capitalize + '!'; //concatenating welcome message and out new capitalized value
    return sentence;//returning sentence
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////

/* 
    QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
        assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
        assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
      });
*/
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let capitalName = capitalizeWord(object.name);//capitalizing the name value
    let capitalSpecies = capitalizeWord(object.species);// capitalizing the species value
    let sentence = `${capitalName} is a ${capitalSpecies}`//concatenating capitalName and capitalSpecies to form a new string
    return sentence;//returning new string
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
/*
    QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
        assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
        assert.equal(maybeNoises({noises: []}), "there are no noises");
        assert.equal(maybeNoises({}), "there are no noises");
      });
      */
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //creating for in loop to go through the object
    for(var key in object){
    //if statement to make sure key is noises
        if(key === 'noises'){
            //if statement to check noises key is not empty
            if(object[key].length > 0){
                //if both true, join the array and push to new string variable
              let string = object.noises.join(' ');
              //return string
              return string;
            } 
        }
    }
    //if the if statements dont pass in the for in loop, return 'there are no noises'
    return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
/*
    QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
      var data = "This is a super awesome string of words";
      assert.strictEqual(hasWord(data, "awesome"), true);
      assert.strictEqual(hasWord(data, "words"), true);
      assert.strictEqual(hasWord(data, "turtle"), false);
    });
*/
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let array = string.split(' ');// split the string into an array of all the words
  //create for loop to go through array
  for(let i = 0; i < array.length; i++){
    //if the word matches any of the words in the array, return true
    if(word === array[i]){
      return true;
    }
  }
  //if the if statement in the for loop fails, return false
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
/*
    QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
      assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
      assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    });
*/
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  object.friends.push(name);//should push name into friends array inside the object
  return object;//return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
/*
    QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false);
    });
*/
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  //for in loop to check on the keys
  for(var key in object){
    //if friends key exists
    if(key === 'friends'){
      //create loop to go through friend array
      for(let i = 0; i < object.friends.length; i++){
        //if name is equal to a name in the friends array, return true
        if(name === object.friends[i]){
          return true;
        }
      }
    }
  } 
  //if the if statements inside the for loop fails, return false
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
/*
    QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    });
*/
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  //what array is name in
  //for loop to go through array
  for(let x = 0; x < array.length; x++){
    if(name === array[x].name){
      //now that we are in the name object we must check to see if any name is missing from his friends array
      //lets make another for loop to go through the array again and run them through the includes method
      for(let i = 0; i < array.length; i++){
        //if array[i].name is NOT included in the friends array and its not the name argument, push to notFriends array
        var notFriends = [];
        if( array[x].friends.includes(array[i].name) !== true && array[i].name !== name){
          notFriends.push(array[i].name);
        }
       
      }
    }
  }
  return notFriends;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
/*
    QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    });
*/
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  //make if statement to check if key exists
  for(var x in object){
    if(x === key){
      object[x] = value;
      return object;
    } 
  }
  for(var x in object){
    if(x !== key) {
      object.key = value;    //keeps using key as the key instead of the argument
      return object;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
/*
    QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});

      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["b"])
      assert.deepEqual(data, {a: "one", "hokey": false});

      var data = {a: "one", b: "two", hokey: false};
      removeProperties(data, []);
      assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    });
    */
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
/*
    QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    });
    */
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}