import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    let existingContactsData = await readContacts();
    const newContacts = [];
    for (let i = 0 ; i < number ; i++){
        let newFakeContact = await createFakeContact();
        newContacts.push(newFakeContact);
    }
    const updatedContacts = [...existingContactsData, ...newContacts];
    await writeContacts(updatedContacts);
};

generateContacts(5);
