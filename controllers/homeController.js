const homeRoute = (req, res) => {
  res.send('Hello World');
};

const dicmaryRoute = (req, res) => {
  res.send('Dicmary Zambrano');
};

module.exports = {
  homeRoute,
  dicmaryRoute,
}