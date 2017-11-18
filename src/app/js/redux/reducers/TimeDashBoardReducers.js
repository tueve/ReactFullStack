const initialState = [
  {
    name: 'REACT',
    subtitle: 'project',
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
    case 'UPDATE_TIMER':
      return [
        ...state.map(item => {
          return item.name === action.prevName
            ? {
                ...item,
                name: action.name,
                subtitle: action.subtitle
              }
            : item;
        })
        // ...state.filter(timer => timer.name !== action.prevName),
        // {
        //   ...state.filter(item => item.name === action.prevName),
        //   name: action.name,
        //   subtitle: action.subtitle
        // }
      ];
    default:
      return state;
  }
}
