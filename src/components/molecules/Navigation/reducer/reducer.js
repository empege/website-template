import { TOGGLE_MENU } from '../../../../actions';

function reducer(navData = {}, action) {

  if (action.type === TOGGLE_MENU) {
    return { ...navData, isMenuActive: !navData.isMenuActive }
  }

  return navData;
}

export default reducer;