import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
    try{
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(contacts);
    }
    catch (e){
        console.log('Error on read file:\n', e);
        return [];
    }
};
