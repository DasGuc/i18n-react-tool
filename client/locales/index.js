import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/lib/locale-data/en';

/* Add locale data */
addLocaleData(enLocaleData);

/* Import / Export messages */
export { en } from './messages/en';
