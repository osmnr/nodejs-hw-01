import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    const existingContactsData = await readContacts();
    return existingContactsData;
};

console.log(await getAllContacts());
