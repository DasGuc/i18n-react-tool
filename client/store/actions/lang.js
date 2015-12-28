const ADD_LANG = 'ADD_LANG';
const DELETE_LANG = 'DELETE_LANG';

export default function lang(state = [], action) {
  switch(action.type) {
    case ADD_LANG:
      return [
        ...state,
        {
          lang: action.lang
        }
      ];
      break;
      
    default:
      return state;
  }
}

export function addLang(lang) {
  return {
    type: ADD_LANG,
    lang
  }
}

export function deleteLang(lang) {
  return {
    type: DELETE_LANG,
    lang
  }
}
