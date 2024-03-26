/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}



// FIXES BUGS #1 and #6
function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      let payload = jwt.decode(token, { complete: true });
      if (payload) {
        req.curr_username = payload.payload.username || null;
        req.curr_admin = payload.payload.admin || null;
      }
    } else {
      req.curr_username = null;
      req.curr_admin = null;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
}

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};




