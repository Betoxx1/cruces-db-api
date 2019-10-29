module.exports = app => {
    app.get('/', (req, res) => {
      res.json([{id: 0, status: 'Tasks Api'}]);
    });
  };
  