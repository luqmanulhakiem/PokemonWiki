import PouchDB from 'pouchdb-react-native';
import AsyncStorageDown from 'asyncstorage-down';

const localDB = new PouchDB('db_pokemon', {
  adapter: AsyncStorageDown,
});

export default localDB;