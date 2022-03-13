import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

import English from './en';
import Danish from './da';

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: English,
      da: Danish,
    },
    // saveMissing: true,
    // missingKeyHandler: (ng, ns, key, fallbackValue) => {
    //   throw new Error(`Key not found ${key}, ${ng}, ${ns}, ${fallbackValue}`);
    // },
  });
  
i18n.services
  .formatter
  .add('DATETIME_FULL', (val, lang, opts) => {

    let dtConf = {};
    if(opts && opts.tz){
      dtConf.zone = opts.tz;
    }
    
    return DateTime.fromSeconds(val, dtConf)
      .setLocale(lang)
      .toLocaleString(DateTime.DATETIME_FULL)
  });

i18n.services
  .formatter
  .add('DATE_HUGE', (val, lang, opts) => {

    let dtConf = {};
    if(opts && opts.tz){
      dtConf.zone = opts.tz;
    }
    
    return DateTime.fromSeconds(val, dtConf)
      .setLocale(lang)
      .toLocaleString(DateTime.DATE_HUGE)
  });
