// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //init contact obj to push values into
    var contact = {};
    //pushing key/values to our contact object
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;
    //returning updated contact object
    return contact;
} 

//creating function makeContactList that returns an object that manages contacts
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //assume contacts looks like the data in contacts folder
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            //split full name and push them to firstName and lastName variables we just init
            var firstName = fullName.split(' ')[0];
            var lastName = fullName.split(' ')[1];
            //create loop to go through contacts array
            for(var i = 0; i < contacts.length; i++){
                //if fullName argument matches the firstName and lastName keys in the contacts array, return the object it matches
                if(firstName === contacts[i].nameFirst && lastName === contacts[i].nameLast){
                    return contacts[i];
                } else {return undefined;}
            }
        },
        removeContact: function(contact){
            //loop to go through the contacts array and find the contact object that matches the parameter
            for(var x = 0; x < contacts.length; x++){
                //if contact argument matches a contact object on the contacts list, it will be spliced from the array
                if(contact === contacts[x]){
                    contacts.splice(x, 1);
                }
            }
        },
        printAllContactNames: function(){
            //init an array to push all the names into and a string to push the array into
            var arrayOutput = [];
            var stringOutput = '';
            //loop through the contacts array
            for(var i = 0; i < contacts.length; i++){
                //we are going to push each nameFirst and nameLast in the array to our output array
                arrayOutput.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);
            }
            //we will be splicing the arrayOutput array and pushing it into our stringOuput seperating it by line
            stringOutput = arrayOutput.join('\n');
            return stringOutput;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
