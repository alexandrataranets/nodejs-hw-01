import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Successfully added one contact.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();