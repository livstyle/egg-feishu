'use strict';

module.exports = app => {
  if (app.config.feishu) require('./lib/loader')(app);
};
