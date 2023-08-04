const fs = require("fs/promises");
// const argv = require("yargs").argv;

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContactById = await contacts.getContactById(id);
      if (!getContactById) {
        throw new Error(`Contact with id: ${id} not found`);
      }
      console.log(getContactById);
      break;

    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "dfdf" });
invokeAction({
  action: "add",
  name: "Mango",
  email: "mm@mail.com",
  phone: "33333",
});
