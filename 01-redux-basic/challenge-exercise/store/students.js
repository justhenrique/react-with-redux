// Constants
const TIME_INCREMENT = "student/TIME_INCREMENT";
const TIME_DECREMENT = "student/TIME_DECREMENT";
const SET_EMAIL = "student/SET_EMAIL";

// Actions Creators
export const timeIncrement = () => ({ type: TIME_INCREMENT });
export const timeDecrement = () => ({ type: TIME_DECREMENT });
export const setEmail = (email) => ({ type: SET_EMAIL, payload: email });

// reducer
const initialState = {
  name: "TChalla",
  email: "blackpanther@wakanda.com",
  daysRemaining: "120",
};

// Reducer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case TIME_INCREMENT:
      state.daysRemaining = state.daysRemaining + 1;
      break;
    case TIME_DECREMENT:
      state.daysRemaining = state.daysRemaining - 1;
      break;
    case SET_EMAIL:
      state.email = action.payload;
  }
}, initialState);

export default reducer;
