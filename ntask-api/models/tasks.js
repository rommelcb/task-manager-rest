module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        { title: 'Buy some food' },
        { title: 'Fix my monitor' },
        { title: 'Eat pizza' }
      ]);
    }
  };
};