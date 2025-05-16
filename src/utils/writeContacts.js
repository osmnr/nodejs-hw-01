import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
     try{
        const updatedContactsStringified = JSON.stringify(updatedContacts);
        await fs.writeFile(PATH_DB, updatedContactsStringified,'utf-8');
    }
    catch(e){
        console.log("error on write file\n", e);
    }
    
};
