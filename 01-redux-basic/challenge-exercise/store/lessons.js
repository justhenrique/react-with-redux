// Constants
const COMPLETE_LESSON = "class/COMPLETE_LESSON";
const COMPLETE_COURSE = "class/COMPLETE_COURSE";
const RESET_COURSE = "class/RESET_COURSE";

// Actions Creators
export const completeLesson = (id) => ({ type: COMPLETE_LESSON, payload: id });
export const completeCourse = () => ({ type: COMPLETE_COURSE });
export const resetCourse = () => ({ type: RESET_COURSE });

// Reducers
const initialState = [
  {
    id: 1,
    name: "Design",
    complete: true,
  },
  {
    id: 2,
    name: "Redux",
    complete: false,
  },
  {
    id: 3,
    name: "JavaScript",
    complete: false,
  },
  {
    id: 4,
    name: "React",
    complete: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETE_LESSON:
      const index = state.findIndex((lesson) => lesson.id === action.payload);
      if (!isNaN(index) && state[index]) state[index].complete = true;
      break;
    case COMPLETE_COURSE:
      state.forEach((lesson) => (lesson.complete = true));
      break;
    case RESET_COURSE:
      state.forEach((lesson) => (lesson.complete = false));
      break;
  }
}, initialState);

export default reducer;
