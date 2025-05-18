import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const existingContactsData = await readContacts();
    const newFakeContact = await createFakeContact();
    existingContactsData.push(newFakeContact);
    await writeContacts(existingContactsData);
};

addOneContact();
