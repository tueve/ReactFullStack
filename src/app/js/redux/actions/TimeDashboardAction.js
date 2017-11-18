export default {
  ADD_TIMER: name => ({ type: 'ADD__TIMER', name }),
  DELETE_TIMER: name => ({ type: 'ADD__TIMER', name }),
  UPDATE_TIMER: (prevName, name, subtitle) => {
    console.log(name, subtitle, 'action data');
    return {
      type: 'UPDATE_TIMER',
      name,
      prevName,
      subtitle
    };
  }
};
