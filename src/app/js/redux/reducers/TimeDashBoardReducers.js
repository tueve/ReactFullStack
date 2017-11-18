const initialState = [
  {
    name: 'REACT',
    id: 0
  }
];

export default function timerDashBoardReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TIMER':
      return [
        ...state,
        {
          name: action.name,
          id: state.length
        }
      ];
    case 'DELETE_TIMER':
      return [...state.filter(timer => timer.name !== action.name)];
    default:
      return state;
  }
}
