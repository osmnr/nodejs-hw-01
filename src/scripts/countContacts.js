import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    const existingContactsData = await readContacts();
    return existingContactsData.length;
};

console.log(await countContacts());
