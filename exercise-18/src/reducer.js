

// export const initialState = {
//   step: 1, // Start at step 1
//   UserName: '',
//     Email: '',
//   Phone: '',
// };

// export function formReducer(state, action) {
//   switch (action.type) {
//     case 'UserName':
//       return {
//         ...state,
//         [action.field]: action.value, // dynamically update the field
//       };
//     case 'Email':
//       return {
//         ...state,
//         step: state.step + 1,
//       };
//     case 'Phone':
//       return {
//         ...state,
//         step: state.step - 1,
//       };
//       case 'Submit':
//       return{
//         ...state,
//         step: state.step +1
//       }
//     // case 'RESET_FORM':
//     //   return initialState;
//     default:
//       return state;
//   }
// }






// reducer.js
export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'edit':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case 'delete':
      return state.filter((contact) => contact.id !== action.payload);
    case 'toggleFavorite':
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    default:
      return state;
  }
};
