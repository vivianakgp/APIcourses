const globalErrHandler = (err, req, res, next) => {
  const { status, errMsg } = err;
  res.status(status).json({
    specificMsg: errMsg.message,
    generalMsg: " ERROR MIDDLEWARE --> something is not right",
  });
};
module.exports = globalErrHandler;
