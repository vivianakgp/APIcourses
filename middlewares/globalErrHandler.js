const globalErrHandler = (err, req, res, next) => {
  const { status, errMsg, customMsg } = err;
  res.status(status).json({
    specificMsg: errMsg.message,
    generalMsg: " ERROR MIDDLEWARE --> something is not right",
    customMsg,
  });
};
module.exports = globalErrHandler;
