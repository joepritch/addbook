function AddressBook(){
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

function  Contact(firstName, lastName, phoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

//separation of logic

var addressBook = new AddressBook();

function displayContactInfo(addressbook){
  var contactsList = $("ul#contacts");
  var html = "";
  addressbook.contacts.forEach(function(contact){
    html += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(html);
}

$(document).ready(function(){
  $("form#newContact").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();
    var inputtedPhoneNumber = $("input#phoneNumber").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactInfo(addressBook);
  });
});
