import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const existingContactsData = await readContacts();
    existingContactsData.pop();
    await writeContacts(existingContactsData);
};

removeLastContact();
