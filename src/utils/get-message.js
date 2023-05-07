const messages = {
  VERSION_FETCHED: 'Version fetched successfully.',
  NOT_FOUND: 'Route not found.',
};

const getMessage = key => messages[key] || key;

module.exports = getMessage;
